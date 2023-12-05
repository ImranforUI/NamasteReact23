{
  /* <div class="parent">
  <div class="child">
    <h1>I'm h1 Elemnt</h1>
    <h2>I'm h2 Element</h2>
  </div>
  <div class="child2">
    <h1>I'm h1 Elemnt</h1>
    <h2>I'm h2 Element</h2>
  </div>
</div> */
}

const parent = React.createElement(
  "div",
  {
    id: "parent",
  },
  [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "I'm h1 Element"),
      React.createElement("h2", {}, "I'm h2 Element"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "I'm h1 Element"),
      React.createElement("h2", {}, "I'm h2 Element"),
    ]),
  ]
);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World from React!"
// );
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
