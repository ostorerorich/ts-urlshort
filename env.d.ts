declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production'
      PORT: number
      DBUSER: string
      DBPASS: string
      DBHOST: string
      DBNAME: string
    }
  }
}

export {}
