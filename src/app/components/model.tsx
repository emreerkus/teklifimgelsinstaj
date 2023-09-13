import React from 'react';
import styles from '../page.module.css'; 

interface ModalProps {
  onClose: () => void;
  bankName: string;
  price: string;
  totalPrice: number;
  term: string;
}

const Modal: React.FC<ModalProps> = ({ onClose, bankName, price, totalPrice, term }) => {
  return (
    <div className={styles.modalBackdrop}>
        <div className={styles.modalUpper}>
            <div className={styles.modalItem}>
                <h1>{bankName}</h1>
            </div>
        </div>
        <div className={styles.modalBottom} >
            <div className={styles.modalItem}>
                <div>
                    tutar
                </div>
                <div>
                    {price}
                </div>
            </div>
            <div className={styles.modalItem}>
                <div>
                    toplam tutar
                </div>
                <div>
                    {totalPrice}
                </div>
            </div>
            <div className={styles.modalItem}>
                <div>
                    term
                </div>
                <div>
                    {term}
                </div>
            </div>
        </div>
        <button className={styles.detailbutton} onClick={onClose}>Close</button>
    </div>
  );
};

export default Modal;
