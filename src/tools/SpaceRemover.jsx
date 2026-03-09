import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import '../styles/ToolStyles.css'

export default function SpaceRemover() {
  const { t } = useLanguage()
  const [text, setText] = useState('')

  const results = {
    'Remove extra spaces': text.replace(/\s+/g, ' ').trim(),
    'Remove all spaces': text.replace(/\s/g, ''),
    'Remove leading spaces': text.replace(/^\s+/, ''),
    'Remove trailing spaces': text.replace(/\s+$/, ''),
    'Remove line breaks': text.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim()
  }

  const resultLabels = {
    'Remove extra spaces': t('forms.removeExtraSpaces'),
    'Remove all spaces': t('forms.removeAllSpaces'),
    'Remove leading spaces': t('forms.removeLeadingSpaces'),
    'Remove trailing spaces': t('forms.removeTrailingSpaces'),
    'Remove line breaks': t('forms.removeLineBreaks')
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    alert(t('common.copiedToClipboard'))
  }

  return (
    <div className="tool-container">
      <h2>{t('tools.spaceRemover.title')}</h2>
      <p className="tool-description">{t('tools.spaceRemover.description')}</p>

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

      {Object.entries(results).map(([key, value]) => (
        <div key={key} style={{ marginBottom: '20px', padding: '15px', background: 'rgba(0, 212, 255, 0.05)', borderRadius: '8px' }}>
          <div style={{ marginBottom: '10px', fontWeight: '600', color: 'var(--color-accent)' }}>
            {resultLabels[key]}
          </div>
          <div style={{ marginBottom: '10px', padding: '10px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '4px', wordBreak: 'break-word' }}>
            {value}
          </div>
          <button
            onClick={() => copyToClipboard(value)}
            className="btn-secondary"
          >
            {t('common.copy')}
          </button>
        </div>
      ))}
    </div>
  )
}
