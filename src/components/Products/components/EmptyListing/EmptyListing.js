import styles from "./EmptyListing.module.css";

export const EmptyListing = () => {
  return (
    <div>
      <h3 className={styles.heading}>No offers</h3>
    </div>
  );
};
