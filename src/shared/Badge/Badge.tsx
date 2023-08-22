import { classNames } from "@knownout/lib"
import "./Badge.scss"

export enum BadgeType {
  Default = "default",
  Gray = "gray",
  Blue = "blue"
}

interface Props {
  type?: BadgeType

  children: any
}

export default function Badge(props: Props) {
  return (
    <div className={ classNames("badge", props.type) }>
      { props.children }
    </div>
  )
}