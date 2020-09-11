import React from "react";
import styles from "./WithSSR.module.css";
import viago from "./viago.gif";
import carbon from "./carbon.png";

export default function Viago() {
  return (
    <div className={styles.wrapper}>
      <h2>
        This component is loaded with the page separated from the bundle and its SSR friendly:
      </h2>
      <p>
        Then you can check
        on source code (<strong>CTRL + U</strong>) for it, search for this entire
        sentence, or even "Viago is going to party" which is the image's alt.
      </p>
      <div>
        <img height="250" width="300" alt="Viago is gonna party" src={viago} />
      </div>
      <div>
        <strong className={styles.codeTitle}>Usage:</strong>
        <img className={styles.code} src={carbon} />
      </div>
    </div>
  );
}
