import styles from "./App.module.css";
import { Products } from "./components/Products/Products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <main className={styles.mainContainer}>
      <h1 className={styles.heading}>Test app</h1>
      <FontAwesomeIcon icon={faCoffee} size="5x" />
      <Products />
    </main>
  );
}

export default App;
