import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import '../styles/ToolStyles.css'

export default function PNGtoJPG() {
  const { t } = useLanguage()
  const [preview, setPreview] = useState(null)
  const [fileName, setFileName] = useState('')
  const [quality, setQuality] = useState(80)

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert(t('forms.selectImageFile'))
        return
      }

      const reader = new FileReader()
      reader.onload = (event) => {
        setPreview(event.target.result)
        setFileName(file.name.replace('.png', '.jpg').replace('.PNG', '.jpg'))
      }
      reader.readAsDataURL(file)
    }
  }

  const downloadJPG = () => {
    if (!preview) return

    const img = new Image()
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height
      const ctx = canvas.getContext('2d')
      
      // Fill white background for PNG transparency
      ctx.fillStyle = '#FFFFFF'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(img, 0, 0)

      canvas.toBlob((blob) => {
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = fileName
        a.click()
        window.URL.revokeObjectURL(url)
      }, 'image/jpeg', quality / 100)
    }
    img.src = preview
  }

  return (
    <div className="tool-container">
      <h2>{t('tools.pngToJpg.title')}</h2>
      <p className="tool-description">{t('tools.pngToJpg.description')}</p>

      <div className="tool-input-group">
        <label htmlFor="file">{t('forms.selectPngImage')}:</label>
        <input
          id="file"
          type="file"
          accept="image/png"
          onChange={handleFileUpload}
        />
      </div>

      {preview && (
        <div style={{ marginTop: '30px' }}>
          <div style={{ marginBottom: '20px' }}>
            <img
              src={preview}
              alt="Preview"
              style={{
                maxWidth: '100%',
                maxHeight: '400px',
                borderRadius: '8px',
                border: '1px solid var(--color-border)'
              }}
            />
          </div>
          <div className="tool-input-row">
            <div className="tool-input-group">
              <label htmlFor="fileName">{t('forms.outputFilename')}:</label>
              <input
                id="fileName"
                type="text"
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
                placeholder={t('forms.enterFilename')}
              />
            </div>
            <div className="tool-input-group">
              <label htmlFor="quality">{t('forms.quality')}: <span style={{ color: 'var(--color-accent)' }}>{quality}%</span></label>
              <input
                id="quality"
                type="range"
                min="10"
                max="100"
                value={quality}
                onChange={(e) => setQuality(parseInt(e.target.value))}
              />
            </div>
          </div>
          <button onClick={downloadJPG} className="btn-primary">{t('common.downloadAsJPG')}</button>
        </div>
      )}

      <div style={{ marginTop: '40px', padding: '20px', background: 'rgba(0, 212, 255, 0.1)', borderRadius: '8px' }}>
        <p><strong>{t('common.aboutPngToJpg')}:</strong></p>
        <ul style={{ marginLeft: '20px', marginTop: '10px', fontSize: '0.95rem' }}>
          <li><strong>PNG</strong> - {t('common.pngSupportsTransparency')}</li>
          <li><strong>JPG</strong> - {t('common.jpgNoTransparency')}</li>
          <li>{t('common.qualityHigherBetter')}</li>
          <li>{t('common.convertsLocally')}</li>
          <li>{t('common.noServerUpload')}</li>
        </ul>
      </div>
    </div>
  )
}
