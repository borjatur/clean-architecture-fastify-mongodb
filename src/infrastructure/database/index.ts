import { connect, type Mongoose } from 'mongoose'

export const init = async (url: string): Promise<Mongoose> => {
  return await connect(url)
}
