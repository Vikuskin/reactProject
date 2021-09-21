import styled from 'styled-components'
import { Button } from '../Style/Button'
import { OrderListItem } from './OrderListItem'
import { Title, Total, TotalPrice } from '../Style/TitleTotalPrice'
import { getCurrency, totalPriceItems } from '../Functions/secondaryFunction'
import { useContext } from 'react'
import { Context } from '../Functions/context'

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
  @media (max-width: 768px) {
    width: 250px
  }
  @media (max-width: 576px) {
    width: 150px;
  }
`
const OrderContent = styled.div`
  flex-grow: 1;
`
const OrderList = styled.ul`

`
const EmptyList = styled.p`
  text-align: center;
`
export const Order = () => {
  const { 
    orders: { orders, setOrders }, 
    auth: { authentication, logIn },
    orderConfirm: { setOpenOrderConfirm }
  } = useContext(Context)

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
      <Title>Ваш заказ</Title>
      <OrderContent>
        {orders.length ? 
        <OrderList>
          {orders.map((order, index) => <OrderListItem 
            order={order}
            key={index}
            deleteItem={deleteItem}
            index={index}
          />)}
        </OrderList> : 
        <EmptyList>Список заказов пуст</EmptyList>}
      </OrderContent>
      {orders.length ?
        <>
        <Total>
          <span>Итого</span>
          <span>{totalCounter}</span>
          <TotalPrice>{getCurrency(total)}</TotalPrice>
        </Total>
        <Button onClick={() => {
          if (authentication) {
            setOpenOrderConfirm(true)
          } else {
            logIn()
          }
        }}>Оформить</Button>
        </> :
      null}
    </OrderStyled>
  )
}