import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import '../styles/ToolStyles.css'

export default function JPGtoPNG() {
  const { t } = useLanguage()
  const [preview, setPreview] = useState(null)
  const [fileName, setFileName] = useState('')

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
        setFileName(file.name.replace('.jpg', '.png').replace('.jpeg', '.png'))
      }
      reader.readAsDataURL(file)
    }
  }

  const downloadPNG = () => {
    if (!preview) return

    const img = new Image()
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height
      const ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0)

      canvas.toBlob((blob) => {
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = fileName
        a.click()
        window.URL.revokeObjectURL(url)
      }, 'image/png')
    }
    img.src = preview
  }

  return (
    <div className="tool-container">
      <h2>{t('tools.jpgToPng.title')}</h2>
      <p className="tool-description">{t('tools.jpgToPng.description')}</p>

      <div className="tool-input-group">
        <label htmlFor="file">{t('forms.selectJpgImage')}:</label>
        <input
          id="file"
          type="file"
          accept="image/jpeg,image/jpg"
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
          <button onClick={downloadPNG} className="btn-primary">{t('common.downloadAsPNG')}</button>
        </div>
      )}

      <div style={{ marginTop: '40px', padding: '20px', background: 'rgba(0, 212, 255, 0.1)', borderRadius: '8px' }}>
        <p><strong>{t('common.aboutJpgToPng')}:</strong></p>
        <ul style={{ marginLeft: '20px', marginTop: '10px', fontSize: '0.95rem' }}>
          <li><strong>PNG</strong> - {t('common.pngAdvantage')}</li>
          <li><strong>JPG</strong> - {t('common.jpgAdvantage')}</li>
          <li>{t('common.convertsLocally')}</li>
          <li>{t('common.noServerUpload')}</li>
        </ul>
      </div>
    </div>
  )
}
