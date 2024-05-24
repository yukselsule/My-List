import { Button } from "./Button";
import { Item } from "./Item";

export function CheckedList({
  items,
  onToggleItem,
  onDeleteItem,
  showList,
  onShowList,
}) {
  const checked = items.filter((item) => item.checked).length;
  return (
    <div className="checked-list">
      <div>
        <span>{checked} checked items</span>
        <Button onClick={onShowList}>{showList ? "\u2B9D" : "\u2B9F"}</Button>
      </div>
      {showList && (
        <ul>
          {items.map(
            (item) =>
              item.checked && (
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
