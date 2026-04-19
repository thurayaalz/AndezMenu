export default function Pics({ src, alt }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-gray-100 aspect-square">
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
      />
    </div>
  );
}
