import Heading from "@/shared/Heading"
import { HeadingType } from "@/shared/Heading/Heading"
import "./Paragraph.scss"

interface Props {
  heading: string
  children: any
}

export default function Paragraph(props: Props) {
  return (
    <div className="paragraph">
      <Heading type={ HeadingType.Paragraph }>
        { props.heading }
      </Heading>

      <div className="paragraph-children">
        { props.children }
      </div>
    </div>
  )
}