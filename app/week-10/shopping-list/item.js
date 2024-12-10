export default function Item({ category, name, quantity, onSelect }) {
    return (
        <li className="my-2 bg-slate-100 px-2" onClick={() => onSelect(name)}>
            <h2 className="font-bold text-lg">{category}</h2>
            <p>{quantity}x {name}</p>
        </li>
    );
}