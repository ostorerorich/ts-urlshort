import { DataSource } from 'typeorm'
import { DBHOST, DBNAME, DBPASS, DBUSER } from './config'
import { UrlEntity } from '../entities/url.entity'

const AppData = new DataSource({
  type: 'postgres',
  host: DBHOST,
  port: 5432,
  username: DBUSER,
  password: DBPASS,
  database: DBNAME,
  entities: [UrlEntity],
  synchronize: true,
  logging: false,
})

export default AppData
