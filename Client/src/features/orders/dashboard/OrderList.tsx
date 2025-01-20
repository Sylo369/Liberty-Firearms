import React from "react";
import { Order } from "../../../app/models/order";
import { Table } from "@chakra-ui/react/table";

interface Props {
  orders: Order[];
}

export default function OrderList({ orders }: Props) {
  return (
    <>
      <Table.Root size="sm" showColumnBorder>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Order Id</Table.ColumnHeader>
            <Table.ColumnHeader>Address</Table.ColumnHeader>
            <Table.ColumnHeader>Date of creation</Table.ColumnHeader>
            <Table.ColumnHeader>Notes</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {orders.map((Order) => (
            <Table.Row key={Order.id}>
              <Table.Cell>{Order.id}</Table.Cell>
              <Table.Cell>{Order.address}</Table.Cell>
              <Table.Cell>{Order.dateOfCreation}</Table.Cell>
              <Table.Cell>{Order.notes}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </>
  );
}
