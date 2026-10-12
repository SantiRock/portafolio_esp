import { createSignal } from "solid-js";
import styles from "../Components.module.css";
import { moviesapi } from "./moviesapi";
import { Images } from "../images/Images";

export const mc = Object.keys(moviesapi).length + 1;

function Movie ({obj}) {
  return(
    <div class={`${styles.container} ${styles.cp}`}>
      <h4 class={styles.title}>{obj.title}</h4>
      {obj.video && (<div class={styles.video} innerHTML={obj.video}></div>)}
      <p><span class={styles.bold}>Año:</span> {obj.fecha}</p>
      <p><span class={styles.bold}>Lugar:</span> {obj.lugar}</p>
      {obj.duracion && (<p><span class={styles.bold}>Duración:</span> {obj.duracion}</p>)}
      <p><span class={styles.bold}>Cargo desempeñado:</span> {obj.cargo}</p>
      <p><span class={styles.bold}>Concepto:</span> {obj.concepto}</p>
      {obj.equipo && (
        <>
          <p><span class={styles.bold}>Equipo:</span></p>  
          <ul class={styles.ul}>
            {obj.equipo.map(({id, nombre, cargo}) => (
              <li key={id} class={styles.list}>{cargo} - {nombre}</li>
            ))}
          </ul>
      </>)}
      {obj.presentaciones && (
        <>
          <p class={styles.bold}>Presentaciones:</p>
          <ul class={styles.ul}>
            {obj.presentaciones.map(({id, fest}) => (
              <li key={id} class={styles.list}>{fest}</li>
            ))}
          </ul>
        </>
      )}
      {obj.enlaces && (
        <>
          <p class={styles.bold}>Enlaces:</p>
          <ul class={styles.ul}>
            {obj.enlaces.map(({id, enlace, text}) => (
              <li key={id}><a href={enlace} target="_blank">{text}</a></li>
            ))}
          </ul>
        </>
      )}
       {obj.images && (<Images obj={obj}/>)}
    </div>
  )
}

function Kinoclaje () {
  return(
    <div class={`${styles.container} ${styles.cp}`}>
      <h4 class={styles.title}>Kinoclaje</h4>
      <div class={styles.video}><div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/6180370?h=4fca2f1c31&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script></div>
      <p><span class={styles.bold}>Año:</span> 2005-2008</p>
      <p><span class={styles.bold}>Lugar:</span> Bogotá, Colombia</p>
      <p><span class={styles.bold}>Cargo desempeñado:</span> Animador</p>
      <p><span class={styles.bold}>Concepto:</span> Colectivo de animación experimental a partir de la intervención directa a cintas de 35mm.</p>
      <p class={styles.bold}>Proyectos en los que participé:</p>
      <ul class={styles.ul}>
        <li class={styles.list}><span class={styles.obra}>Kinoclaje</span>, 16min, 2005</li>
        <li class={styles.list}><span class={styles.obra}>Tomasita y el Caimán</span>, 4min, 2007</li>
        <li class={styles.list}><span class={styles.obra}>Casa e' Palo</span>, videoclip para el grupo Nawal, 4min, 2006</li>
        <li class={styles.list}><span class={styles.obra}>Spot promocional del III Festival de Cine y Video de DD.HH de Sucre, Bolivia</span>, 1min, 2007</li>
        <li class={styles.list}><span class={styles.obra}>Intersección cruce y encuentro</span>, 2min, 2009</li>
      </ul>
      <p class={styles.bold}>Enlaces:</p>
      <ul class={styles.ul}>
        <li class={styles.list}><a href="https://vimeo.com/kinoclaje" target="_blank">Canal Vimeo</a></li>
        <li class={styles.list}><a href="https://kinoclaje.blogspot.com/" target="_blank">Blog</a></li>
      </ul>
      <Images obj={moviesapi.kinoclaje}/>
    </div>
  )
}

