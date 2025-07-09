import React from "react";

const Greeting = () => {
  // logic
  const userName = "강경덕";
  const textClass = "text-red";

  // basic style
  // camel: basicStyle
  // Pascal: BasicStyle
  // snake: basic-style

  // view
  return (
    <>
      <h1 className={`greeting-title ${textClass}`}>
        안녕하세요 {userName}님!
      </h1>
      <p>오늘하루도 시원한 하루 되세요!</p>
    </>
  );
};

export default Greeting;
