// @flow

import React from "react";
import ReactDOM from "react-dom";

export class Index extends React.Component<{}> {
  render() {
    return (
      <div>
        <p>Hello world?</p>
        <svg>
          <rect x="0" y="0" width="100" height="100" />
        </svg>
      </div>
    );
  }
}

if (!module.parent) {
  var el = document.getElementById("root");
  if (el === null) {
    throw new Error("Couldn't load root element!");
  } else {
    ReactDOM.render(<Index />, el);
  }
}
