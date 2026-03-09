import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import '../styles/ToolStyles.css'

export default function MBtoGB() {
  const { t } = useLanguage()
  const [mb, setMb] = useState('')
  const [gb, setGb] = useState('')

  const handleMBChange = (value) => {
    setMb(value)
    if (value === '' || value === '-') {
      setGb('')
    } else {
      const m = parseFloat(value)
      if (!isNaN(m)) {
        const g = (m / 1024).toFixed(6)
        setGb(g)
      }
    }
  }

  const handleGBChange = (value) => {
    setGb(value)
    if (value === '' || value === '-') {
      setMb('')
    } else {
      const g = parseFloat(value)
      if (!isNaN(g)) {
        const m = (g * 1024).toFixed(2)
        setMb(m)
      }
    }
  }

  return (
    <div className="tool-container">
      <h2>{t('tools.mbToGb.title')}</h2>
      <p className="tool-description">{t('tools.mbToGb.description')}</p>

      <div className="tool-input-row">
        <div className="tool-input-group">
          <label htmlFor="mb">{t('forms.megabytes')} (MB):</label>
          <input
            id="mb"
            type="number"
            value={mb}
            onChange={(e) => handleMBChange(e.target.value)}
            placeholder={t('forms.enter')}
            step="0.01"
          />
        </div>
        <div className="tool-input-group">
          <label htmlFor="gb">{t('forms.gigabytes')} (GB):</label>
          <input
            id="gb"
            type="number"
            value={gb}
            onChange={(e) => handleGBChange(e.target.value)}
            placeholder={t('forms.enter')}
            step="0.001"
          />
        </div>
      </div>

      <div style={{ marginTop: '40px', padding: '20px', background: 'rgba(0, 212, 255, 0.1)', borderRadius: '8px' }}>
        <p><strong>{t('common.conversionFormula')}:</strong></p>
        <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
          <li>1 GB = 1024 MB</li>
          <li>1 MB = 0.0009765625 GB</li>
        </ul>
        <p style={{ marginTop: '15px', fontSize: '0.9rem' }}>
          <strong>{t('common.note')}:</strong> {t('common.binaryConversion')}
        </p>
      </div>
    </div>
  )
}
