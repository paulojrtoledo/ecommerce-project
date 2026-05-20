import apiClient from './apiClient';

export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  price: number;
  stock: number;
}

export interface ProductCreatePayload {
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  price: number;
  stock: number;
}

export interface ProductUpdatePayload extends ProductCreatePayload {}

export interface Category {
  id: number;
  name: string;
}

export async function getProducts(): Promise<Product[]> {
  const response = await apiClient.get<Product[]>('/products');
  return response.data;
}

export async function getProduct(id: number): Promise<Product> {
  const response = await apiClient.get<Product>(`/products/${id}`);
  return response.data;
}

export async function createProduct(payload: ProductCreatePayload): Promise<Product> {
  const response = await apiClient.post<Product>('/products', payload);
  return response.data;
}

export async function updateProduct(id: number, payload: ProductUpdatePayload): Promise<Product> {
  const response = await apiClient.put<Product>(`/products/${id}`, payload);
  return response.data;
}

export async function deleteProduct(id: number): Promise<void> {
  await apiClient.delete(`/products/${id}`);
}

export async function getCategories(): Promise<Category[]> {
  const response = await apiClient.get<Category[]>('/categories');
  return response.data;
}

export async function createCategory(name: string): Promise<Category> {
  const response = await apiClient.post<Category>('/categories', { name });
  return response.data;
}
