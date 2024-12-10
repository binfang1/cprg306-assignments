'use client';

import { useEffect, useState } from "react";

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    async function loadMealIdeas(ingredient) {
        let fetched_meals = await fetchMealIdeas(ingredient);
        setMeals(fetched_meals);
    }

    useEffect(() => {
        loadMealIdeas(ingredient);
    }, [ingredient]);

    return (
        <div>
            <p>{ingredient.toUpperCase()}</p>
            <ul>
                {meals.map((meal) => (
                    <li className="my-2 bg-slate-100 px-2" key={meal.idMeal}>
                        <h2 className="font-bold text-lg">{meal.strMeal}</h2>
                    </li>
                ))}
            </ul>
        </div>
    );

}

async function fetchMealIdeas(ingredient) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals || [];
    } catch (e) {

    }
}


