import {Dispatch, SetStateAction} from "react";


type TipPercentageFormProps = {
  setTip: Dispatch<SetStateAction<number>>
  tip: number
}
const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

export default function TipPercentageForm({setTip, tip}: TipPercentageFormProps) {


  
  return (
    <div >
      <h3 className="font-black text-2xl">Propina: </h3>
      <form action="">
        {tipOptions.map((tip) => (
          <div className="flex gap-2" key={tip.id}>
            <label  htmlFor={tip.id} > {tip.label}</label>
            <input type="radio" name="tip" value={tip.value} id={tip.id} onChange={e => setTip(+e.target.value) } />
          </div>
        ))}
      </form>
    </div>
  );
}
