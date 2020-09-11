import React from "react";
import styles from "./WithoutSSR.module.css";
import rickBaker from "./rickBaker.webp";
import carbon from "./carbon.png";

export default function SSRComponent() {
  return (
    <div className={styles.wrapper}>
      <h2>And this one is desabled for ssr</h2>
      <p>
        So it'll not appear on the source code, you can check! Look for this
        entire sentence, or even "Rick Backer, the wilder one" which is the
        image's alt.
      </p>
      <div>
        <img height="200" width="300" alt="Rick Baker" src={rickBaker} />
      </div>
      <div>
      <strong className={styles.codeTitle}>Usage:</strong>
        <img className={styles.code} src={carbon} />
      </div>
    </div>
  );
}
