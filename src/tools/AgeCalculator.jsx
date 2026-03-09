import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import '../styles/ToolStyles.css'

export default function AgeCalculator() {
  const { t } = useLanguage()
  const [birthDate, setBirthDate] = useState('')
  const [age, setAge] = useState(null)

  const calculateAge = () => {
    if (!birthDate) {
      alert(t('forms.birthDateError'))
      return
    }

    const today = new Date()
    const birth = new Date(birthDate)
    
    if (birth > today) {
      alert(t('forms.futureError'))
      return
    }

    let years = today.getFullYear() - birth.getFullYear()
    let months = today.getMonth() - birth.getMonth()
    let days = today.getDate() - birth.getDate()

    if (days < 0) {
      months--
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0)
      days += prevMonth.getDate()
    }

    if (months < 0) {
      years--
      months += 12
    }

    setAge({ years, months, days })
  }

  return (
    <div className="tool-container">
      <h2>{t('tools.ageCalculator.title')}</h2>
      <p className="tool-description">{t('tools.ageCalculator.description')}</p>
      
      <div className="tool-input-group">
        <label htmlFor="birthDate">{t('forms.selectBirthDate')}</label>
        <input
          id="birthDate"
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
        <button onClick={calculateAge} className="btn-primary">{t('common.calculate')}</button>
      </div>

      {age && (
        <div className="tool-result">
          <div className="result-item">
            <span className="result-label">{t('forms.years')}</span>
            <span className="result-value">{age.years}</span>
          </div>
          <div className="result-item">
            <span className="result-label">{t('forms.months')}</span>
            <span className="result-value">{age.months}</span>
          </div>
          <div className="result-item">
            <span className="result-label">{t('forms.days')}</span>
            <span className="result-value">{age.days}</span>
          </div>
        </div>
      )}
    </div>
  )
}
