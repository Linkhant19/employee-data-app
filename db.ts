// db.ts

import { MongoClient, Db, Collection, Document } from "mongodb";

const MONGO_URI = process.env.MONGO_URI as string;
if (!MONGO_URI) {
    throw new Error("MONGO_URI is not defined");
}

const DB_NAME = "employee-data";
export const DATA_COLLECTION = "data-collection";

let client: MongoClient | null = null;
let db: Db | null = null;

async function connect(): Promise<Db> {
    if (!client) {
        client = new MongoClient(MONGO_URI);
        await client.connect();
    }
    return client.db(DB_NAME);
}

export default async function getCollection<T extends Document = Document>(
    collectionName: string
    ): Promise<Collection<T>> {
    if (!db) {
        db = await connect();
    }
    return db.collection<T>(collectionName);
}