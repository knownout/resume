import "./SocialLinks.scss"

function SocialLink(props: { icon: string, href: string }) {
  return (
    <a href={ props.href } target="_blank" rel="noreferrer" className="social-link">
      <img src={ `${ process.env.CDN_URL }${ props.icon }.svg` } alt="" />
    </a>
  )
}

export default function SocialLinks() {
  return (
    <div className="social-links">
      <SocialLink icon="github" href={ process.env.GITHUB_URL } />

      <SocialLink icon="telegram" href={ process.env.TELEGRAM_URL } />

      <SocialLink icon="gmail" href={ process.env.GITHUB_URL } />

      <SocialLink icon="outlook" href={ process.env.OUTLOOK_ADDRESS } />
    </div>
  )
}