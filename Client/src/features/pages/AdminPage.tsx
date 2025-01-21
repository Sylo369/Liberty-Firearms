import { Tabs } from "@chakra-ui/react/tabs";
import React from "react";
import OrdersDashboard from "../orders/dashboard/OrdersDashboard";
import { Order } from "../../app/models/order";
import ProductsPage from "./ProductsPage";
import StatsPage from "./StatsPage";

export default function AdminPage() {
  return (
    <>
      <h1>Admin Panel</h1>
      <Tabs.Root variant={"line"} defaultValue={"orders"}>
        <Tabs.List>
          <Tabs.Trigger value={"orders"}>Orders</Tabs.Trigger>
          <Tabs.Trigger value={"products"}>Products</Tabs.Trigger>
          <Tabs.Trigger value={"stats"}>Statistics</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value={"orders"}></Tabs.Content>
        <Tabs.Content value={"products"}>
          <ProductsPage />
        </Tabs.Content>
        <Tabs.Content value={"stats"}>
          <StatsPage />
        </Tabs.Content>
      </Tabs.Root>
    </>
  );
}
