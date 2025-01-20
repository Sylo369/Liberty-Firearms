import React from "react";
import { Order } from "../../../app/models/order";
import OrderList from "./OrderList";

interface Props {
    orders: Order[];
}

export default function OrdersDashboard({orders}: Props)
{
    return (
      <>
        <OrderList orders={orders} />
      </>
    );
}