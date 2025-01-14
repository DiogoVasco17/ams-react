import { Outlet, useNavigate } from "react-router";

export function Frame() {
  const navigate = useNavigate();

  const navigateToComponent = () => {
    navigate("/component");
  };

  const navigateToProduct = () => {
    navigate("/product");
  };

  return (
    <div>
      <button onClick={navigateToComponent}>Component</button>
      <button onClick={navigateToProduct}>Product</button>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
