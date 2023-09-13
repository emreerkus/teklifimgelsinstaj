"use client"
import Calculator from './calculator';
import styles from './page.module.css';

function App() {

  return (

    <div className={styles.container}>
      <div className={styles.container2}>
        <div className={styles.sponsorArea}>
          <div className={styles.informationPanel}>
            <h2>Bankaların Sana Özel Teklifleri</h2>
            <p>Onlarca bankanın en avantajlı İhtiyaç Kredisi teklifleri TeklifimGelmesin.com’da</p>
            <button>Talep Et</button>
            <button>Karşılaştır</button>
            <button>Başvur</button>
          </div>
        </div>
       
          <Calculator defaultPrice='price' defaultTerm='term'/>
        
      </div>
    </div>
  );
}

export default App;
