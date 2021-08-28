import styled from 'styled-components'
import { Button } from '../Style/Button'
import { OrderListItem } from './OrderListItem'
import { getCurrency, totalPriceItems } from '../Functions/secondaryFunction'

const OrderStyled = styled.section`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 81px;
  left: 0;
  bottom: 0;
  background-color: white;
  width: 400px;
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
const EmptyList = styled.p`
  text-align: center;
`
export const Order = ({ orders, setOrders, setOpenItem }) => {
  const deleteItem = index => {
    const newOrder = [...orders]
    newOrder.splice(index, 1)
    setOrders(newOrder)
  }
  const total = orders.reduce((result, order) => 
    totalPriceItems(order) + result, 0)
  const totalCounter = orders.reduce((result, order) => 
    order.count + result, 0) 

  return (
    <OrderStyled>
      <OrderTitle>Ваш заказ</OrderTitle>
      <OrderContent>
        {orders.length ? 
        <OrderList>
          {orders.map((order, index) => <OrderListItem 
            order={order}
            key={index}
            deleteItem={deleteItem}
            index={index}
            setOpenItem={setOpenItem}/>)}
        </OrderList> : 
        <EmptyList>Список заказов пуст</EmptyList>}
      </OrderContent>
      <Total>
        <span>Итого</span>
        <span>{totalCounter}</span>
        <TotalPrice>{getCurrency(total)}</TotalPrice>
      </Total>
      <Button>Оформить</Button>
    </OrderStyled>
  )
}