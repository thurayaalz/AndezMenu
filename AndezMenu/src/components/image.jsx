export default function Pics({ src, alt }) {
  const fallback = "/menu/fallback.jpg"; // put fallback.jpg in public/menu/
  return (
    <div className="overflow-hidden rounded-2xl bg-gray-100 aspect-square">
      <img
        src={src || fallback}
        alt={alt || "menu item"}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
    </div>
  );
}

