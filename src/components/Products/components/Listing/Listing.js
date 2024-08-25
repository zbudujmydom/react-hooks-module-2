import styles from "./Listing.module.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const Listing = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(props.items[0]);

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = (item) => {
    setModalData(item);
    setShowModal(true);
  };

  return (
    <div className={styles.container}>
      {props.items.map((item) => (
        <div key={item.id} className={styles.item} onClick={() => openModal(item)}>
          <div className={styles.image} style={{ backgroundImage: `url(${item.thumbnail})` }} />
          <div>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
      <Modal open={showModal} onClose={closeModal}>
        <Box sx={style}>
          <div>
            <h3>{modalData.title}</h3>
            <div>
              {modalData.images.map((imageSrc) => (
                <img src={imageSrc} key={imageSrc} width="100" height="100" />
              ))}
            </div>
          </div>
          <Button type="outlined" onClick={closeModal}>
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
