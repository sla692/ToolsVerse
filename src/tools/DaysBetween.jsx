import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import '../styles/ToolStyles.css'

export default function DaysBetween() {
  const { t } = useLanguage()
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [result, setResult] = useState(null)

  const calculate = () => {
    if (!startDate || !endDate) {
      alert(t('forms.selectDates'))
      return
    }

    const start = new Date(startDate)
    const end = new Date(endDate)

    const timeDiff = Math.abs(end - start)
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24))
    const weeksDiff = Math.floor(daysDiff / 7)
    const monthsDiff = Math.floor(daysDiff / 30)

    setResult({
      days: daysDiff,
      weeks: weeksDiff,
      months: monthsDiff
    })
  }

  return (
    <div className="tool-container">
      <h2>{t('tools.daysBetween.title')}</h2>
      <p className="tool-description">{t('tools.daysBetween.description')}</p>

      <div className="tool-input-row">
        <div className="tool-input-group">
          <label htmlFor="startDate">{t('forms.startDate')}</label>
          <input
            id="startDate"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="tool-input-group">
          <label htmlFor="endDate">{t('forms.endDate')}</label>
          <input
            id="endDate"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>

      <button onClick={calculate} className="btn-primary">{t('common.calculate')}</button>

      {result && (
        <div className="tool-result">
          <div className="result-item">
            <span className="result-label">{t('forms.days')}</span>
            <span className="result-value">{result.days}</span>
          </div>
          <div className="result-item">
            <span className="result-label">{t('forms.weeks')}</span>
            <span className="result-value">{result.weeks}</span>
          </div>
          <div className="result-item">
            <span className="result-label">{t('forms.months')}</span>
            <span className="result-value">{result.months}</span>
          </div>
        </div>
      )}
    </div>
  )
}
