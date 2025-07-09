import React, { useState } from "react";

// state vs prop

const Counter = ({ step }) => {
  // logic
  console.log("🚀 ~ step:", step);
  // state라는 특별한 변수
  const [countState, setCountState] = useState(0);
  // const countState = useState(0)[0]
  // const setCountState = useState(0)[1]

  // 구조분해할당
  const dayOfWeeks = ["월", "화", "수"];
  const person = {
    name: "후츠릿",
    mbti: "ENTJ",
  };

  const personName = person.name;
  const personMBTI = person.mbti;

  const { name, mbti } = person;

  console.log("🚀~ personName:", name);
  console.log("🚀~ personMBTI:", mbti);

  const [second, first] = dayOfWeeks;
  console.log("결과:1", first);

  // 배열로 된 구조분해 할당
  const animals = ["개", "고양이", "앵무새"];
  // 미션: 각각의 값들을 구조분해할당으로 뽑아와서 콘솔에 출력하기

  const handleIncrease = () => {
    console.log(`+${step}`);
    setCountState(countState + step);
  };

  const handleDecrease = () => {
    console.log(`-${step}`);
    setCountState((prev) => prev - step);
  };

  // view
  return (
    <div>
      <h1>Counter</h1>
      <div
        style={{
          fontSize: "36px",
        }}
      >
        {countState}
      </div>
      <div>
        <button type="button" onClick={handleIncrease}>
          +{step}
        </button>
        <button type="button" onClick={handleDecrease}>
          -{step}
        </button>
      </div>
    </div>
  );
};

export default Counter;
