import styles from '@/pages/index.module.css'
import { calculate } from '@/utils/index'
import { useState } from 'react'

const MAX_NUMBER = 1000;
const MIN_NUMBER = 1;

//main component where the converter is displayed
export default function Home() {
  const [result, setResult] = useState("");

  //this ensures we don't input numbers < 1 or > 1000
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const parsedInput = parseInt(e.target.value);
    if(parsedInput > MAX_NUMBER) {
      e.target.value = MAX_NUMBER.toString();
    }
    if(parsedInput < MIN_NUMBER ) {
      e.target.value = MIN_NUMBER.toString();
    }
  }

  //this handles the submit of the input
  function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
    if(e.key !== 'Enter') {
      return;
    }

    const parsedInput = parseInt((e.target as HTMLInputElement).value);
    setResult(calculate(parsedInput));
  }

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
          onChange={(e)=> handleInputChange(e)}
          onKeyUp={(e)=> handleKeyUp(e)}
        />

        <h3>Roman Numeral convertion:</h3>
        <div className={styles.result}>
          {result}
        </div>
      </div>
    </div>
  )
}
