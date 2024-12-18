import { MenuItem, OrderItem } from "../types"

type MenuItemsProps = {
    item: MenuItem;
    addItem: (item: MenuItem) => void
}

export default function MenuItems({item, addItem} : MenuItemsProps) {
  return (
    <button
    onClick={()=> addItem(item)}
    
    className="border-2 border-teal-400 w-full p-3 flex justify-between hover:bg-teal-200">
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
      
    </button>
  )
}
