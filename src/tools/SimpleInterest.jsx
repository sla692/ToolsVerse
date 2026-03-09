import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import '../styles/ToolStyles.css'

export default function SimpleInterest() {
  const { t } = useLanguage()
  const [principal, setPrincipal] = useState('')
  const [rate, setRate] = useState('')
  const [time, setTime] = useState('')
  const [result, setResult] = useState(null)

  const calculate = () => {
    const p = parseFloat(principal)
    const r = parseFloat(rate)
    const t = parseFloat(time)

    if (isNaN(p) || isNaN(r) || isNaN(t)) {
      alert(t('forms.invalidInput'))
      return
    }

    const interest = (p * r * t) / 100
    const totalAmount = p + interest

    setResult({
      interest: interest.toFixed(2),
      total: totalAmount.toFixed(2)
    })
  }

  return (
    <div className="tool-container">
      <h2>{t('tools.simpleInterest.title')}</h2>
      <p className="tool-description">{t('tools.simpleInterest.description')}</p>

      <div className="tool-input-row">
        <div className="tool-input-group">
          <label htmlFor="principal">{t('forms.principal')}</label>
          <input
            id="principal"
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            placeholder={t('forms.enter')}
          />
        </div>
        <div className="tool-input-group">
          <label htmlFor="rate">{t('forms.interestRate')} (% {t('forms.perAnnum')}):</label>
          <input
            id="rate"
            type="number"
            step="0.01"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder={t('forms.enter')}
          />
        </div>
        <div className="tool-input-group">
          <label htmlFor="time">{t('forms.time')} ({t('forms.years')}):</label>
          <input
            id="time"
            type="number"
            step="0.01"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder={t('forms.enter')}
          />
        </div>
      </div>

      <button onClick={calculate} className="btn-primary">{t('common.calculate')}</button>

      {result && (
        <div className="tool-result">
          <div className="result-item">
            <span className="result-label">{t('forms.simpleInterest')}</span>
            <span className="result-value">${result.interest}</span>
          </div>
          <div className="result-item">
            <span className="result-label">{t('forms.totalAmount')}</span>
            <span className="result-value">${result.total}</span>
          </div>
        </div>
      )}

      <div style={{ marginTop: '40px', padding: '20px', background: 'rgba(0, 212, 255, 0.1)', borderRadius: '8px' }}>
        <p><strong>Formula:</strong> Simple Interest = (P × R × T) / 100</p>
        <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>
          Where P = Principal, R = Rate of interest per annum, T = Time in years
        </p>
      </div>
    </div>
  )
}