function Mas () {
  return(
    <div class={`${styles.container} ${styles.cp}`}>
      <p><span class={styles.bold}>Proyecto: </span><span class={styles.obra}>El Borracho</span>, videoclip de <span class={styles.artista}>Los Guayabo Borthers</span>, Toulouse, Francia, 2018</p>
      <p style="margin-bottom:13px;"><span class={styles.bold}>Cargo desempeñado:</span> Asistente de producción</p>
      <div class={styles.video}>
        <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin-bottom: 13px;">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/e-1Nbw3xN9M?si=up-6zo4TVQPmx5W4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0;"></iframe>
        </div>
      </div>
      <p><span class={styles.bold}>Proyecto: </span><span class={styles.obra}>Sin Remedio</span>, videoclip de <span class={styles.artista}>Nawal feat Ely Guerra</span>, Bogotá, Colombia, 2010</p>
      <p style="margin-bottom:13px;"><span class={styles.bold}>Cargo desempeñado:</span> Asistente de producción</p>
      <div class={styles.video}>
        <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin-bottom: 17px;">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/_QND2j92cm8?si=5wPOZk6XLnuw56_q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0;"></iframe>
        </div>
      </div>
      <p><span class={styles.bold}>Proyecto: </span><span class={styles.obra}>Vida de Artista 2: Fondo Negro</span>, video parodia realizado junto a <span class={styles.artista}>Matú Producciones</span> y <span class={styles.artista}>Quince16</span>, Bogotá, Colombia, 2011</p>
      <p style="margin-bottom:13px;"><span class={styles.bold}>Cargo desempeñado:</span> Co-Realización</p>
      <div class={styles.video}>
        <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin-bottom: 17px;">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/b7mIHPi8130?si=Os2TWw_gEt14eMEL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0;"></iframe>
        </div>
      </div>
      <p><span class={styles.bold}>Proyecto: </span><span class={styles.obra}>Quince16 y Jalea Caliente en Rock al Parque 2016</span>, video experimental entre varios que hize con <span class={styles.artista}>Quince16</span>, Bogotá, Colombia, 2010</p>
      <p style="margin-bottom:13px;"><span class={styles.bold}>Cargo desempeñado:</span> Realizador</p>
      <div class={styles.video}>
        <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin-bottom: 17px;">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/BgQrCTHU-DA?si=inwmXvy5QgU35OMW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0;"></iframe>
        </div>
      </div>
      <p><span class={styles.bold}>Proyecto:</span> Animación realizada en el marco del taller del Espejo Film Festival 2014, dictado por Savio Leite en la Redada, Bogotá</p>
      <p style="margin-bottom:13px;"><span class={styles.bold}>Cargo desempeñado:</span> Co-realizador</p>
      <div class={styles.video} >
        <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin-bottom: 17px;">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/6FUdCdOazGo?si=23dmTGXfTlvJ-6fd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;   gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0;"></iframe>
        </div>
      </div>
      <p>y muchos más ...</p>
    </div>
  )
}



export function Movies () {
  const [showMyswa, setShowMyswa] = createSignal(false);
  const [showAguaSalada, setShowAguaSalada] = createSignal(false);
  const [showAndromeda, setShowAndromeda] = createSignal(false);
  const [showBaladaRock, setShowBaladaRock] = createSignal(false);
  const [showEcuador, setShowEcuador] = createSignal(false);
  const [showKinoclaje, setShowKinoclaje] = createSignal(false);
  const [showJattends, setShowJattends] = createSignal(false);
  const [showArb, setShowArb] = createSignal(false);
  const [showMas, setShowMas] = createSignal(false);

  const open_Myswa = () => {
    setShowMyswa(prev => !prev);
  }

  const open_AguaSalada = () => {
    setShowAguaSalada(prev => !prev);
  }

  const open_Andormeda = () => {
    setShowAndromeda(prev => !prev);
  }

  const open_BaladaRock = () => {
    setShowBaladaRock(prev => !prev);
  }

  const open_Ecuador = () => {
    setShowEcuador(prev => !prev);
  }

  const open_Kinoclaje = () => {
    setShowKinoclaje(prev => !prev);
  }

  const open_Jattends = () => {
    setShowJattends(prev => !prev);
  }

  const open_Arb = () => {
    setShowArb(prev => !prev);
  }

  const open_Mas = () => {
    setShowMas(prev => !prev);
  }

    return(
      <div class={styles.container}>
        <ul>
          <li id="aguasalada" class={styles.proyecto} onclick={open_AguaSalada}>Agua Salada <span class={styles.type}>Corto Ficción</span> / 2022</li>
          {showAguaSalada() && (<Movie obj={moviesapi.aguasalada}/>)}
          
          <li id="andromeda" class={styles.proyecto} onclick={open_Andormeda}>Andrómeda <span class={styles.type}>Corto Experimental</span> / 2016</li>
          {showAndromeda() && (<Movie obj={moviesapi.andromeda} />)}
          
          <li id="baladarock" class={styles.proyecto} onclick={open_BaladaRock}>Balada Rock <span class={styles.type}>Corto Ficción</span> / 2014</li>
          {showBaladaRock() && (<Movie obj={moviesapi.baladarock}/>)}
          
          <li id="ecuador" class={styles.proyecto} onclick={open_Ecuador}>Ecuador <span class={styles.type}>Corto Ficción</span> / 2011</li>
          {showEcuador() && (<Movie obj={moviesapi.equador} />)}
          
          <li id="kinoclaje" class={styles.proyecto} onclick={open_Kinoclaje}>Kinoclaje <span class={styles.type}>Animación</span> / 2005-2009</li>
          {showKinoclaje() && (<Kinoclaje />)}
          
          <li id="jattends" class={styles.proyecto} onclick={open_Jattends}>J'attends la pluie <span class={styles.type}>Cubrimiento de evento</span> / 2019</li>
          {showJattends() && ( <Movie obj={moviesapi.jattends} />)}

          <li id="arb" class={styles.proyecto} onclick={open_Arb}>ARB <span class={styles.type}>Institucional</span> / 2014</li>
          {showArb() && (<Movie obj={moviesapi.arb}/>)}
          
          <li id="mas" class={styles.proyecto} onclick={open_Mas}>+</li>
          {showMas() && (<Mas />)}
      
        </ul>
      </div>
    );
}