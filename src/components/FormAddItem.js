import { useState, useEffect, useRef } from "react";
import { Button } from "./Button";

export function FormAddItem({ onAddItems, onCloseForm }) {
  const [description, setDescription] = useState("");
  const inputEl = useRef(null);

  useEffect(function () {
    inputEl.current.focus();
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (description.trim().length === 0) return;

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
        ref={inputEl}
      />
      <Button type="submit">Add</Button>
    </form>
  );
}
