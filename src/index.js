import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const rootElement = document.getElementById("root");
let data = {
  key: 1,
  data: [
    {
      key: "_dkfhdsghf2",
      type: "h1",
      value: "Testing Title",
      justify: "center",
      style: {
        fontSize: "",
        fontFamily: "",
        color: ""
      }
    }
  ],
  style: { textAlign: "center" }
};
class Index extends React.Component {
  constructor() {
    super();
    this.App = new App();
    console.log(JSON.stringify(this.App.getData()));
  }
  render() {
    return (
      <React.StrictMode>
        <App
          data={data}
          handleChange={e => {
            //console.log(e);
          }}
        />
      </React.StrictMode>
    );
  }
}
ReactDOM.render(<Index />, rootElement);
