import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import '../styles/ToolStyles.css'

const firstNames = ['James', 'Mary', 'Robert', 'Patricia', 'Michael', 'Jennifer', 'William', 'Linda', 'David', 'Barbara', 'Richard', 'Susan', 'Joseph', 'Jessica', 'Thomas', 'Sarah', 'Charles', 'Karen', 'Christopher', 'Nancy', 'Daniel', 'Lisa', 'Matthew', 'Betty', 'Anthony', 'Margaret', 'Donald', 'Sandra', 'Steven', 'Ashley', 'Paul', 'Kimberly', 'Andrew', 'Emily', 'Joshua', 'Donna', 'Kenneth', 'Michelle', 'Kevin', 'Dorothy', 'Brian', 'Carol', 'Edward', 'Amanda', 'Ronald', 'Melissa', 'Anthony', 'Deborah', 'Frank', 'Stephanie', 'Ryan', 'Rebecca']

const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin', 'Lee', 'Perez', 'Thompson', 'White', 'Harris', 'Sanchez', 'Clark', 'Ramirez', 'Lewis', 'Robinson', 'Young', 'Allen', 'King', 'Wright', 'Scott', 'Torres', 'Peterson', 'Phillips', 'Campbell', 'Parker', 'Evans', 'Edwards', 'Collins', 'Reeves', 'Morris', 'Murphy', 'Rogers', 'Morgan', 'Peterson', 'Cooper']

export default function NameGenerator() {
  const { t } = useLanguage()
  const [names, setNames] = useState([])
  const [count, setCount] = useState(5)

  const generateNames = () => {
    const newNames = []
    for (let i = 0; i < count; i++) {
      const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
      const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]
      newNames.push(`${firstName} ${lastName}`)
    }
    setNames(newNames)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(names.join('\n'))
    alert(t('common.copiedToClipboard'))
  }

  return (
    <div className="tool-container">
      <h2>{t('tools.nameGenerator.title')}</h2>
      <p className="tool-description">{t('tools.nameGenerator.description')}</p>

      <div className="tool-input-row">
        <div className="tool-input-group">
          <label htmlFor="count">{t('forms.numberOfNames')}</label>
          <input
            id="count"
            type="number"
            min="1"
            max="50"
            value={count}
            onChange={(e) => setCount(parseInt(e.target.value))}
          />
        </div>
      </div>

      <button onClick={generateNames} className="btn-primary">{t('common.generate')}</button>

      {names.length > 0 && (
        <div>
          <div className="tool-result" style={{ marginBottom: '20px' }}>
            {names.map((name, idx) => (
              <div key={idx} className="result-item">
                <span className="result-value">{name}</span>
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
