
export default function CardDetails({ name, price, cals }) {
  return (
    <div className="mt-4 space-y-1">
      <h3 className="text-lg font-bold text-white-900">{name}</h3>
      <div className="flex justify-between items-center">
        <span className="text-emerald-600 font-medium">{price} ريال</span>
        <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded-full">
          {cals} سعرة
        </span>
      </div>
    </div>
  );
}
