import styled from 'styled-components'
import logoImg from '../../image/logo.png'
import sign from '../../image/sign.svg'
import callbackHeader from '../../image/callbackHeader.png'

const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 0 15px 0 15px;
  color: black;
  background-color: white;
`;
const ImgLogo = styled.img`
  height: 100%;
  padding: 0 15px 0 15px;
  border-right: 1px solid #f0f0f0;
  border-left: 1px solid #f0f0f0;
  margin-right: auto;
`;
const Login = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 15px 0 15px;
  border-right: 1px solid #f0f0f0;
  border-left: 1px solid #f0f0f0;
  height: 100%
`;
const LoginButton = styled.button`
  background-color: transparent;
  color: black;
  font-size: 16px;
  border: none;
`;
const ImgLogin = styled.img`
  width: 32px;
  height: 32px;
`;
const CallbackHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0 15px 0 15px;
  border-right: 1px solid #f0f0f0;
  border-left: 1px solid #f0f0f0;
  height: 100%;
  font-size: 16px
`;
const ImgCallback = styled.img`
  margin-right: 5px;
`;

export const Header = () => (
  <HeaderStyled>
      <ImgLogo src={logoImg} alt='Логотип'/>
      <CallbackHeader>
        <a href="tel:+7 (321) 567-43-78">
          <ImgCallback src={callbackHeader} alt='Позвонить'/>
        </a>
        <a href="tel:+7 (321) 567-43-78">+7 (321) 567-43-78</a>
      </CallbackHeader>
      <Login>
        <ImgLogin src={sign} alt='Войти'/>
        <LoginButton>войти</LoginButton>
      </Login>
  </HeaderStyled>
);
