import styles from '@/pages/index.module.css'

//main component where the converter is displayed
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.mainWrapper}>
        <h1>Integer to Roman Numeral converter</h1>

        <input
          type="number"
          name="integer"
          placeholder="Enter your integer here"
          min="1"
          max="1000"
          className={styles.integerInput}
        />

        <h3>Roman Numeral convertion:</h3>
        <div className={styles.result}>XI</div>
      </div>
    </div>
  )
}
