import "react-app-polyfill/ie11";
import { useState, useRef } from "react";

import "./App.css";
import EditorTab from "./components/EditorTab";
import ManagmentPanel from "./components/ManagmentPanel";
import codeTemplate from "./utils/code_template";
import { loader } from "@monaco-editor/react";

loader.config({
  paths: {
    vs: "/vs",
  },
});

function App() {
  const [codeValue, setCodeValue] = useState(codeTemplate);
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  return (
    <>
      <ManagmentPanel />
      <EditorTab
        className="editor"
        tabName="main.cpp"
        value={codeValue}
        mode="cpp"
        onChange={(value, event) => {
          setCodeValue(value);          
        }}
      />
      <EditorTab
        className="editorIn"
        tabName="input"
        value={inputValue}
        miniMapShown={false}
        mode="plaintext"
        onChange={(value, event) => {
          setInputValue(value);          
        }}
      />
      <EditorTab
        className="editorOut"
        tabName="output"
        value={outputValue}
        miniMapShown={false}
        mode="plaintext"
        readOnly={true}
        onChange={(value, event) => {
          setOutputValue(value);          
        }}
      />
    </>
  );
}

export default App;
