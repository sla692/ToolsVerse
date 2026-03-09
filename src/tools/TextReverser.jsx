import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import '../styles/ToolStyles.css'

export default function TextReverser() {
  const { t } = useLanguage()
  const [text, setText] = useState('')

  const reversals = {
    'Reverse Text': text.split('').reverse().join(''),
    'Reverse Words': text.split(' ').reverse().join(' '),
    'Reverse Lines': text.split('\n').reverse().join('\n'),
    'Reverse Sentences': text.split(/[.!?]+/).map(s => s.trim()).reverse().join('. ')
  }

  const reversalLabels = {
    'Reverse Text': t('forms.reverseText'),
    'Reverse Words': t('forms.reverseWords'),
    'Reverse Lines': t('forms.reverseLines'),
    'Reverse Sentences': t('forms.reverseSentences')
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    alert(t('common.copiedToClipboard'))
  }

  return (
    <div className="tool-container">
      <h2>{t('tools.textReverser.title')}</h2>
      <p className="tool-description">{t('tools.textReverser.description')}</p>

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

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        {Object.entries(reversals).map(([key, value]) => (
          <div key={key} style={{ padding: '15px', background: 'rgba(0, 212, 255, 0.1)', border: '1px solid var(--color-border)', borderRadius: '8px' }}>
            <div style={{ marginBottom: '10px', fontWeight: '600', color: 'var(--color-accent)' }}>
              {reversalLabels[key]}
            </div>
            <div style={{ marginBottom: '10px', padding: '10px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '4px', wordBreak: 'break-word', minHeight: '100px' }}>
              {value || '-'}
            </div>
            <button
              onClick={() => copyToClipboard(value)}
              className="btn-secondary"
              style={{ width: '100%' }}
            >
              {t('common.copy')}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
