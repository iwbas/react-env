import "./ManagmentPanel.css";

export const ManagmentPanel = ({ loadedCallback }) => {
  // const run = async () => {
  //   const url = "http://localhost:8080/run";
  //   const data = { message: "hello" };
  //   loadedCallback(false);
  //   try {
  //     const response = await fetch(url, {
  //       method: "POST", // или 'PUT'
  //       body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     const json = await response.json();
  //     console.log("Успех:", JSON.stringify(json));
  //   } catch (error) {
  //     console.error("Ошибка:", error);
  //   }

  //   loadedCallback(true);
  // };

  return (
    <div className="panel">
      <section className="leftSection">
        <span onClick={() => loadedCallback(false)} id="logo">
          ConEnv
        </span>
        <div>Запустить</div>
        <div>Собрать</div>
        <div>Сохранить</div>
      </section>
      <section className="rightSection"></section>
    </div>
  );
};
