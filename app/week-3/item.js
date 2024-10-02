export default function Item({ category, name, quantity }) {
    return (
        <li class="my-2 bg-slate-100 px-2">
            <h2 class="font-bold text-lg">{category}</h2>
            <p>{quantity}x {name}</p>
        </li>
    );
}