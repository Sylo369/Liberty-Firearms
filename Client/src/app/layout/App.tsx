import { useEffect, useState } from "react";
import { Order } from "../models/order";
import axios from "axios";
import Navbar from "./NavBar";
import "./Styles.scss";
import OrdersDashboard from "../../features/orders/dashboard/OrdersDashboard";
import AdminPage from "../../features/pages/adminpage";

function App() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<Order | undefined>(
    undefined
  );

  useEffect(() => {
    axios.get<Order[]>("http://localhost:5000/api/orders").then((response) => {
      setOrders(response.data);
    });
  }, []);

  function handleSelectOrder(id: string) {
    setSelectedOrder(orders.find((x) => x.id === id));
  }

  function handleCancelSelectOrder() {
    setSelectedOrder(undefined);
  }

  return (
    <>
      <Navbar />
      <AdminPage />
    </>
  );
}

export default App;
