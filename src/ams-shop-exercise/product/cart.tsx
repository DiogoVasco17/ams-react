import { Container, Button, Text, Image, Center, Group } from "@mantine/core";
import { Navbar } from "./navBar";
import { useCart } from "../../CartContext";
import { useState, useEffect } from "react";

export function Cart() {
  const { cartItems, removeFromCart, cartCount } = useCart();
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const newTotal = cartItems.reduce(
      (acc, product) => acc + (product.price || 0),
      0
    );
    setTotalPrice(newTotal);
  }, [cartItems]);

  return (
    <div style={{ display: "flex" }}>
      <Navbar />
      <Container>
        <h1>Cart</h1>
        <p>Total Itens: {cartCount}</p>
        <p>Total Price: $ {totalPrice.toFixed(2)}</p>
        <h2>Items</h2>
        {cartItems.length > 0 ? (
          cartItems.map((product, index) => (
            <div key={index}>
              <Text>{product.title}</Text>
              <Center>
                <Image src={product.thumbnail} h={300} w={300} />
              </Center>
              <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>{product.title}</Text>
                <Text fw={500}>$ {product.price}</Text>
              </Group>

              <Center>
                {product.id && (
                  <Button onClick={() => removeFromCart(product.id)}>
                    Remove
                  </Button>
                )}
              </Center>
            </div>
          ))
        ) : (
          <p>The Cart is Empty.</p>
        )}
      </Container>
    </div>
  );
}
