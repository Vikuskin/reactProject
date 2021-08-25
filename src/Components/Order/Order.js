import styled from 'styled-components'
import { Button } from '../Style/Button'
import { OrderListItem } from './OrderListItem'

const OrderStyled = styled.section`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 81px;
  left: 0;
  bottom: 0;
  background-color: white;
  min-width: 380px;
  height: calc(100% - 80px);
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
  padding: 20px;
`
const OrderTitle = styled.h2`
  background-color: #ff9601;
  margin: 20px;
  color: white;
  height: 50px;
  padding: 13px;
  font-size: 20px;
  font-weight: normal;
  text-align: center;
  border-top: 1px solid #f0f0f0;
`
const OrderContent = styled.div`
  flex-grow: 1;
`
const OrderList = styled.ul`

`
const Total = styled.div`
  display: flex;
  margin-bottom: 30px;
  & span:first-child {
    flex-grow: 1;
  }
`
const TotalPrice = styled.div`
  text-align: right;
  min-width: 65px;
  margin-left: 20px;
`
export const Order = () => {
  return (
    <OrderStyled>
      <OrderTitle>Ваш заказ</OrderTitle>
      <OrderContent>
        <OrderList>
          <OrderListItem/>
          <OrderListItem/>
        </OrderList>
      </OrderContent>
      <Total>
        <span>Итого</span>
        <TotalPrice>600 p</TotalPrice>
      </Total>
      <Button>Оформить</Button>
    </OrderStyled>
  )
}