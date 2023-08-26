import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const Nav = ({ setLogin, login }) => {
  const munuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];
  const navigate = useNavigate();
  const getLogin = () => {
    navigate("/Login");
  };
  const getImg = () => {
    navigate("/");
  };
  const getSearch = (event) => {
    if (event.key == "Enter") {
      let ketWord = event.target.value;
      navigate(`/?q=${ketWord}`);
    }
  };
  return (
    <div>
      {login ? (
        <div className="nav-t" onClick={() => setLogin(false)}>
          <FontAwesomeIcon className="nav-t-font" icon={faUser} />
          <span>로그아웃</span>
        </div>
      ) : (
        <div className="nav-t" onClick={getLogin}>
          <FontAwesomeIcon className="nav-t-font" icon={faUser} />
          <span>로그인</span>
        </div>
      )}

      <div className="nav-m" onClick={getImg}>
        <img
          width={100}
          src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1999-present.jpg"
        />
      </div>
      <div>
        <div>
          <ul className="nav-b1">
            {munuList.map((munu) => (
              <li>{munu}</li>
            ))}
          </ul>
        </div>
        <div className="nav-b2">
          <FontAwesomeIcon className="nav-font" icon={faMagnifyingGlass} />
          <input
            type="text"
            placeholder="제품검색"
            onKeyPress={(event) => getSearch(event)}
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
