export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production"
      GITHUB_URL: string
      TELEGRAM_URL: string
      GMAIL_ADDRESS: string
      OUTLOOK_ADDRESS: string
      TWITTER_URL: string
      GENERAL_EXP: string
      CRYPTO_EXP: SVGStopElement
      CDN_URL: string
    }
  }

}