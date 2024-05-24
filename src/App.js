import { useState } from "react";

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const [items, setItems] = useState([]);

  function handleShowForm() {
    setShowForm((show) => !show);
  }

  function handleSetItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  function handleDeleteItem(id) {
    const confirmed = window.confirm("Do you want to delete this item?");

    if (confirmed) setItems((items) => items.filter((item) => item.id !== id));
  }

  return (
    <div>
      <Header />
      <div className="app">
        <div className="form">
          <Button onClick={handleShowForm}>
            {showForm ? "Close" : "Add list item"}
          </Button>
          {showForm && (
            <FormAddItem
              onAddItems={handleSetItems}
              onCloseForm={handleShowForm}
            />
          )}
        </div>
        <List
          items={items}
          onToggleItem={handleToggleItem}
          onDeleteItem={handleDeleteItem}
        />
        <CheckedList
          items={items}
          onToggleItem={handleToggleItem}
          onDeleteItem={handleDeleteItem}
        />
      </div>
    </div>
  );
}

function Header() {
  return <h1>My List</h1>;
}

function FormAddItem({ onAddItems, onCloseForm }) {
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, checked: false, id: Date.now() };

    onAddItems(newItem);
    setDescription("");
    onCloseForm();
  }

  return (
    <form className="form-add" onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></input>
      <Button>Add</Button>
    </form>
  );
}

function List({ items, onToggleItem, onDeleteItem }) {
  return (
    <div className="list">
      <div>
        <span>Check list</span>
        <Button>&#x2B9F;</Button>
      </div>

      <ul>
        {items.map(
          (item, i) =>
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
    </div>
  );
}

function CheckedList({ items, onToggleItem, onDeleteItem }) {
  return (
    <div className="checked-list">
      <div>
        <span>X checked items</span>
        <Button>&#x2B9F;</Button>
      </div>

      <ul>
        {items.map(
          (item, i) =>
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
    </div>
  );
}

function Item({ item, onToggleItem, onDeleteItem }) {
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

function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}
