import { useState } from "react";
import { Header } from "./components/Header";
import { FormAddItem } from "./components/FormAddItem";
import { List } from "./components/List";
import { CheckedList } from "./components/CheckedList";
import { Button } from "./components/Button";
import useLocalStorageState from "./components/useLocalStorageState";

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const [showList, setShowList] = useState(true);
  const [showCheckedList, setShowCheckedList] = useState(false);
  // const [items, setItems] = useState([]);

  const [items, setItems] = useLocalStorageState([], "items");

  function handleShowForm() {
    setShowForm((show) => !show);
  }

  function handleShowList() {
    setShowList((show) => !show);
  }

  function handleShowCheckedList() {
    setShowCheckedList((show) => !show);
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
          showList={showList}
          onShowList={handleShowList}
        />
        <CheckedList
          items={items}
          onToggleItem={handleToggleItem}
          onDeleteItem={handleDeleteItem}
          showList={showCheckedList}
          onShowList={handleShowCheckedList}
        />
      </div>
    </div>
  );
}
