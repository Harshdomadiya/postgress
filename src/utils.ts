import { Client } from 'pg';

export async function getClient() {
    const client = new Client("DATABASE-URL");
    await client.connect();
    console.log("database connection established");
    return client;
}
