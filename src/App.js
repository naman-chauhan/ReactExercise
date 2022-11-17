import React, { useState, useEffect } from "react";

const App = () => {
  const [posts, setPosts] = useState([]);

  // json data of array of objects

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        console.log("Json Data : ", data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // [ [user1], [user2], [user3] ]

  const apiList = posts.reduce((r, a) => {
    console.log("r", r);
    console.log("a", a);
    r[a.userId] = r[a.userId] || [];
    r[a.userId].push(a);
    return r;
  }, []);

  console.log("grouped data", apiList);

  const listItems = apiList.map((e1, index) => {
    return (
      <div style={{ border: "1px solid", margin: "20px" }}>
        <ul type="none">
          <li
            style={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            <span className="display-4">User id : {index}</span>
          </li>
        </ul>
        {e1.map((e2) => {
          return (
            <div>
              <ul>
                <li>Id : {e2.id}</li>
                <li>Title : {e2.title}</li>
              </ul>
            </div>
          );
        })}
      </div>
    );
  });

  return (
    <div>
      <h1 className="display-1 text-center">Todo Api call</h1>
      <p>{listItems}</p>
    </div>
  );
};

export default App;
