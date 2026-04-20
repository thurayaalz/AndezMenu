import Pics from "./image.jsx"
import CardDetails from "./details.jsx"

export default function DrinkCard({ drinkInfo }) {
  return (
    <div className="group w-full max-w-[250px] p-4  rounded-[0.2rem] border border-gray-15 shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* 1- مكون الصورة */}
      <Pics src={drinkInfo.image} alt={drinkInfo.name} className="opacity-85"/>

      {/* 2- مكون التفاصيل */}
      <CardDetails 
        name={drinkInfo.name} 
        price={drinkInfo.price} 
        cals={drinkInfo.cals} 
      />

      {/* زر إضافي لمطابقة أسلوب mustqr الاحترافي
      <button className="mt-4 w-full py-2 bg-gray-900 text-white rounded-xl text-sm font-medium hover:bg-green-800 transition-colors">
        Get
      </button>
      */}
    </div>
  );
}
