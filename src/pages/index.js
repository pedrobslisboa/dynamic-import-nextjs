import { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import styles from "./Home.module.css";
import breakingdoor from "./breakingdoor.gif";
import carbon from "./carbon.png";
import github from "./github.svg";
const WithSSR = dynamic(() => import("../components/WithSSR"));
const WithoutSSR = dynamic(() => import("../components/WithoutSSR"), {
  ssr: false,
});
const HereIsJonny = dynamic(() => import("../components/HereIsJonny"));

export default function Home() {
  const [isBroke, setIsBroke] = useState(false);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Dynamic import Nextjs sample.{` `}
            <a
              href="https://github.com/pedrobslisboa/dynamic-import-nextjs"
              target="_blank"
            >
              <img src={github} />
            </a>
          </h1>

          <div className={styles.section}>
            <div>
              <div className={styles.flex}>
                <h2>
                  Let's start with a simple lazy require an example of a react
                  component
                </h2>
                <p>
                  It supposes to load the bundle of this component only after
                  you click the button. You can follow the loading on the
                  network tab on dev tools.
                </p>
                <button
                  className={styles.button}
                  onClick={() => setIsBroke(true)}
                >
                  Break the door
                </button>
                <div className={styles.image}>
                  {!isBroke ? (
                    <img height="200" width="300" src={breakingdoor} />
                  ) : (
                    <HereIsJonny />
                  )}
                </div>
                <div>
                  <strong className={styles.codeTitle}>Usage:</strong>
                  <img className={styles.code} src={carbon} />
                </div>
              </div>
            </div>
            <hr className={styles.divider} />
            <div className={styles.section}>
              <div>
                <WithSSR />
              </div>
            </div>
            <hr className={styles.divider} />
            <div className={styles.section}>
              <WithoutSSR />
            </div>
          </div>
        </main>
      </>
    </div>
  );
}
