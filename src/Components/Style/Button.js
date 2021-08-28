import styled from 'styled-components'

export const Button = styled.button`
  background-color: #ff9601;
  color: white;
  border-color: transparent;
  padding: 10px 30px 10px 30px;
  text-align: center;
  display: block;
  margin: 0 auto;
  transition-property: color, background-color, border-color;
  transition-duration: .3s;
  &:hover {
    background-color: #fff;
    color: #ff9601;
    border-color: #ff9601;
  }
  &:disabled {
    color: #bbb;
    background-color: #ccc;
    border-color: #aaa;
  }
`