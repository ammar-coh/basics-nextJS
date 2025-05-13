import Image from "next/image";
import styles from "./page.module.css";
import Hello from './components/hello'

export default function Home() {
  console.log('server?')
  return (
    <div className={styles.page}>
      <h1>Next JS APP</h1>
      <Hello />
    </div>
  );
}
