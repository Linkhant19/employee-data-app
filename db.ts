// db.ts

import { MongoClient, Db, Collection, Document } from "mongodb";

const MONGO_URI = process.env.MONGO_URI as string;
if (!MONGO_URI) {
    throw new Error("MONGO_URI is not defined");
}

const DB_NAME = "employee-data";
export const DATA_COLLECTION = "data-collection";

let client: MongoClient | null = null;

export async function getMongoClient(): Promise<MongoClient> {
    if (!client) {
        client = new MongoClient(MONGO_URI);
        await client.connect();
    }
    return client;
}

export async function getDb(): Promise<Db> {
    const client = await getMongoClient();
    return client.db(DB_NAME);
}

export default async function getCollection<T extends Document = Document>(
    collectionName: string
): Promise<Collection<T>> {
    const db = await getDb();
    return db.collection<T>(collectionName);
}
