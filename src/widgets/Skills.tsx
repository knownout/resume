import Paragraph from "@/shared/Paragraph"
import TechDescription from "@/features/TechDescription"
import List from "@/shared/List"
import { useTranslation } from "react-i18next"
import Text from "@/shared/Text"
import { TextType } from "@/shared/Text/Text"

export default function Skills() {
  const { t } = useTranslation()

  return (
    <Paragraph heading={ t("skillsHeading") }>
      <TechDescription name="React" description={ t("react") }>
        <List
          items={ [
            "Typescript",
            "MobX, Recoil, Zustand",
            "Webpack 5, Gulp, Vite"
          ] }
        />
      </TechDescription>

      <TechDescription name="Node.js" description={ t("nodejs") }>
        <List
          items={ [
            "My own powerful router",
            "Typescript",
            "GitHub actions, GitLab CI/CD"
          ] }
        />
      </TechDescription>

      <TechDescription name="Web3.js" description={ t("web3js") }>
        <List
          items={ [
            "Solidity and basic workaround configuration for smart contracts development"
          ] }
        />
      </TechDescription>

      <TechDescription name="FastAPI" description={ t("fastApi") }>
        <List
          items={ [
            "HTTP/S, Rest API",
            "Python"
          ] }
        />
      </TechDescription>

      <Text type={ TextType.Gray75 }>
        <div dangerouslySetInnerHTML={ { __html: t("more", process.env) } } />
      </Text>
    </Paragraph>
  )
}