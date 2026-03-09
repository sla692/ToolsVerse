import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import '../styles/ToolStyles.css'

export default function PasswordGenerator() {
  const { t } = useLanguage()
  const [length, setLength] = useState(16)
  const [password, setPassword] = useState('')
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true
  })

  const generatePassword = () => {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowercase = 'abcdefghijklmnopqrstuvwxyz'
    const numbers = '0123456789'
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?'

    let chars = ''
    if (options.uppercase) chars += uppercase
    if (options.lowercase) chars += lowercase
    if (options.numbers) chars += numbers
    if (options.symbols) chars += symbols

    if (chars === '') {
      alert(t('forms.selectAtLeastOne'))
      return
    }

    let pwd = ''
    for (let i = 0; i < length; i++) {
      pwd += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    setPassword(pwd)
  }

  const toggleOption = (opt) => {
    setOptions({
      ...options,
      [opt]: !options[opt]
    })
  }

  const copyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password)
      alert(t('common.copiedToClipboard'))
    }
  }

  const optionLabels = {
    uppercase: t('forms.uppercase'),
    lowercase: t('forms.lowercase'),
    numbers: t('forms.numbers'),
    symbols: t('forms.symbols')
  }

  return (
    <div className="tool-container">
      <h2>{t('tools.passwordGenerator.title')}</h2>
      <p className="tool-description">{t('tools.passwordGenerator.description')}</p>

      <div className="tool-input-group">
        <label htmlFor="length">{t('forms.passwordLength')}: <span style={{ color: 'var(--color-accent)' }}>{length}</span></label>
        <input
          id="length"
          type="range"
          min="4"
          max="128"
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value))}
        />
      </div>

      <div className="tool-input-group" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
        {Object.entries(options).map(([key, value]) => (
          <label key={key} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={value}
              onChange={() => toggleOption(key)}
            />
            <span>{optionLabels[key]}</span>
          </label>
        ))}
      </div>

      <button onClick={generatePassword} className="btn-primary">{t('common.generate')}</button>

      {password && (
        <div className="tool-result">
          <div style={{ width: '100%', padding: '20px', background: 'rgba(0, 212, 255, 0.1)', borderRadius: '8px' }}>
            <div style={{ marginBottom: '15px', fontSize: '1.1rem', wordBreak: 'break-all', color: 'var(--color-accent)', fontWeight: '600' }}>
              {password}
            </div>
            <button onClick={copyToClipboard} className="btn-primary">{t('common.copyPassword')}</button>
          </div>
        </div>
      )}
    </div>
  )
}
