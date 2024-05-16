"use client";

import { useState } from "react";
import snarkdown from "snarkdown";

const Editor = ({ id }: { id: string }) => {
  const [text, setText] = useState<string>("");

  // Function to safely set inner HTML
  const createMarkup = (markdown) => {
    return { __html: snarkdown(markdown) };
  };
  return (
    <div id="editor">
      <textarea
        name=""
        id="in"
        cols="30"
        rows="10"
        placeholder="markdown"
        onChange={(e) => setText(e.target.value)}
        value={text}
      ></textarea>

      <div id="out" dangerouslySetInnerHTML={createMarkup(text)} />

      <pre id="code">
        <p>{!text ? "Your code goes here..." : snarkdown(text)}</p>
      </pre>
    </div>
  );
};

export default Editor;
