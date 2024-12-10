

import Item from "./item";
import { useState } from "react";

export default function ItemList({ items }) {
    const [sortBy, setSortBy] = useState("name");

    if(sortBy.localeCompare("name") == 0) {
      items.sort((a, b) => a.name.localeCompare(b.name));
    } else if(sortBy.localeCompare("category") == 0) {
      items.sort((a, b) => a.category.localeCompare(b.category));
    }

    return (
      <main>
        <button className={sortBy === "name" ? "bg-green-500" : "bg-red-500"} onClick={(event) => setSortBy("name")}>Sort by Name</button>
        <div className="py-2"></div>
        <button className={sortBy === "category" ? "bg-green-500" : "bg-red-500"} onClick={(event) => setSortBy("category")}>Sort by Category</button>
        <ul>
          {items.map((item) => (
            <Item category={item.category} name={item.name} quantity={item.quantity} key={item.id}/>
          ))}
        </ul>
      </main>
    );
}