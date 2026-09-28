import { createSignal } from "solid-js";
import styles from "../Components.module.css";
import { webapi } from "./webapi";

export const wc = Object.keys(webapi).length;

function Site ({obj}) {
  return(
    <div class={`${styles.container} ${styles.cp}`} >
      <h4 class={styles.title}>{obj.title}</h4>
      <p><span class={styles.bold}>Fecha:</span> {obj.fecha}</p>
      <p><span class={styles.bold}>Concepto:</span> {obj.concepto}</p>
      <p><span class={styles.bold}>Stack:</span> {obj.stack}</p>
      <p class={styles.bold}>Enlaces:</p> 
      <ul class={styles.ul}>
        {obj.enlaces.map(({id, enlace, text}) => (
          <li key={id}><a href={enlace} target="_blank">{text}</a></li>
        ))}
      </ul>
    </div>
  )
}

export function Web () {
  const [showAigallery, setShowAigallery] = createSignal(false);
  const [showZhizhwa, setShowZhizhwa] = createSignal(false);
  const [showMd, setShowMd] = createSignal(false);
  const [showPlay, setShowPlay] = createSignal(false);
 
  const open_Aigallery = () => {
    setShowAigallery(prev => !prev);
  };

  const open_Zhizhwa = () => {
    setShowZhizhwa(prev => !prev);
  };

  const open_md = () => {
    setShowMd(prev => !prev);
  };

  const open_Play = () => {
    setShowPlay(prev => !prev);
  };

  const pc = webapi.play.enlaces.length
  const mdc = webapi.md.enlaces.length

  return(
    <div class={styles.container}>
      <ul>
        <li id="zhizhwa" class={styles.proyecto} onclick={open_Zhizhwa}>Zhizhwa / 2025</li>
        {showZhizhwa() && (<Site obj={webapi.zhizhwa}/>)}

        <li id="gallery" class={styles.proyecto} onclick={open_Aigallery}>Galeria / 2025</li>
        {showAigallery() && (<Site obj={webapi.gallery}/>)}

        <li id="md" class={styles.proyecto} onclick={open_md}>Material Didactico / 2024 - 2026 ({mdc})</li>
        {showMd() && (<Site obj={webapi.md}/>)}

        <li id="play" class={styles.proyecto} onclick={open_Play}>Playground / 2022 - 2024 ({pc})</li>
        {showPlay() && (<Site obj={webapi.play}/>)}
      </ul>
    </div>  
  );
}