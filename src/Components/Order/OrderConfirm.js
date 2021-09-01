import styled from 'styled-components'
import { Overlay } from '../Style/Overlay'
import { Title, Total, TotalPrice } from '../Style/TitleTotalPrice'
import { Button } from '../Style/Button'
import { getCurrency, totalPriceItems, projection } from '../Functions/secondaryFunction'
import { useContext } from 'react'
import { Context } from '../Functions/context'

const Modal = styled.div`
  background-color: white;
  width: 600px;
  padding: 30px;
`
const ContentTitle = styled.h3`
  text-align: center;
  font-size: 20px;
  margin-bottom: 30px;
`
const rulesData = {
    name: ['name'],
    price: ['price'],
    count: ['count'],
    volume: ['volumes', item => item ? item : 'no volume'],
    choice: ['choice', item => item ? item : 'no choices']
  }
const sendOrder = (dataBase, orders, authentication) => {
    console.log(orders);
    const newOrder = orders.map(projection(rulesData))
    console.log(newOrder);
    dataBase.ref('orders').push().set({
      name: authentication.displayName,
      email: authentication.email,
      order: newOrder
    })
  }

export const OrderConfirm = () => {
  const { 
    orders: { orders, setOrders },
    auth: { authentication },
    orderConfirm: { setOpenOrderConfirm },
    firebaseDatabase,
  } = useContext(Context)

  const dataBase = firebaseDatabase()
  const total = orders.reduce((result, order) => 
    totalPriceItems(order) + result, 0)

  return (
    <Overlay>
      <Modal>
        <Title>{authentication.displayName}</Title>
        <ContentTitle>Осталось только подтвердить ваш заказ!</ContentTitle>
        <Total>
          <span>Итого:</span>
          <TotalPrice>{getCurrency(total)}</TotalPrice>
        </Total>
        <Button onClick={() => {
          sendOrder(dataBase, orders, authentication)
          setOrders([])
          setOpenOrderConfirm(false)
        }}>Подтвердить</Button>
      </Modal>
    </Overlay>
  )
}