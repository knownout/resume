import Banner, { BannerImage } from "@/shared/Banner/Banner"
import Badge from "@/shared/Badge"
import { BadgeType } from "@/shared/Badge/Badge"
import "./ProjectBanner.scss"

interface Props {
  image: BannerImage
  tags: string[]
}

export default function ProjectBanner(props: Props) {
  return (
    <div className="project-banner">
      <Banner image={ props.image } />
      <div className="project-banner__tags">
        { props.tags.map((tag, index) => {
          const typeMap = {
            "!": BadgeType.Blue,
            "%": BadgeType.Gray
          }[tag[0]]

          return (
            <Badge key={ index } type={ typeMap }>
              { typeMap === undefined ? tag : tag.slice(1) }
            </Badge>
          )
        }) }
      </div>
    </div>
  )
}