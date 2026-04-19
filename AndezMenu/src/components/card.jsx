import Pics from "./image.jsx"
import CardDetails from "./details.jsx"

export default function DrinkCard({ drinkInfo }) {
  return (
    <div className="group w-full max-w-[280px] p-3 bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* 1- مكون الصورة */}
      <Pics src={drinkInfo.image} alt={drinkInfo.name} />
      
      {/* 2- مكون التفاصيل */}
      <CardDetails 
        name={drinkInfo.name} 
        price={drinkInfo.price} 
        cals={drinkInfo.cals} 
      />
      
      {/* زر إضافي لمطابقة أسلوب mustqr الاحترافي */}
      <button className="mt-4 w-full py-2 bg-gray-900 text-white rounded-xl text-sm font-medium transition-colors hover:bg-gray-800">
        إضافة للطلب
      </button>
    </div>
  );
}
