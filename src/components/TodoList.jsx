import React, { useState } from "react";

const TodoList = () => {
  // logic
  const initialList = [
    {
      id: 1,
      text: "React이론",
    },
    {
      id: 2,
      text: "React실습",
    },
    {
      id: 3,
      text: "React컴포넌트 학습",
    },
    {
      id: 4,
      text: "React JSX규칙 학습",
    },
    {
      id: 5,
      text: "React state와 props 학습",
    },
    {
      id: 6,
      text: "React Router 학습",
    },
  ];
  const [list, setList] = useState(initialList);

  const hanldeAdd = () => {
    const newItem = {
      id: list.length + 1,
      text: "리스트 렌더링",
    };
    // spread syntax
    const resultList = [...list, newItem];
    setList(resultList);
  };

  // view
  return (
    <div>
      <ul>
        {/* 리스트 렌더링 */}
        {list.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      <button type="button" onClick={hanldeAdd}>
        아이템 추가
      </button>
    </div>
  );
};

export default TodoList;
