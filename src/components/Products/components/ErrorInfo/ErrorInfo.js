import Button from "@mui/material/Button";
import styles from "./ErrorInfo.module.css";

export const ErrorInfo = () => {
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <section>
      <p className={styles.info}>Try again</p>
      <Button variant="contained" onClick={handleClick}>
        Reload
      </Button>
    </section>
  );
};
