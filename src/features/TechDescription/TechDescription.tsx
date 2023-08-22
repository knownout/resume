import "./TechDescription.scss"

interface Props {
  name: string
  description: string
  children: any
}

export default function TechDescription(props: Props) {
  return (
    <div className="tech-description">
      <div className="tech-description__description">
        <span>{ props.name }</span>
        { " " }
        <span>— { props.description }</span>
      </div>
      <div className="tech-description__content">
        { props.children }
      </div>
    </div>
  )
}