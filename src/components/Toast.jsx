import { useItems } from "../Context";
import "./Toast.css";
function Toast() {
  const { toast, quantity } = useItems();
  return (
    <div className={`toast ${toast ? "slide-in" : ""}`}>
      <h1>Item has been added to the cart ✅</h1>
    </div>
  );
}

export default Toast;
