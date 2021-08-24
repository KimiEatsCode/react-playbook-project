
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

// const Button = ({ onClick, disabled = false, color = "danger" }) => (
//   <button
//     style={{
//       height: 30,
//       verticalAlign: "middle",
//       width: 30,
//       margin: "1px 5px",
//       borderRadius: "50%",
//       border: "none"
//     }}
//     className={`btn btn-sm btn-${color}`}
//     disabled={disabled}
//     onClick={onClick}
//   >
//     {color === "danger" ? "X" : "+"}
//   </button>
// );



const List = ({ index, items, selected, onRemove, propThatHasFunction }) => {

const test="sideBorder"

return (
  <ul className={test}>{index}
    {items.map((item, index) => (
      <li key={index} checked={selected === index}>
        <span
        className={selected === index ? "sideBorder" : ""}
          onClick={() => propThatHasFunction(index)}
        >
          {item}
        </span>
        {/* <Button onClick={() => onRemove(index)} /> */}
      </li>
    ))}
  </ul>
);
}
class PracticeClickIndex extends Component {
  state = {
    value: "",
    items: [1,2,3,4],
    selected: 0
  };

  // handleChange = e => {
  //   this.setState({
  //     [e.currentTarget.name]: e.currentTarget.value
  //   });
  // };

  // handleAdd = () => {
  //   const { items, value } = this.state;
  //   this.setState({
  //     items: [...items, value],
  //     value: ""
  //   });
  // };

  // handleRemove = index => {
  //   const { items, selected } = this.state;
  //   items.splice(index, 1);
  //   if (index < selected) index = selected - 1;
  //   if (index === selected) index = -1;
  //   if (index > selected) index = selected;
  //   this.setState({
  //     items: items,
  //     selected: index
  //   });
  // };

  handleActiveItem = index => {
    this.setState({selected: index});
  };

  render() {
    const { value, items, selected } = this.state;
    return (
      <div>
        {/* <input
          type="text"
          value={value}
          name="value"
          onChange={this.handleChange}
        />
        <Button
          disabled={!value}
          icon="X"
          color="success"
          onClick={this.handleAdd}
        /> */}
        <List
          items={items}
          selected={selected}
          propThatHasFunction={this.handleActiveItem}
          // onRemove={this.handleRemove}
        />
      </div>
    );
  }
}

export default PracticeClickIndex