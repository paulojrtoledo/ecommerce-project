import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

export interface Product {
  id: number;
  name: string;
  category: string;
  description?: string;
  imageUrl?: string;
  price: number;
  stock: number;
}

export async function getProducts(): Promise<Product[]> {
  const response = await axios.get<Product[]>(`${API_BASE_URL}/products`);
  return response.data;
}
