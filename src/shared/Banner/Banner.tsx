import "./Banner.scss"

export enum BannerImage {
  Ibis = "ibis",
  Horiza = "horiza",
  Ditto = "ditto",
  Hawex = "hawex",
  Venom = "venom",
  Default = "empty"
}

interface Props {
  image: BannerImage
}

export default function Banner(props: Props) {
  return (
    <div className="banner">
      <img src={ `${ process.env.CDN_URL }${ props.image }-banner.svg` } alt="" />
    </div>
  )
}