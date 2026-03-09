import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import '../styles/ToolStyles.css'

export default function CelsiusFahrenheit() {
  const { t } = useLanguage()
  const [celsius, setCelsius] = useState('')
  const [fahrenheit, setFahrenheit] = useState('')

  const handleCelsiusChange = (value) => {
    setCelsius(value)
    if (value === '' || value === '-') {
      setFahrenheit('')
    } else {
      const c = parseFloat(value)
      if (!isNaN(c)) {
        const f = (c * 9/5) + 32
        setFahrenheit(f.toFixed(2))
      }
    }
  }

  const handleFahrenheitChange = (value) => {
    setFahrenheit(value)
    if (value === '' || value === '-') {
      setCelsius('')
    } else {
      const f = parseFloat(value)
      if (!isNaN(f)) {
        const c = (f - 32) * 5/9
        setCelsius(c.toFixed(2))
      }
    }
  }

  return (
    <div className="tool-container">
      <h2>{t('tools.celsiusFahrenheit.title')}</h2>
      <p className="tool-description">{t('tools.celsiusFahrenheit.description')}</p>

      <div className="tool-input-row">
        <div className="tool-input-group">
          <label htmlFor="celsius">{t('forms.celsius')} (°C):</label>
          <input
            id="celsius"
            type="number"
            value={celsius}
            onChange={(e) => handleCelsiusChange(e.target.value)}
            placeholder={t('forms.enter')}
            step="0.01"
          />
        </div>
        <div className="tool-input-group">
          <label htmlFor="fahrenheit">{t('forms.fahrenheit')} (°F):</label>
          <input
            id="fahrenheit"
            type="number"
            value={fahrenheit}
            onChange={(e) => handleFahrenheitChange(e.target.value)}
            placeholder={t('forms.enter')}
            step="0.01"
          />
        </div>
      </div>

      <div style={{ marginTop: '40px', padding: '20px', background: 'rgba(0, 212, 255, 0.1)', borderRadius: '8px' }}>
        <p><strong>{t('common.formulas')}:</strong></p>
        <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
          <li>°F = (°C × 9/5) + 32</li>
          <li>°C = (°F - 32) × 5/9</li>
        </ul>
      </div>
    </div>
  )
}
