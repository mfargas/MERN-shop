import { Input } from "semantic-ui-react";

function AddProductToCart() {
  return <Input 
    type="number"
    placeholder="1"
    action={{
      color: "orange",
      content: "Add to Cart",
      icon: "plus cart"
    }}
  />
}

export default AddProductToCart;
