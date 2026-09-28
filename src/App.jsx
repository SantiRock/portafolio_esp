import { createSignal } from 'solid-js';
import styles from './App.module.css';
import { About } from './components/about/About';
import { Recientes, rc } from './components/recientes/Recientes';
import { Prod, pc } from './components/prod/Prod';
import { Video, vc } from './components/video/Video';
import { Movies, mc } from './components/movies/Movies';
import { Sound, sc } from './components/sound/Sound';
import { Web, wc } from './components/code/Web';
import { Espacios, ec } from './components/espacios/Espacios';
import { Footer } from './components/footer/Footer';

function App() {
  const [showProd, setShowProd] = createSignal(false);
  const [showVideo, setShowVideo] = createSignal(false);
  const [showMovies, setShowMovies] = createSignal(false);
  const [showSound, setShowSound] = createSignal(false);
  const [showWeb, setShowWeb] = createSignal(false);
  const [showEspacios, setShowEspacios] = createSignal(false);
  const [showRecientes, setShowRecientes] = createSignal(true);

  const open_Prod = () => {
      setShowProd(prev => !prev);
  }

  const open_Video = () => {
    setShowVideo(prev => !prev); 
  }

  const open_Movies = () => {
    setShowMovies(prev => !prev);
  }

  const open_Sound = () => {
    setShowSound(prev => !prev);
  }

  const open_Web = () => {
    setShowWeb(prev => !prev);
  }

  const open_Espacios = () => {
    setShowEspacios(prev => !prev);
  }

  const open_Recientes = () => {
    setShowRecientes(prev => !prev);
  }

  return (
    <div class={styles.container}>
      <About />
      <main>

        <h3 id="recientes" onclick={open_Recientes}>Recientes <span class={styles.cant}>({rc})</span></h3>
        {showRecientes() && (<Recientes />)}
       
        <h3 id="video" onclick={open_Video}>Video Performance <span class={styles.cant}>({vc})</span></h3>
        {showVideo() && (<Video />)}

        <h3 id="sound" onclick={open_Sound}>Sonido <span class={styles.cant}>({sc})</span></h3>
        {showSound() && (<Sound />)}

        <h3 id="web" onclick={open_Web}>Web <span class={styles.cant}>({wc})</span></h3>
        {showWeb() && (<Web />)}

        <h3 id="spaces" onclick={open_Espacios}>Espacios & Asociaciones <span class={styles.cant}>({ec})</span></h3>
        {showEspacios() && (<Espacios />)}

        <h3 id="movies" onclick={open_Movies}>Filmografía <span class={styles.cant}>({mc})</span></h3>
        {showMovies() && (<Movies />)}

         <h3 id="prod" onclick={open_Prod}>Producción de eventos <span class={styles.cant}>({pc})</span></h3>
        {showProd() && (<Prod />)}

      </main>
      <Footer />
    </div>
  );
}

export default App;
