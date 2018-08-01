/**
 * First need to install package //? yarn add -D ract-markdown
 */
import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

class Markdown extends Component {
  render() {
    const input = "# This is a header \n\n And this is paragraph";

    return (
      <div>
        <h2>React Markdown!</h2>
        <ReactMarkdown source={input} />
      </div>
    );
  }
}

export default Markdown;
