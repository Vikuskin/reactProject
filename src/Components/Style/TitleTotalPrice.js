import styled from 'styled-components'

export const Title = styled.h2`
  background-color: #ff9601;
  margin: 20px;
  color: white;
  height: 50px;
  padding: 13px;
  font-size: 20px;
  font-weight: normal;
  text-align: center;
  border-top: 1px solid #f0f0f0;
  @media (max-width: 576px) {
    font-size: 15px;
    padding: 5px;
    margin: 0;
    height: 30px;
  }
`
export const Total = styled.div`
  display: flex;
  margin-bottom: 30px;
  & span:first-child {
    flex-grow: 1;
  }
  @media (max-width: 576px) {
    max-width: 140px;
  }
`
export const TotalPrice = styled.div`
  text-align: right;
  min-width: 65px;
  margin-left: 20px;
  @media (max-width: 576px) {
    margin-left: 5px;
  }
`