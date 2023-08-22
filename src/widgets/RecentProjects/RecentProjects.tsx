import Paragraph from "@/shared/Paragraph"
import { useTranslation } from "react-i18next"
import ProjectBanner from "@/features/ProjectBanner"
import { BannerImage } from "@/shared/Banner/Banner"
import "./RecentProjects.scss"

export default function RecentProjects() {
  const { t } = useTranslation()

  return (
    <Paragraph heading={ t("projectsHeading") }>
      <div className="recent-projects">
        <ProjectBanner image={ BannerImage.Ibis } tags={ [
          "Front-end",
          "Back-end",
          "!Team lead",
          "Dev-ops",
          "!Tech lead"
        ] } />

        <ProjectBanner image={ BannerImage.Horiza } tags={ [
          "Front-end",
          "Back-end",
          "!Team lead",
          "Dev-ops"
        ] } />

        <ProjectBanner image={ BannerImage.Ditto } tags={ [
          "Front-end",
          "Back-end",
          "!Team lead",
          "Dev-ops",
          "Smart contracts"
        ] } />

        <ProjectBanner image={ BannerImage.Hawex } tags={ [
          "Front-end",
          "!Team lead"
        ] } />

        <ProjectBanner image={ BannerImage.Venom } tags={ [
          "Front-end",
          "!Tech lead",
          "Dev-ops"
        ] } />

        <ProjectBanner image={ BannerImage.Default } tags={ [
          "%" + t("newJourney")
        ] } />
      </div>
    </Paragraph>
  )
}