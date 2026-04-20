import { Button, message, Popconfirm } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function RatingPage() {
  const [results, setResults] = useState([]);
  const user = useSelector((state) => state.auth);
  const [messageApi, holder] = message.useMessage();

  useEffect(() => {
    const getResults = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/tests/history",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user.token}`,
            },
          },
        );

        if (response.status != 200) {
          throw new Error("error");
        }

        const data = await response.json();

        setResults(data);
      } catch {
        console.log("!!!!");
      }
    };

    getResults();
  }, []);

  const confirm = (e) => {
    deleteHistory();
  };

  const cancel = (e) => {
    messageApi.error("Click on No");
  };

  async function deleteHistory() {
    //fetch mehod post
    //category, score, totalQuestions
    try {
      const response = await fetch("http://localhost:3000/api/tests/clear", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      setResults([]);
      messageApi.success("Click on Yes");
    } catch {
      messageApi.error("Error while clearing history");
    }
  }

  return (
    <div>
      {holder}
      {results.map((result) => (
        <div key={result.id}>
          <h2>{result.category}</h2>
          <p>
            {result.score} from {result.totalQuestions}
          </p>
        </div>
      ))}
      {results.length > 0 ? (
        <Popconfirm
          title="Delete the task"
          description="Are you sure to delete this task?"
          onConfirm={confirm}
          onCancel={cancel}
          okText="Yes"
          cancelText="No"
        >
          <Button danger>Delete</Button>
        </Popconfirm>
      ) : (
        <h1>no history</h1>
      )}
    </div>
  );
}
