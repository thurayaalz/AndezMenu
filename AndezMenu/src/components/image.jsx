export default function Pics({ src, alt }) {
  const fallback = "/menu/fallback.jpg"; // put fallback.jpg in public/menu/
  return (
    <div className="overflow-fit rounded-2xl  aspect-square">
      <img
        src={src || fallback}
        alt={alt || "menu item"}
        loading="lazy"
       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
    </div>
  );
}

