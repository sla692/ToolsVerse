import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import '../styles/ToolStyles.css'

export default function ColorGenerator() {
  const { t } = useLanguage()
  const [colors, setColors] = useState([])
  const [count, setCount] = useState(5)

  const generateRandomColor = () => {
    const hex = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')
    return { hex: `#${hex}`, rgb: hexToRgb(`#${hex}`) }
  }

  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : null
  }

  const generateColors = () => {
    const generated = []
    for (let i = 0; i < count; i++) {
      generated.push(generateRandomColor())
    }
    setColors(generated)
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    alert(t('common.copiedToClipboard'))
  }

  return (
    <div className="tool-container">
      <h2>{t('tools.colorGenerator.title')}</h2>
      <p className="tool-description">{t('tools.colorGenerator.description')}</p>

      <div className="tool-input-group">
        <label htmlFor="count">{t('forms.numberOfColors')}</label>
        <input
          id="count"
          type="number"
          min="1"
          max="20"
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value))}
        />
      </div>

      <button onClick={generateColors} className="btn-primary">{t('common.generate')}</button>

      {colors.length > 0 && (
        <div className="tool-grid" style={{ marginTop: '30px' }}>
          {colors.map((color, idx) => (
            <div
              key={idx}
              style={{
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid var(--color-border)',
                cursor: 'pointer'
              }}
            >
              <div
                style={{
                  backgroundColor: color.hex,
                  height: '120px',
                  width: '100%',
                  transition: 'transform 0.2s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
              <div style={{ padding: '15px' }}>
                <div style={{ marginBottom: '8px', fontSize: '0.9rem', color: 'var(--color-accent)', fontWeight: '600' }}>
                  {color.hex}
                </div>
                <div style={{ marginBottom: '10px', fontSize: '0.85rem', color: 'var(--color-text-dark)' }}>
                  {color.rgb}
                </div>
                <div style={{ display: 'flex', gap: '5px' }}>
                  <button
                    onClick={() => copyToClipboard(color.hex)}
                    className="btn-secondary"
                    style={{ flex: 1, padding: '6px' }}
                  >
                    HEX
                  </button>
                  <button
                    onClick={() => copyToClipboard(color.rgb)}
                    className="btn-secondary"
                    style={{ flex: 1, padding: '6px' }}
                  >
                    RGB
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
