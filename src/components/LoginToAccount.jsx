import React from "react";
import FormLoginToAccount from "./FormLoginToAccount";
import styled from "styled-components";
import Logo from "../../src/assets/icons/googleLogo.svg";

const LoginToAccount = () => {
  const googleAlert = () => {
    alert("У вас еще нет Google аккаунта!");
  };

  return (
    <Form>
      <h1>Вход в аккаунт</h1>
      <FormLoginToAccount
        error="Поле не должно быть пустым!"
        type="text"
        placeholder="Логин"
      />
      <FormLoginToAccount
        error="Поле не должно быть пустым!"
        type="password"
        placeholder="Пароль"
      />
      <p>Или</p>
      <Button type="submit" onClick={googleAlert}>
        <img src={Logo} alt="" />
        Войти через Google
      </Button>
      <ButtonLogin type="submit" >
        Вход
      </ButtonLogin>
    </Form>
  );
};

export default LoginToAccount;

const Form = styled.form`
  width: 582px;
  height: 693px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  & > h1 {
    color: #1b1c1f;
    font-size: 32px;
    font-weight: 600;
    text-align: center;
    margin-top: 45px;
  }
  & > p {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const Button = styled.button`
  width: 450px;
  height: 58px;
  margin-top: 5px;
  border: 1px solid #767e8c;
  border-radius: 10px;
  margin-left: 64px;
  margin-bottom: 65px;
  background-color: white;
  color: #1b1c1f;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
`;

const ButtonLogin = styled.button`
  width: 450px;
  height: 58px;
  background-color: #000000;
  color: white;
  font-weight: bold;
  margin-top: 5px;
  border: none;
  border-radius: 10px;
  margin-left: 64px;
`;
