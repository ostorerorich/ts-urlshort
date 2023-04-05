import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class UrlEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  url: string

  @Column({ unique: true })
  shortUrl: string

  @Column()
  clicks: number

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date
}
