import React from "react";
import { Order } from "../../../app/models/order";
import OrderList from "./OrderList";
import OrderEditForm from "../forms/OrderEditForm";

interface Props {
  orders: Order[];
  selectedOrder: Order;
  selectOrder: (id: string) => void;
  cancelSelectOrder: () => void;
}

export default function OrdersDashboard({
  orders,
  selectedOrder,
  selectOrder,
  cancelSelectOrder,
}: Props) {
  return (
    <>
      <OrderList orders={orders} />
    </>
  );
}
