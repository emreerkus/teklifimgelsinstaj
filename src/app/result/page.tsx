"use client"
import Card from '../cardResult';
import styles from '../page.module.css';
import Calculator from '../calculator';
import { useEffect, useState } from 'react';


export default function ResultPage({
    searchParams,
}: {
    searchParams: {
        price: string;
        term: string;
    };
}) {
    const [monthlyCosts, setMonthlyCosts] = useState<number[]>([]);
    const [totalCosts, setTotalCosts] = useState<number[]>([]);
    const [bankNames, setBankNames] = useState<string[]>([]);
    const [ratios, setRatios] = useState<number[]>([]);
    const [payments, setPayments] = useState<number[]>([]);

    const { price, term } = searchParams;
    const userProvidedPrice = price;

    useEffect(() => {
        fetch(`/api/hello?price=${userProvidedPrice}`)
            .then(response => response.json())
            .then(data => {
                if (data.ratios) {
                    const ratios = data.ratios;
                    const updatedMonthlyCosts: number[] = [];
                    const updatedTotalCosts: number[] = [];
                    const updatedBankNames: string[] = [];
                    const updatedRatios: number[] = [];
                    const updatedPayments: number[] = [];

                    for (const ratio of ratios) {
                        const bankName = ratio.bankName;
                        const currentTerm = term;
                        const ratioValue = ratio.ratio;

                        let monthlyRatio = ratioValue / 12;
                        console.log("aylık faiz: ", monthlyRatio)
                        let calculatedMonthlyCost = (parseFloat(userProvidedPrice) * monthlyRatio) / (1 - Math.pow((1 + monthlyRatio), -parseInt(currentTerm)))
                        console.log("aylık ödeme: ", calculatedMonthlyCost);
                        let totalCost = calculatedMonthlyCost * parseInt(currentTerm);
                        let totalRatioPayment = totalCost - parseFloat(userProvidedPrice);

                        updatedMonthlyCosts.push(calculatedMonthlyCost);
                        updatedTotalCosts.push(totalCost);
                        updatedBankNames.push(bankName);
                        updatedRatios.push(ratioValue);
                        updatedPayments.push(totalRatioPayment);

                        console.log(`Bank: ${bankName}, Ratio: ${ratioValue}`);
                    }

                    setMonthlyCosts(updatedMonthlyCosts);
                    setTotalCosts(updatedTotalCosts);
                    setBankNames(updatedBankNames);
                    setRatios(updatedRatios);
                    setPayments(updatedPayments);

                } else if (data.error) {
                    console.error('API error:', data.error);
                }
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }, [userProvidedPrice, term]);

    console.log(monthlyCosts);
    console.log(totalCosts);
    console.log(bankNames);
    console.log(ratios);
    console.log(payments);

    return (
        <div className={styles.container}>
            <div className={styles.secondContainer}>
            <div className={styles.cardContainer} >
                {bankNames.map((bankName, index) => (
                    <Card
                        key={index}
                        bankName={bankName}
                        monthlyCost={monthlyCosts[index]}
                        ratioValue={ratios[index]}
                        totalCost={totalCosts[index]}
                        price={price}
                        term={term}
                        totalRatioPayment={payments[index]}
                    />
                ))}
            </div>
            <div className={styles.calculatorArea}>
                <Calculator defaultPrice={price} defaultTerm={term}/>
            </div>
        </div>
        </div>
    )
}
