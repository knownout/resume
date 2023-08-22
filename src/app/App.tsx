import "./App.scss"
import NameHeading from "@/widgets/NameHeading"
import Skills from "@/widgets/Skills"
import RecentProjects from "@/widgets/RecentProjects"
import SocialLinks from "@/widgets/SocialLinks"
import Paragraph from "@/shared/Paragraph"
import Text from "@/shared/Text"
import { useTranslation } from "react-i18next"
import List from "@/shared/List"

export default function App() {
  const { t } = useTranslation()

  return (
    <div className="app-wrapper">
      <div className="app-wrapper__header">
        <NameHeading />
        <SocialLinks />
      </div>

      <Paragraph heading={ t("aboutMeHeading") }>
        <Text>
          <div dangerouslySetInnerHTML={ { __html: t("aboutMe", process.env) } } />
        </Text>
      </Paragraph>

      <Skills />

      <Paragraph heading={ t("recentAchievementsHeading") }>
        <List items={ [
          t("recentAchievement1"),
          t("recentAchievement2"),
          t("recentAchievement3")
        ] } large enumerate />
      </Paragraph>

      <RecentProjects />
    </div>
  )
}