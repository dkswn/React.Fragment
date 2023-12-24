import React, { useState } from "react";

const heavyWork = () => {
  console.log("엄청 무거운 작업");
  return ["홍길동", "김민수"];
};

function App() {
  const [names, setNames] = useState(() => {
    return heavyWork(); // 초기값에 콜백함수를 넣으면 처음 렌더링 될때만 heavywork가 불러와 진다.
  });
  const [input, setInput] = useState(" ");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };
  const handleUpload = () => {
    setNames((prevState) => {
      console.log("이전 스테이트: ", prevState);
      return [input, ...prevState];
    });
  };
  console.log(input);
  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleUpload}>upload</button>
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>;
      })}
    </div>
  );
}

export default App;
