import Paragraph from "@/shared/Paragraph"
import { useTranslation } from "react-i18next"
import Text from "@/shared/Text"

export default function ParagraphAbout() {
  const { t } = useTranslation()

  return (
    <Paragraph heading={ t("aboutMeHeading") }>
      <Text>
        <div dangerouslySetInnerHTML={ { __html: t("aboutMe", process.env) } } />
      </Text>
    </Paragraph>
  )
}