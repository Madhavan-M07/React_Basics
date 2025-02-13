import "./styles.css";
import Click from "./Click";

const user = {
  Name: "Madhavan",
  Address: "RR Nagar",
  Area: "Vnr",
};

// Array of prooducts
const products = [
  { title: "cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

function ShoppingList() {
  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? "magenta" : "darkgreen",
      }}
    >
      {product.title}
    </li>
  ));
  return <ul>{listItems}</ul>;
}

function MyButton() {
  return (
    <>
      <button>Click On Me</button>
      <h1 className="h1-style">Poda na padipen da!</h1>
    </>
  );
}

export default function App() {
  return (
    <>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <MyButton />
      <h2>{user.Name}</h2>
      <span>{user.Address}</span>
      <h4>{user.Area}</h4>
      <ShoppingList />
      <Click />
    </>
  );
}

// Updating the screen
