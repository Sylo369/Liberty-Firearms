import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";

function App() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/orders").then((response) => {
      setOrders(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Liberty-Firearms</h1>
      <ul>
        {orders.map((order: any) => (
          <li key={order.id}>{order.address}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
