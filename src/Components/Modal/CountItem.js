import styled from 'styled-components'

const CountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 0.5
`
const CountInput = styled.input`
  width: 50px;
  font-size: 20px;
  @media (max-width: 576px) {
    font-size: 15px;
    width: 25px;
  }
`
const ButtonCount = styled.button`
  background-color: transparent;
  @media (max-width: 576px) {
    width: 15px;
    height: 15px;
    font-size: 10px;
  }
  
`

export const CountItem = ({ count, setCount, onChange }) => {
  return (
    <CountWrapper>
      <span>Количество</span>
      <div>
        <ButtonCount  disabled={count <= 1} onClick={() => setCount(count - 1)}>-</ButtonCount>
        <CountInput type='number' min='1' max='100' value={count < 1 ? 1 : count} onChange={onChange}></CountInput>
        <ButtonCount onClick={() => setCount(count + 1)}>+</ButtonCount>
      </div>
    </CountWrapper>
  )
}