/* 
  TODO:
  - Сохранение стейта или взятие стейта с бд

*/

import 'react-app-polyfill/ie11';
import { useState, useRef } from 'react';

import './App.css';
import EditorTab from './components/EditorTab';
// import { ManagmentPanel } from "./components/ManagmentPanel";
import codeTemplate from './utils/code_template';
import { loader } from '@monaco-editor/react';

loader.config({
  paths: {
    vs: '/vs',
  },
});

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);

  const [codeValue, setCodeValue] = useState(codeTemplate);
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const run = async () => {
    const url = 'http://194.233.160.8/api/run';
    const data = { code: codeValue, stdin: inputValue };
    const response = fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json().then(json => {
      setOutputValue(json.output)
    }));
  };

  // const run = async () => {
  //   setIsLoaded(false);
  //   const url = "http://localhost:8080/run";
  //   const data = { code: codeValue, stdin: inputValue };
  //   try {
  //     const response = await fetch(url, {
  //       method: "POST", // или 'PUT'
  //       body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     const json = await response.json();
  //     console.log(json.output);
  //     console.log("Успех:", JSON.stringify(json));
  //     // setOutputValue(jsFriendlyJSONStringify(json.output));
  //     setOutputValue(json.output);
  //   } catch (error) {
  //     console.error("Ошибка:", error);
  //     setError(error);
  //   }
  //   setIsLoaded(true);
  // };

  if (error) return <div>Ошибка: {error.message}</div>;

  if (!isLoaded) return <div className="loading-message">Загрузка...</div>;

  return (
    <>
      {/* <ManagmentPanel loadedCallback={setIsLoaded}/> */}

      <div className="panel">
        <section className="leftSection">
          <span id="logo">ConEnv</span>
          <div onClick={run}>Запустить</div>
          <div>Собрать</div>
          <div>Сохранить</div>
        </section>
        <section className="rightSection"></section>
      </div>

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
        readOnly
        onChange={(value, event) => {
          setOutputValue(value);
        }}
      />
    </>
  );
}

export default App;
