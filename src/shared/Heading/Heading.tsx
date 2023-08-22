import { classNames } from "@knownout/lib"
import "./Heading.scss"

export enum HeadingType {
  Large = "large",
  Paragraph = "paragraph"
}

interface Props {
  type: HeadingType
  children: any
}

export default function Heading(props: Props) {
  if (props.type === HeadingType.Large) {
    return (
      <h1 className={ classNames("typography-heading", props.type) }>
        { props.children }
      </h1>
    )
  }

  return (
    <h2 className={ classNames("typography-heading", props.type) }>
      { props.children }
    </h2>
  )
}