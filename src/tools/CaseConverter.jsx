import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import '../styles/ToolStyles.css'

export default function CaseConverter() {
  const { t } = useLanguage()
  const [text, setText] = useState('')

  const conversions = {
    uppercase: text.toUpperCase(),
    lowercase: text.toLowerCase(),
    titlecase: text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' '),
    sentencecase: text.split('. ').map(sent => sent.charAt(0).toUpperCase() + sent.slice(1).toLowerCase()).join('. '),
    camelcase: text.split(' ').map((word, i) => i === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(''),
    snakecase: text.toLowerCase().replace(/\s+/g, '_'),
    pascalcase: text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(''),
    toggle: text.split('').map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('')
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    alert(t('common.copiedToClipboard'))
  }

  const caseNames = {
    uppercase: t('forms.uppercase'),
    lowercase: t('forms.lowercase'),
    titlecase: t('forms.titleCase'),
    sentencecase: t('forms.sentenceCase'),
    camelcase: t('forms.camelCase'),
    snakecase: t('forms.snakeCase'),
    pascalcase: t('forms.pascalCase'),
    toggle: t('forms.toggleCase')
  }

  return (
    <div className="tool-container">
      <h2>{t('tools.caseConverter.title')}</h2>
      <p className="tool-description">{t('tools.caseConverter.description')}</p>

      <div className="tool-input-group">
        <label htmlFor="text">{t('forms.enterText')}</label>
        <textarea
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={t('forms.pasteText')}
          className="tool-textarea"
        />
      </div>

      <div className="tool-grid">
        {Object.entries(conversions).map(([key, value]) => (
          <div key={key} style={{ border: '1px solid var(--color-border)', borderRadius: '8px', padding: '15px' }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-accent)', marginBottom: '10px', fontWeight: '600' }}>
              {caseNames[key]}
            </div>
            <div style={{ fontSize: '0.9rem', marginBottom: '10px', wordBreak: 'break-word' }}>
              {value || '-'}
            </div>
            <button
              onClick={() => copyToClipboard(value)}
              className="btn-secondary"
              style={{ width: '100%', padding: '8px' }}
            >
              {t('common.copy')}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
