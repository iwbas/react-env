import "./EditorTab.css";
import MonacoEditor from "@monaco-editor/react";

const EditorTab = ({
  className,
  tabName,
  readOnly,
  miniMapShown,
  value,
  onChange,
}) => {
  const options = {
    readOnly: readOnly,
    minimap: {
      enabled: miniMapShown,
    },
    automaticLayout: true,
  };

  return (
    <div className={className}>
      <h2>{tabName}</h2>
      <MonacoEditor
        value={value}
        language="cpp"
        readOnly={true}
        options={options}
        onChange={onChange}
      />
    </div>
  );
};

EditorTab.defaultProps = {
  readOnly: false,
  miniMapShown: true,
  value: "",
};

export default EditorTab;
