"use client"
import React, { useState } from 'react';
import styles from './page.module.css'
import Link from 'next/link'

interface PriceInputProps {
    defaultPrice: string;
    defaultTerm: string;
}

const PriceInput: React.FC<PriceInputProps> = ({defaultPrice, defaultTerm}) => {
    const [price, setPrice] = useState(defaultPrice);
    const [term, setTerm] = useState(defaultTerm);
    const [formattedPrice, setFormattedPrice] = useState('');
    const [priceError, setPriceError] = useState('');
    const [termError, setTermError] = useState('');
    let bankName = "";
    let ratioValue = 0;

    const handleSubmit = () => {
        if((parseInt(price, 10) >= 10000 && parseInt(price, 10) <= 999999) && (parseInt(term, 10) >= 1 && parseInt(term, 10) <= 24)){
            setPriceError('');
            setTermError('');
            console.log("BUTONA TIKLANDI");
            return true;
        }else{
            return false;
        }
    };

    const formatNumber = (value: number) => {
        const formatted = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(value)

        return formatted;
    };

    const handleChange = (e: any) => {
        const inputPrice = e.target.value;
        if (inputPrice.length <= 6) {
            const formatted = formatNumber(inputPrice);
            setPrice(inputPrice);
            setFormattedPrice(formatted);
        }
    };
    
    return (

        <div className={styles.calculatorArea}>
           <p style={{ fontWeight: 'bold', fontSize: '1.6rem', justifyContent: 'center' }}>İhtiyaç Kredisi</p>
           <input
                type="number"
                placeholder="Tutar"
                value={price}
                onChange={handleChange}
                min={10000}
                max={999999}
                style={{ width: '80%', padding: '10px', marginBottom: '10px', height: '50px' }}
                className={styles.inputField}
                maxLength={6}
            />
            <input
                type="number"
                placeholder="Vade"
                value={term}
                onChange={(e) => {
                    const inputTerm = e.target.value;
                    if (inputTerm.length <= 2) {
                        setTerm(inputTerm);
                        setTermError('');
                    }
                }}
                min={1}
                max={36}
                style={{ width: '80%', padding: '10px', marginBottom: '10px', height: '50px' }}
                className={styles.inputField}
            />
            <Link href={{ pathname: "/result", query: { price, term } }}>
                <button
                    className={styles.custombutton}
                    onClick={(e) => {
                    if(!handleSubmit()){
                        e.preventDefault()
                        alert("İşleminiz dikkate alınmadı, tutar $10.000 ve $300.000 arası, vade 1-24 arası olmalı.");
                    }
                    }}
                >
                    <p> TeklifimGelmesin {">"} </p>
                </button>
            </Link>
        </div>
    );
};

export default PriceInput;
