import { Button, Center, Container, Loader } from "@mantine/core";
import { useState } from "react";
import { Product, ProductComponent } from "./product";
import { getProductAsyncAwait } from "./service";

export const ProductExample = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState<Product>();

  async function handleGetProduct() {
    setIsLoading(true);

    const result = await getProductAsyncAwait();
    console.log(result);
    setProduct(result);

    setIsLoading(false);
  }

  return (
    <Container>
      {isLoading ? (
        <Center>
          <Loader />
        </Center>
      ) : (
        <Center style={{ flexDirection: "column" }}>
          <Button onClick={handleGetProduct} variant={"subtle"}>
            Get Product
          </Button>
          {product && (
            <ProductComponent
              title={product?.title}
              description={product?.description}
              price={product?.price}
              reviews={product?.reviews}
              thumbnail={product?.thumbnail}
            />
          )}
        </Center>
      )}
    </Container>
  );
};
