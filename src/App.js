import { useState } from "react";

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const [items, setItems] = useState([]);

  function handleShowForm() {
    setShowForm((show) => !show);
  }

  function handleSetItems(item) {
    console.log(items);
    setItems((items) => [...items, item]);
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
        <List items={items} />
        <CheckedList items={items} />
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

function List({ items }) {
  return (
    <div className="list">
      <div>
        <span>Check list</span>
        <Button>&#x2B9F;</Button>
      </div>

      <ul>
        {items.map(
          (item, i) => !item.checked && <Item item={item} key={item.id} />
        )}
      </ul>
    </div>
  );
}

function CheckedList({ items }) {
  return (
    <div className="checked-list">
      <div>
        <span>X checked items</span>
        <Button>&#x2B9F;</Button>
      </div>

      <ul>
        {items.map(
          (item, i) => item.checked && <Item item={item} key={item.id} />
        )}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li className="item">
      <input type="checkbox" value={item.checked} />
      <span>{item.description}</span>
      <Button>&#x2716;</Button>
    </li>
  );
}

function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}
