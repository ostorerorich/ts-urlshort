import { z } from 'zod'

export const urlValidator = z
  .string({
    required_error: 'Url is required',
  })
  .url({
    message: 'Url must be a valid url',
  })
  .min(6, {
    message: 'Url must be at least 6 characters',
  })
  .startsWith('https://', {
    message: 'Url must start with https://',
  })
