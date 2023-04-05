import * as dotenv from 'dotenv'

dotenv.config()

export const { PORT, DBUSER, DBHOST, DBPASS, DBNAME } = process.env
