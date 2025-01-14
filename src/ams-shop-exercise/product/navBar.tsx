import { Container, NavLink, Stack } from "@mantine/core";
import { useState } from "react";
import { useCart } from "../../CartContext";
export const Navbar = () => {
  const [active, setActive] = useState<string>("home");
  const { cartCount } = useCart();

  const links = [
    { label: "Products", link: "/product" },
    { label: "Shopping Cart", link: "/cart" }
  ];

  return (
    <Container
      style={{
        position: "fixed",
        height: "100vh",
        width: "200px",
        padding: "20px 10px"
      }}
    >
      <Stack p={"sm"}>
        {links.map((item) => (
          <NavLink
            key={item.label}
            label={
              item.label === "Shopping Cart" && cartCount > 0 ? (
                <>
                  {item.label}{" "}
                  <span
                    style={{
                      color: "red",
                      fontWeight: "bold",
                      marginLeft: "5px"
                    }}
                  >
                    ({cartCount})
                  </span>
                </>
              ) : (
                item.label
              )
            }
            active={active === item.link}
            onClick={() => setActive(item.link)}
            component="a"
            href={item.link}
            variant={active === item.link ? "filled" : "light"}
            color="orange"
          />
        ))}
      </Stack>
    </Container>
  );
};
