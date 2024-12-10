export default function Item({ category, name, quantity}) {
    return (
        <li className="my-2 bg-slate-100 px-2">
            <h2 className="font-bold text-lg">{category}</h2>
            <p>{quantity}x {name}</p>
        </li>
    );
}