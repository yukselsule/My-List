import { Button } from "./Button";
import { Item } from "./Item";

export function List({
  items,
  onToggleItem,
  onDeleteItem,
  showList,
  onShowList,
}) {
  return (
    <div className="list">
      <div>
        <span>Check list</span>
        <Button onClick={onShowList}>{showList ? "\u2B9D" : "\u2B9F"}</Button>
      </div>
      {showList && (
        <ul>
          {items.map(
            (item) =>
              !item.checked && (
                <Item
                  item={item}
                  key={item.id}
                  onToggleItem={onToggleItem}
                  onDeleteItem={onDeleteItem}
                />
              )
          )}
        </ul>
      )}
    </div>
  );
}
