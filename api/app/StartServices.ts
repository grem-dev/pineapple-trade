import { initMongoConnection } from "../core/services/mongodb";
import { GetMQInstance } from "../core/services/MQ";


export async function StartServices() {
  await LoadMogoService();
	try {
	 await GetMQInstance();
	} catch (err) {}
}


async function LoadMogoService() {
  try {
    console.log('[DB] Starting database conection');
    await initMongoConnection(process.env.MONGO_URL);
    console.log('[DB] MongoDB connection started');
  } catch (err) {
    console.log('[DB] Could not connect to database');
    console.error(`[DB] ${err.message}`)
  }
}
