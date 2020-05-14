import got from 'got'
import { logger } from '../../../../utils/logger'

export function respondToCommand(responseUrl: string, payload: any): Promise<void> {
  return got
    .post(responseUrl, { json: payload })
    .then(() => {})
    .catch(error => {
      logger.error('slack.respondToCommand', { error: error.message, payload })
    })
}
