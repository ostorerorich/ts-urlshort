import { Request, Response } from 'express'
import { UrlEntity } from '../entities/url.entity'
import { urlValidator } from '../validators/url.validator'
import AppData from '../config/data-source'
import { nanoid } from 'nanoid'

export class UrlController {
  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const { url } = req.body
      const isValid = urlValidator.safeParse(url)
      const urlRepository = AppData.getRepository(UrlEntity)

      if (!url) {
        return res.status(400).json({ error: 'Url is required' })
      }

      if (!isValid.success) {
        return res.status(400).json({ error: isValid.error })
      }

      const urlEntity = urlRepository.create({ url, shortUrl: nanoid(8) })
      const savedUrlEntity = await urlRepository.save(urlEntity)
      return res.status(201).json({ data: savedUrlEntity })
    } catch (error) {
      return res.status(400).json({ error: error })
    }
  }

  public async visit(req: Request, res: Response): Promise<Response | void> {
    try {
      const { shortUrl } = req.params
      const urlRepository = AppData.getRepository(UrlEntity)

      const urlEntity = await urlRepository.findOne({
        where: { shortUrl },
      })

      if (!urlEntity) {
        return res.status(404).json({ error: 'Url not found' })
      }

      urlEntity.clicks += 1
      await urlRepository.save(urlEntity)

      return res.redirect(urlEntity.url)
    } catch (error) {
      return res.status(400).json({ error: error })
    }
  }

  public async analytics(req: Request, res: Response): Promise<Response> {
    try {
      const { shortUrl } = req.params
      const urlRepository = AppData.getRepository(UrlEntity)

      const urlEntity = await urlRepository.findOne({
        where: { shortUrl },
      })

      if (!urlEntity) {
        return res.status(404).json({ error: 'Url not found' })
      }

      return res.status(200).json({ data: urlEntity })
    } catch (error) {
      return res.status(400).json({ error: error })
    }
  }
}
