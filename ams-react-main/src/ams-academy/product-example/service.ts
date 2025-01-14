import { Product } from "./product";
import { delay } from "../helpers-and-hooks";

export async function getProductAsyncAwait(): Promise<Product> {
  const rawResult = await fetch("https://dummyjson.com/products/1");

  // Promise based
  //  return fetch('https://dummyjson.com/products')
  //       .then(res => res.json())
  //       .then(console.log);

  await delay(750);

  const JSON = await rawResult.json();

  return {
    title: JSON.title,
    description: JSON.description,
    price: JSON.price,
    reviews: JSON.reviews,
    thumbnail: JSON.thumbnail
  };
}
