import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Move = () => {
  // logic
  // React Router Dom으로 페이지를 이동하는 방법 두가지
  // 1. Link
  // 2. Navigate
  const history = useNavigate();

  const hanlePageMove = () => {
    // 페이지 이동
    history("/contact");
  };

  // 미션: Home버튼 만들어서 Home화면으로 페이지 이동시키기

  // view
  return (
    <div>
      <Link to={"/about"}>About</Link>
      <button type="button" onClick={hanlePageMove}>
        Contact
      </button>
    </div>
  );
};

export default Move;
