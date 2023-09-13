import React from 'react';
import styles from './page.module.css'

interface TextDisplayCardProps {
    displayedText: string;
}

const TextDisplayCard: React.FC<TextDisplayCardProps> = ({ displayedText }) => {
    return (
        <div className={styles.card} >
            <div className={styles.cardContent}>
                <h2>{displayedText}</h2>
            </div>
        </div>
    );
};

export default TextDisplayCard;
