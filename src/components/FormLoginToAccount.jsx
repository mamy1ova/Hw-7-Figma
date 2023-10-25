import React, { useState } from "react";
import styled from "styled-components";

const FormLoginToAccount = (props) => {
  const { placeholder, error, type } = props;

  const [inputValue, setInputValue] = useState("");
  const [error1, setError1] = useState("");

  const checkFirstName = (e) => {
    setInputValue(e.target.value);
    if (placeholder === "Пароль") {
      if (inputValue.length >= 6) {
        setError1("");
      } else {
        setError1("Пароль должен состоять минимум из 6 символов!");
      }
    }
  };

  const valid = () => {
    if (inputValue === "") {
      setError1(error);
    } else {
      setError1("");
    }
  };

  return (
    <Container>
      <input
        type={type ? type : "text"}
        placeholder={placeholder}
        onChange={checkFirstName}
        value={inputValue}
        onBlur={valid}
      />
      <p>{error1}</p>
    </Container>
  );
};

export default FormLoginToAccount;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  & > input {
    width: 450px;
    height: 58px;
    padding-left: 10px;
    margin-top: 5px;
    border: 1px solid #767e8c;
    border-radius: 10px;
    margin-top: 50px;
  }
  & > p {
    color: red;
  }
`;
