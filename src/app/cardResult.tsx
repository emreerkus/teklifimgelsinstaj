import React, { useState } from 'react';
import styles from './page.module.css';
import Modal from './components/model';
import Link from 'next/link'


interface TextDisplayCardProps {
    monthlyCost: number;
    totalCost: number;
    ratioValue: number;
    bankName: string;
    price: string;
    term: string;
    totalRatioPayment: number;
}

const TextDisplayCard: React.FC<TextDisplayCardProps> = ({ bankName, monthlyCost, totalCost, ratioValue, price, term, totalRatioPayment }) => {
    let linkHref = '';

    if (bankName === "Bank A") {
        linkHref = "https://www.ziraatbank.com.tr/tr";
    } else if (bankName === "Bank B") {
        linkHref = "https://www.garantibbva.com.tr/";
    } else if (bankName === "Bank C") {
        linkHref = "https://www.akbank.com/tr-tr/sayfalar/default.aspx";
    } else if (bankName === "Bank D") {
        linkHref = "https://www.denizbank.com/";
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    const formatNumber = (value: number) => {
        const userLanguage = window.navigator.language;
        const formatted = new Intl.NumberFormat(userLanguage, {
            style: 'currency',
            currency: 'USD'
        }).format(value)

        return formatted;
    };

    return (
        <div className={styles.resultCard}>
            <div className={styles.resultCardContent}>
                <div className={styles.resultCardContainer}>
                    <h3>Banka Adı</h3>
                    <h2>{bankName}</h2>
                </div>
                <div className={styles.resultCardContainer}>
                    <h3>Aylık Taksit</h3>
                    <h2>{formatNumber(monthlyCost)}</h2>
                </div>
                <div className={styles.resultCardContainer}>
                    <h3>Oran</h3>
                    <h2>{ratioValue}</h2>
                </div>
                <div className={styles.resultCardContainer}>
                    <h3>Toplam Mal</h3>
                    <h2>{formatNumber(totalCost)}</h2>
                </div>
                <div className="ant-row ant-row-middle" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <a href={linkHref} target="_blank" rel="noopener noreferrer" className={styles.buttonLink}>
                        Başvur
                    </a>
                    <div style={{ marginTop: '10px' }}></div>
                    <Link href={{ pathname: "/result/detail", query: { price, term, totalCost, ratioValue, monthlyCost, bankName, totalRatioPayment } }} className={styles.buttonLink} onClick={isModalOpen ? closeModal : openModal}>
                        {isModalOpen ? "Kapat" : "Detay"}
                    </Link>
                </div>
            </div>

            
        </div>
    );
};

export default TextDisplayCard;
