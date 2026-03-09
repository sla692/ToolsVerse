import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import '../styles/ToolStyles.css'

export default function BMICalculator() {
  const { t } = useLanguage()
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [unit, setUnit] = useState('metric')
  const [bmi, setBmi] = useState(null)
  const [category, setCategory] = useState('')

  const calculateBMI = () => {
    if (!weight || !height) {
      alert(t('forms.invalidInput'))
      return
    }

    let w = parseFloat(weight)
    let h = parseFloat(height)

    if (unit === 'metric') {
      setBmi((w / (h * h)).toFixed(1))
    } else {
      // Convert pounds to kg and inches to meters
      w = w * 0.453592
      h = h * 0.0254
      setBmi((w / (h * h)).toFixed(1))
    }

    const bmiValue = parseFloat(w / (h * h).toFixed(1))
    if (bmiValue < 18.5) setCategory('Underweight')
    else if (bmiValue < 25) setCategory('Normal weight')
    else if (bmiValue < 30) setCategory('Overweight')
    else setCategory('Obese')
  }

  return (
    <div className="tool-container">
      <h2>{t('tools.bmiCalculator.title')}</h2>
      <p className="tool-description">{t('tools.bmiCalculator.description')}</p>

      <div className="tool-input-group">
        <label htmlFor="unit">{t('forms.unitSystem')}</label>
        <select
          id="unit"
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
        >
          <option value="metric">{t('forms.metric')}</option>
          <option value="imperial">{t('forms.imperial')}</option>
        </select>
      </div>

      <div className="tool-input-row">
        <div className="tool-input-group">
          <label htmlFor="weight">
            {t('forms.weight')} ({unit === 'metric' ? 'kg' : 'lbs'}):
          </label>
          <input
            id="weight"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder={t('forms.enter')}
          />
        </div>
        <div className="tool-input-group">
          <label htmlFor="height">
            {t('forms.height')} ({unit === 'metric' ? 'm' : 'inches'}):
          </label>
          <input
            id="height"
            type="number"
            step="0.01"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder={t('forms.enter')}
          />
        </div>
      </div>

      <button onClick={calculateBMI} className="btn-primary">{t('common.calculate')}</button>

      {bmi && (
        <div className="tool-result">
          <div className="result-item">
            <span className="result-label">BMI</span>
            <span className="result-value">{bmi}</span>
          </div>
          <div className="result-item">
            <span className="result-label">{t('common.category')}</span>
            <span className="result-value" style={{ fontSize: '1.2rem' }}>{category}</span>
          </div>
        </div>
      )}

      <div className="tool-result" style={{ marginTop: '40px' }}>
        <div style={{ padding: '20px', background: 'rgba(0, 212, 255, 0.1)', borderRadius: '8px' }}>
          <p><strong>{t('common.categories')}</strong></p>
          <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
            <li>Underweight: BMI &lt; 18.5</li>
            <li>Normal weight: BMI 18.5 - 24.9</li>
            <li>Overweight: BMI 25 - 29.9</li>
            <li>Obese: BMI ≥ 30</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
