// lib/mongodbAdapter.ts

import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { getMongoClient } from "@/db";
import { Adapter } from "next-auth/adapters";

export const adapter = async (): Promise<Adapter> => {
    const db = await getMongoClient();
    return MongoDBAdapter(db);
};