/* eslint-disable import/first */
require('module-alias/register')
import { createServer } from '@infrastructure/http/server'
import { init } from '@infrastructure/database/index'
/* eslint-enable import/first */

const main = async (): Promise<void> => {
  const server = await createServer()
  const { API_PORT: port, API_HOST: host, MONGO_URL: mongoUrl } = server.config
  await init(mongoUrl)
  await server.listen({ host, port })
  process.on('unhandledRejection', (err) => {
    console.error(err)
    process.exit(1)
  })

  for (const signal of ['SIGINT', 'SIGTERM']) {
    process.on(signal, () => {
      console.log(`closing application on ${signal}`)
      server.close()
        .then(() => process.exit(0))
        .catch(() => process.exit(1))
    }
    )
  }
}

void main()
