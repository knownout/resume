import "./Text.scss"

export enum TextType {
  Default = "1",
  Gray50 = "0.5",
  Gray75 = "0.75"
}

interface Props {
  type?: TextType

  children: any
}

export default function Text(props: Props) {
  return (
    <div className="typography-text" style={ { opacity: props.type } }>
      { props.children }
    </div>
  )
}