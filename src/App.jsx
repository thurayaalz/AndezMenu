
// src/App.jsx
import { useState } from "react";
import "./App.css";
import DrinkCard from "./components/card.jsx";
import menu from "./Menu.json"; 

export default function App() {
  const [category, setCategory] = useState("hotDrinks"); // "hotDrinks" | "coldDrinks" | "sweets"

  const categoryItems = Array.isArray(menu?.[category]) ? menu[category] : [];
  // map JSON fields to what DrinkCard expects
  const normalized = categoryItems.map((item) => ({
    id: item.id || item.name_en || item.name,
    name: item.name_en || item.name || item.name_ar,
    price: item.price ?? "—",
    cals: item.calories ?? item.cals ?? "—",
    // resolve image path from public/menu; use fallback if missing
    image: "/menu/" + (item.image || "fallback.jpg") + ".png"
  }));

  return (
    <>
      <header className="px-6 py-6">
        <img src="/theYard.png" alt=""/>

        <nav className="mt-4 flex gap-3 items-center justify-center">
          {[
            { key: "hotDrinks", label: "Hot" },
            { key: "coldDrinks", label: "Cold" },
            { key: "sweets", label: "Sweets" }
          ].map((c) => (
              <button
                key={c.key}
                onClick={() => setCategory(c.key)}
                className={`px-3 py-1  text-lg font-lg ${
category === c.key ? "bg-[#324639] text-white rounded-[0.2rem]" : "bg-trancparent"
}`}
              >
                {c.label}
              </button>
            ))}
        </nav>
      </header>

      <main className="p-6 px-6 items-center justify-center">
        <section className="flex flex-col items-center text-center grid gap-6 grid-cols-1 md:grid-cols-2 sm:grid-cols-3 lg:grid-cols-3">
          {normalized.length === 0 ? (
            <div className="text-gray-500">No items in this category.</div>
          ) : (
              normalized.map((drink) => (
                <DrinkCard
                  key={drink.id}
                  drinkInfo={{
                    name: drink.name,
                    price: drink.price,
                    cals: drink.cals,
                    image: drink.image,
                    // keep raw item if you need extra fields inside the card
                    raw: drink.raw
                  }}
                />
              ))
            )}
        </section>
      </main>


      <spline-viewer
        url="https://prod.spline.design/OnkXiLTRPuNCBiPl/scene.splinecode"
        className="fixed top-0 left-0 w-screen h-screen -z-10 opacity-10"
      />

    </>
  );
}

