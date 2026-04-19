
// src/App.jsx
import { useState } from "react";
import "./App.css";
import DrinkCard from "./components/card.jsx";
import menu from "./Menu.json"; // exact casing matches your file

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
    image: "./public/menu/" + (item.image || "fallback.jpg") + ".png"
  }));

  return (
    <>
      <header className="px-6 py-6">
        <h1 >Andez x Mustqr</h1>

        <nav className="mt-4 flex gap-3">
          {[
            { key: "hotDrinks", label: "Hot" },
            { key: "coldDrinks", label: "Cold" },
            { key: "sweets", label: "Sweets" }
          ].map((c) => (
            <button
              key={c.key}
              onClick={() => setCategory(c.key)}
              className={`px-3 py-1  text-sm font-medium ${
                category === c.key ? "bg-green-900 text-white" : "bg-gray-100"
              }`}
            >
              {c.label}
            </button>
          ))}
        </nav>
      </header>

      <main className="p-6">
        <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
    </>
  );
}

