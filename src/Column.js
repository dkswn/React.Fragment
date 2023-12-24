import React from "react";

function Column() {
  const todoList = ["밥먹기", "코딩하기", "커피마시기"];
  return (
    <>
      {todoList.map((todo, idx) => (
        <React.Fragment key={idx}>
          {/* // 리엑트 플래그먼트에는 키값만 받을 수 있다. */}
          <td>{todo}</td>
          <td>{todo}</td>
        </React.Fragment>
      ))}
    </>
  );
}

export default Column;
