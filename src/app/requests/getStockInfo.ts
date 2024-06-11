import axios from "axios";

export default async function getStockInfo(symbol: string): Promise<any> {
  try {
    const response = await axios.get(
      `https://api.example.com/stocks/${symbol}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching stock information:", error);
    throw error;
  }
}
