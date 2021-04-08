import "./ManagmentPanel.css";

const ManagmentPanel = (props) => {
  const { styles } = props;
  return (
    <div className="panel">
      <section className="leftSection">
        <span>ConEnv</span>
        <span>Запустить</span>
        <span>Собрать</span>
        <span>Сохранить</span>
      </section>
      <section className="rightSection"></section>
    </div>
  );
};

export default ManagmentPanel;
