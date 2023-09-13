import styles from '../../page.module.css';
import Link from 'next/link';
import next from 'next/types';

export default function DetailPage({
    searchParams,
}: {
    searchParams: {
        price: number;
        term: string;
        totalCost: number;
        ratioValue: string;
        monthlyCost: number;
        bankName: string;
        totalRatioPayment: number;
    };
}) {
    const { price, term, totalCost, ratioValue, monthlyCost, bankName, totalRatioPayment } = searchParams;

    const formatNumber = (value: number) => {
        const formatted = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(value)

        return formatted;
    };

    return (
        <div className={styles.container}>
            <div className={styles['detail-container']}>
            <Link href={{ pathname: "/result", query: { price, term } }}>
                <div className={styles['close-button']} >X</div>
            </Link>
            <h1>Detail Page</h1>
            <div className={styles['detail-row']}>
                <div className={styles['detail-item']}>
                    <h2 className={styles['detail-title']}>Banka Adı</h2>
                    <p className={styles['detail-description']}>{bankName}</p>
                </div>
                <div className={styles['detail-item']}>
                    <h2 className={styles['detail-title']}>Vade</h2>
                    <p className={styles['detail-description']}>{term} Ay</p>
                </div>
                <div className={styles['detail-item']}>
                    <h2 className={styles['detail-title']}>Aylık Ödeme</h2>
                    <p className={styles['detail-description']}>{formatNumber(monthlyCost)}</p>
                </div>
            </div>
            <div className={styles['detail-row']}>
                <div className={styles['detail-item']}>
                    <h2 className={styles['detail-title']}>Toplam Ödeme</h2>
                    <p className={styles['detail-description']}>{formatNumber(totalCost)}</p>
                </div>
                <div className={styles['detail-item']}>
                    <h2 className={styles['detail-title']}>Oran</h2>
                    <p className={styles['detail-description']}>{ratioValue}%</p>
                </div>
                <div className={styles['detail-item']}>
                    <h2 className={styles['detail-title']}>Tutar</h2>
                    <p className={styles['detail-description']}>{formatNumber(price)}</p>
                </div>
            </div>
            <div className={styles['detail-row']}>
                <div className={styles['detail-item']}>
                    <h2 className={styles['detail-title']}>Toplam Faiz Ödemesi</h2>
                    <p className={styles['detail-description']}>{formatNumber(totalRatioPayment)}</p>
                </div>
                <div className={styles['detail-button']}>
                    <h2 className={styles['detail-button-title']}>Başvur</h2>
                </div>
            </div>
        </div>
        </div>
        
    )
}
