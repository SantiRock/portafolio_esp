import { onMount, onCleanup } from "solid-js";
import styles from "./ShaderBackground.module.css";

const BASE = import.meta.env.BASE_URL; // "/" por defecto

async function loadShader(path) {
  const response = await fetch(path);
  if (!response.ok)
    throw new Error(`No se pudo cargar ${path} (${response.status})`);
  return await response.text();
}

function compile(gl, type, src) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(shader));
  }
  return shader;
}

export default function ShaderBackground() {
  let canvas;

  onMount(() => {
    let raf;
    let disposed = false;
    let onResize;
    let onMove;

    // Se registra de forma síncrona, antes de cualquier await
    onCleanup(() => {
      disposed = true;
      cancelAnimationFrame(raf);
      if (onResize) window.removeEventListener("resize", onResize);
      if (onMove) window.removeEventListener("pointermove", onMove);
    });

    const init = async () => {
      const [vertex, fragment] = await Promise.all([
        loadShader(`${BASE}shaders/vertex.glsl`),
        loadShader(`${BASE}shaders/fragment.glsl`),
      ]);
      if (disposed) return; // se desmontó mientras cargaba

      const gl = canvas.getContext("webgl");
      if (!gl) {
        console.error("WebGL no disponible");
        return;
      }

      const vertices = [-1, 1, 0, -1, -1, 0, 1, -1, 0, 1, 1, 0];
      const indices = [3, 2, 1, 3, 1, 0];

      const vertexBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array(vertices),
        gl.STATIC_DRAW,
      );

      const indexBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
      gl.bufferData(
        gl.ELEMENT_ARRAY_BUFFER,
        new Uint16Array(indices),
        gl.STATIC_DRAW,
      );

      const program = gl.createProgram();
      gl.attachShader(program, compile(gl, gl.VERTEX_SHADER, vertex));
      gl.attachShader(program, compile(gl, gl.FRAGMENT_SHADER, fragment));
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error(gl.getProgramInfoLog(program));
        return;
      }
      gl.useProgram(program);

      const coord = gl.getAttribLocation(program, "a_position");
      const uTime = gl.getUniformLocation(program, "u_time");
      const uResolution = gl.getUniformLocation(program, "u_resolution");
      const uLineThickness = gl.getUniformLocation(program, "u_lineThickness");

      const MIN_T = 0.07; // esquina superior izquierda
      const MAX_T = 0.8; // esquina inferior derecha

      let target = 0.4; // valor inicial hasta que se mueva el mouse
      let current = target;

      onMove = (e) => {
        const nx = e.clientX / window.innerWidth; // 0 izquierda → 1 derecha
        const ny = e.clientY / window.innerHeight; // 0 arriba → 1 abajo
        const t = Math.min(Math.max((nx + ny) / 2, 0), 1);
        target = MIN_T + t * (MAX_T - MIN_T);
      };
      window.addEventListener("pointermove", onMove);

      gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(coord);
      gl.clearColor(0.0, 0.0, 0.0, 1.0);

      onResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.uniform2f(uResolution, canvas.width, canvas.height);
      };
      window.addEventListener("resize", onResize);
      onResize();

      const startTime = performance.now();

      const animate = () => {
        const elapsed = (performance.now() - startTime) * 0.001;

        // Suavizado: se acerca al valor objetivo en vez de saltar
        current += (target - current) * 0.08;

        gl.uniform1f(uTime, elapsed);
        gl.uniform1f(uLineThickness, current);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);
        raf = requestAnimationFrame(animate);
      };
      animate();
    };

    init().catch(console.error);
  });

  return <canvas ref={canvas} class={styles.canvas} />;
}
