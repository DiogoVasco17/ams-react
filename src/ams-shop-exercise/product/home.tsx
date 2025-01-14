import { Center, Container, Loader, SimpleGrid } from "@mantine/core";
import { useState, useEffect } from "react";
import { Product, ProductComponent } from "./product";
import { getProductsAsyncAwait } from "./service";
import { Navbar } from "./navBar";
import { useCart } from "../../CartContext";

export const ProductExample = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    async function fetchProducts() {
      setIsLoading(true);
      try {
        const result = await getProductsAsyncAwait();
        //console.log("Produtos carregados:", result);
        setProducts(result);
      } catch (error) {
        console.error("Error to find the products:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Navbar />
      <Container>
        {isLoading ? (
          <Center>
            <Loader />
          </Center>
        ) : (
          <Center style={{ flexDirection: "column" }}>
            {products.length > 0 ? (
              <SimpleGrid cols={3} spacing="lg">
                {products.map((product, index) => (
                  <ProductComponent
                    id={product.id}
                    key={index}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    reviews={product.reviews}
                    thumbnail={product.thumbnail}
                    onAddToCart={() => addToCart(product)}
                  />
                ))}
              </SimpleGrid>
            ) : (
              <p>No Item Found.</p>
            )}
          </Center>
        )}
      </Container>
    </div>
  );
};
