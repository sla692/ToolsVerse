import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import '../styles/ToolStyles.css'

export default function KilometersMiles() {
  const { t } = useLanguage()
  const [kilometers, setKilometers] = useState('')
  const [miles, setMiles] = useState('')

  const handleKilometersChange = (value) => {
    setKilometers(value)
    if (value === '' || value === '-') {
      setMiles('')
    } else {
      const km = parseFloat(value)
      if (!isNaN(km)) {
        const m = (km * 0.621371).toFixed(4)
        setMiles(m)
      }
    }
  }

  const handleMilesChange = (value) => {
    setMiles(value)
    if (value === '' || value === '-') {
      setKilometers('')
    } else {
      const m = parseFloat(value)
      if (!isNaN(m)) {
        const km = (m / 0.621371).toFixed(4)
        setKilometers(km)
      }
    }
  }

  return (
    <div className="tool-container">
      <h2>{t('tools.kilometersMiles.title')}</h2>
      <p className="tool-description">{t('tools.kilometersMiles.description')}</p>

      <div className="tool-input-row">
        <div className="tool-input-group">
          <label htmlFor="kilometers">{t('forms.kilometers')} (km):</label>
          <input
            id="kilometers"
            type="number"
            value={kilometers}
            onChange={(e) => handleKilometersChange(e.target.value)}
            placeholder={t('forms.enter')}
            step="0.01"
          />
        </div>
        <div className="tool-input-group">
          <label htmlFor="miles">{t('forms.miles')} (mi):</label>
          <input
            id="miles"
            type="number"
            value={miles}
            onChange={(e) => handleMilesChange(e.target.value)}
            placeholder={t('forms.enter')}
            step="0.01"
          />
        </div>
      </div>

      <div style={{ marginTop: '40px', padding: '20px', background: 'rgba(0, 212, 255, 0.1)', borderRadius: '8px' }}>
        <p><strong>{t('common.conversionFormula')}:</strong></p>
        <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
          <li>1 km = 0.621371 miles</li>
          <li>1 mile = 1.60934 km</li>
        </ul>
      </div>
    </div>
  )
}
