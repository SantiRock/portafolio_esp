import { createSignal } from "solid-js";
import { recentapi } from "./recienteapi";
import { Images } from "../images/Images";
import styles from "../Components.module.css";

export const rc = Object.keys(recentapi).length;

function Recent ({obj}) {
    return(
    <div class={`${styles.container} ${styles.cp}`}>
        <h4 class={styles.title}>{obj.title}</h4>
        <p><span class={styles.bold}>Año:</span> {obj.fecha}</p>
        <p><span class={styles.bold}>Concepto:</span> {obj.concepto}</p>
        <p class={styles.bold}>Enlaces:</p>
        <ul class={styles.ul}>
            {obj.enlaces.map(({id, enlace, text}) => (
                <li key={id}><a href={enlace} target="_blank">{text}</a></li>
            ))}
        </ul>
        {obj.images && (<Images obj={obj}/>)}
    </div>
    )
}

export function Recientes () {
    const [showAV8, setShowAV8] = createSignal(false);
    const [showAi, setShowAi] = createSignal(false);
    const [showZhizwha, setShowZhizwha] = createSignal(false);

    const open_ai = () => {
        setShowAi(prev => !prev);
    }

    const open_Zhizhwa = () => {
        setShowZhizwha(prev => !prev);
    }

    const open_av8 = () => {
        setShowAV8(prev => !prev);
    }

    return(
        <div class={styles.container}>
            <ul>
                <li id="av8" class={styles.proyecto} onclick={open_av8}>AV8 <span class={styles.type}>Arte Digital</span> / 2025 - 2026</li>
                {showAV8() && (<Recent obj={recentapi.av8}/>)}

                <li id="zhizhwa" class={styles.proyecto} onclick={open_Zhizhwa}>Zhizhwa <span class={styles.type}>net art</span> / 2025</li>
                {showZhizwha() && (<Recent obj={recentapi.zhizhwa}/>)}
            </ul>
        </div>

    );

}
