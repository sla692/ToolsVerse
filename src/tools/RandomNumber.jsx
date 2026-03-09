import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import '../styles/ToolStyles.css'

export default function RandomNumber() {
  const { t } = useLanguage()
  const [min, setMin] = useState(1)
  const [max, setMax] = useState(100)
  const [count, setCount] = useState(5)
  const [numbers, setNumbers] = useState([])

  const generateNumbers = () => {
    const minNum = parseInt(min)
    const maxNum = parseInt(max)
    const cnt = parseInt(count)

    if (minNum > maxNum) {
      alert(t('forms.minGreaterThanMax'))
      return
    }

    const generated = []
    for (let i = 0; i < cnt; i++) {
      const num = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum
      generated.push(num)
    }
    setNumbers(generated)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(numbers.join(', '))
    alert(t('common.copiedToClipboard'))
  }

  return (
    <div className="tool-container">
      <h2>{t('tools.randomNumber.title')}</h2>
      <p className="tool-description">{t('tools.randomNumber.description')}</p>

      <div className="tool-input-row">
        <div className="tool-input-group">
          <label htmlFor="min">{t('forms.minimumValue')}:</label>
          <input
            id="min"
            type="number"
            value={min}
            onChange={(e) => setMin(e.target.value)}
          />
        </div>
        <div className="tool-input-group">
          <label htmlFor="max">{t('forms.maximumValue')}:</label>
          <input
            id="max"
            type="number"
            value={max}
            onChange={(e) => setMax(e.target.value)}
          />
        </div>
        <div className="tool-input-group">
          <label htmlFor="count">{t('forms.count')}:</label>
          <input
            id="count"
            type="number"
            min="1"
            max="100"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
        </div>
      </div>

      <button onClick={generateNumbers} className="btn-primary">{t('common.generate')}</button>

      {numbers.length > 0 && (
        <div>
          <div className="tool-result" style={{ marginBottom: '20px' }}>
            {numbers.map((num, idx) => (
              <div key={idx} className="result-item">
                <span className="result-value">{num}</span>
              </div>
            ))}
          </div>
          <button onClick={copyToClipboard} className="btn-secondary" style={{ width: '100%' }}>
            {t('common.copyAll')}
          </button>
        </div>
      )}
    </div>
  )
}
