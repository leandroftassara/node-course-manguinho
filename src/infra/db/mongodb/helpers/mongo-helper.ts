import { Collection, InsertOneResult, MongoClient } from 'mongodb'

export const MongoHelper = {
  client: null as MongoClient,

  async connect (uri: string): Promise<void> {
    this.client = await MongoClient.connect(uri, {})
  },

  async disconnect (): Promise<void> {
    await this.client.close()
  },

  getCollection (name: string): Collection {
    return this.client.db().collection(name)
  },

  insertMap (result: InsertOneResult<Document>, insertedData: any): any {
    return { id: result.insertedId.toString(), ...insertedData }
  }
}
