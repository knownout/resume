import Heading from "@/shared/Heading"
import { HeadingType } from "@/shared/Heading/Heading"
import "./NameHeading.scss"

export default function NameHeading() {
  return (
    <div className="name-heading">
      <div className="name-heading__avatar">
        <img src={ `${ process.env.CDN_URL }avatar.svg` } alt="Alexandr's avatar" />
      </div>
      <div className="name-heading__text">
        <Heading type={ HeadingType.Large }>
          Alexandr Slavinskii
        </Heading>
        <Heading type={ HeadingType.Paragraph }>
          Sr. Fullstack Developer
        </Heading>
      </div>
    </div>
  )
}