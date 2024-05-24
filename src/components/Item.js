import { Button } from "./Button";

export function Item({ item, onToggleItem, onDeleteItem }) {
  return (
    <li className="item">
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => onToggleItem(item.id)}
      />
      <span className={item.checked ? "checked" : ""}>{item.description}</span>
      <Button onClick={() => onDeleteItem(item.id)}>&#x2716;</Button>
    </li>
  );
}
