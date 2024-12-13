import { useMemo, useState } from "react";
import type { MenuItem, OrderItem } from "../types";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);





  function addItem(item: MenuItem) {
    const existItem = order.find((order) => order.id === item.id);

    if (existItem) {
      const updatedOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );

      setOrder(updatedOrder);
    } else {
      const newItem: OrderItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  }

  function removeItem(id: OrderItem['id']) {
    const removeOrder = order.filter(orderItem => orderItem.id !== id)
    setOrder(removeOrder)
  }

  function saveOrder() {
    setOrder([])
    setTip(0)
    
  }

  return {
    order,
    addItem,
    removeItem, 
    setTip, 
    tip, 
    saveOrder
  };
}
