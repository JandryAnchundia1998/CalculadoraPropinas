import { useMemo } from "react";
import { formatCurrency } from "../helpers";
import { OrderItem } from "../types";

type OrderTotalsProps = {
  order: OrderItem[];
  tip: number;
  saveOrder: () => void
};

export default function OrderTotals({ order, tip, saveOrder}: OrderTotalsProps) {
  const subtotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );

  const tipAmount = useMemo(() => subtotalAmount * tip, [order, tip]);

  const totalAmount = useMemo(() => tipAmount + subtotalAmount, [order, tip]);

  return (
    <>
      <div className="flex flex-col space-y-3 ">
        <h2 className="font-black text-2xl ">Totales y Propina</h2>
        <p>
          Subtotal a pagar:{" "}
          <span className="font-black">{formatCurrency(subtotalAmount)}</span>
        </p>
        <p>
          Propina:{" "}
          <span className="font-black">{formatCurrency(tipAmount)}</span>
        </p>
        <p>
          Total a Pagar:{" "}
          <span className="font-black">{formatCurrency(totalAmount)}</span>
        </p>
      </div>

      <button className="w-full bg-black p-2 uppercase text-white font-black disabled:opacity-10" disabled={totalAmount === 0} onClick={saveOrder}>
        Guardar Orden
      </button>
    </>
  );
}
