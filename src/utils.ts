import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgres://ahzlvkzv:BnC61OGncbLoWw8s5REg8-U1Pu3W494w@flora.db.elephantsql.com/ahzlvkzv");
    await client.connect();
    console.log("database connection established");
    return client;
}