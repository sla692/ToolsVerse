import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import '../styles/ToolStyles.css'

export default function PercentageCalculator() {
  const { t } = useLanguage()
  const [value, setValue] = useState('')
  const [percentage, setPercentage] = useState('')
  const [result, setResult] = useState(null)
  const [mode, setMode] = useState('percentage')

  const calculate = () => {
    const num = parseFloat(value)
    const perc = parseFloat(percentage)

    if (isNaN(num) || isNaN(perc)) {
      alert(t('forms.invalidInput'))
      return
    }

    let res
    switch (mode) {
      case 'percentage':
        res = (num * perc) / 100
        break
      case 'percentof':
        res = (perc / num) * 100
        break
      case 'increase':
        res = num + (num * perc) / 100
        break
      case 'decrease':
        res = num - (num * perc) / 100
        break
      default:
        res = 0
    }

    setResult(res.toFixed(2))
  }

  return (
    <div className="tool-container">
      <h2>{t('tools.percentageCalculator.title')}</h2>
      <p className="tool-description">{t('tools.percentageCalculator.description')}</p>

      <div className="tool-input-group">
        <label htmlFor="mode">{t('forms.selectMode')}</label>
        <select
          id="mode"
          value={mode}
          onChange={(e) => setMode(e.target.value)}
        >
          <option value="percentage">Calculate percentage of number</option>
          <option value="percentof">What percentage is X of Y</option>
          <option value="increase">Percentage increase</option>
          <option value="decrease">Percentage decrease</option>
        </select>
      </div>

      <div className="tool-input-row">
        <div className="tool-input-group">
          <label htmlFor="value">
            {mode === 'percentof' ? 'Total value:' : t('forms.number')}
          </label>
          <input
            id="value"
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={t('forms.enter')}
          />
        </div>
        <div className="tool-input-group">
          <label htmlFor="percentage">
            {mode === 'percentof' ? 'Partial value:' : t('forms.percentage')}
          </label>
          <input
            id="percentage"
            type="number"
            value={percentage}
            onChange={(e) => setPercentage(e.target.value)}
            placeholder={t('forms.enter')}
          />
        </div>
      </div>

      <button onClick={calculate} className="btn-primary">{t('common.calculate')}</button>

      {result !== null && (
        <div className="tool-result">
          <div className="result-item">
            <span className="result-label">{t('common.result')}</span>
            <span className="result-value">{result}</span>
          </div>
        </div>
      )}
    </div>
  )
}
