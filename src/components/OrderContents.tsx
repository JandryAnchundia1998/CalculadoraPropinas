import { formatCurrency } from "../helpers";
import { OrderItem } from "../types";

type OrderContentsProps = {
  order: OrderItem[];
  removeItem: (id: OrderItem['id']) => void;
};

export default function OrderContents({ order, removeItem }: OrderContentsProps) {


  return (
    <div>
      <h2 className="font-black text-4xl mb-10">Consumo</h2>


        {order.map((item) => (
          <div key={item.id} className="flex justify-between border-t border-gray-200 py-5 last-of-type:border-b items-center">

            <div>
            <p className="text-lg">{item.name} - {formatCurrency(item.price)}</p>
            <p className="font-black">{item.quantity} - {formatCurrency(item.quantity * item.price)}</p>

            </div>
            <button onClick={()=> removeItem(item.id)} className="bg-red-600 h-8 w-8 rounded-full text-white font-black">
              X
            </button>
          </div>
        ))}
    
    </div>
  );
}
