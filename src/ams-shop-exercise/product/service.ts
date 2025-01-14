import { Product } from "./product";

interface ProductAPIResponse {
  id: number;
  title: string;
  description: string;
  price: number;
  reviews?: { comment: string; reviewerName: string; reviewerEmail: string }[];
  thumbnail: string;
}

export async function getProductsAsyncAwait(): Promise<Product[]> {
  const rawResult = await fetch("https://dummyjson.com/products");

  if (!rawResult.ok) {
    throw new Error("Error to find the products in API");
  }

  const JSON = await rawResult.json();

  return JSON.products.map((item: ProductAPIResponse) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    price: item.price,
    reviews: item.reviews || [],
    thumbnail: item.thumbnail
  }));
}
