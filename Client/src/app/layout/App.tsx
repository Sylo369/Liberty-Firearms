import { useEffect, useState } from "react";
import { Order } from "../models/order";
import axios from "axios";
import Navbar from "./NavBar";
import "./Styles.scss"
import OrdersDashboard from "../../features/orders/dashboard/OrdersDashboard";



function App() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    axios.get<Order[]>("http://localhost:5000/api/orders").then((response) => {
      setOrders(response.data);
    });
  }, []);

  return (
    <>
      <Navbar/>
      <OrdersDashboard orders={orders} />
    </>
  );
}

export default App;
