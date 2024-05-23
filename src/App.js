export default function App() {
  return (
    <div>
      <Header />
      <div className="app">
        <Form />
        <List />
        <CheckedList />
      </div>
    </div>
  );
}

function Header() {
  return <h1>My List</h1>;
}

function Form() {
  return (
    <div className="form">
      <Button>Add list item</Button>
      <div className="form-add">
        <input type="text" placeholder="list item"></input>
        <Button>Add</Button>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="list">
      <div>
        <span>Check list</span>
        <Button> &#x2B9F;</Button>
      </div>

      <ul>
        <Item />
      </ul>
    </div>
  );
}

function CheckedList() {
  return (
    <div className="checked-list">
      <div>
        <span>X checked items</span>
        <Button>&#x2B9F;</Button>
      </div>

      <ul>
        <Item />
      </ul>
    </div>
  );
}

function Item() {
  return (
    <div className="item">
      <input type="checkbox" />
      <span>List item</span>
      <Button>&#x2716;</Button>
    </div>
  );
}

function Button({ children }) {
  return <button>{children}</button>;
}
