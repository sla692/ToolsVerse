import { Link } from 'react-router-dom'
import './ToolCard.css'

export default function ToolCard({ id, icon, title, description, category }) {
  return (
    <Link to={`/tool/${id}`} className="tool-card">
      <div className="tool-card-icon">{icon}</div>
      <h3 className="tool-card-title">{title}</h3>
      <p className="tool-card-description">{description}</p>
      <div className="tool-card-category">
        <span className={`category-badge category-${category.toLowerCase()}`}>
          {category}
        </span>
      </div>
      <div className="tool-card-arrow">→</div>
    </Link>
  )
}
