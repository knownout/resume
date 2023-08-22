import { configure } from "mobx"
import { Suspense } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import "./index.scss"
import App from "@/app"
import i18next from "i18next"
import { en_US } from "@/app/locale"
import { initReactI18next } from "react-i18next"

configure({
  enforceActions: "never"
})

i18next
  .use(initReactI18next)
  .init({
    lng: "en",
    resources: {
      en: { translation: en_US }
    }
  })

function Main() {
  return (
    <Suspense>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  )
}

ReactDOM.createRoot(document.getElementById("root") as HTMLDivElement).render(<Main />)
