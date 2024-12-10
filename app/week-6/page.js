"use client";

import ItemList from "./item-list";

export default function Page() {
    return (
        <main className="px-6">
            <h1 className="text-xl font-bold">Shopping List</h1>
            <ItemList></ItemList>
        </main>
    );
}