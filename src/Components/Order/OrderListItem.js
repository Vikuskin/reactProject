import styled from 'styled-components'
import trash from '../../image/trash.svg'
import { getCurrency, totalPriceItems } from '../Functions/secondaryFunction'
import { useRef, useContext } from 'react'
import { Context } from '../Functions/context'

const TrashButton = styled.button`
  background-image: url(${trash});
  width: 24px;
  height: 24px;
  border-color: transparent;
  background-color: transparent;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`
const OrderItemStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 15px 0;
  font-size: 18px;
  cursor: pointer;
`
const ItemName = styled.span`
  flex-grow: 1;
  margin-right: 15px;
`
const ItemPrice = styled.span`
  margin-left: 15px;
  margin-right: 10px;
  min-width: 65px;
  text-align: right;
`
const Choices = styled.div`
  color: #9a9a9a;
  font-size: 14px;
  width: 100%;
`
export const OrderListItem = ({ order, index, deleteItem }) => {
  const { openItem: { setOpenItem } } = useContext(Context)
  
  const refDeleteButton = useRef(null)
  return (
      <OrderItemStyled onClick={(e) => e.target !== refDeleteButton.current && setOpenItem({...order, index})}>
        <ItemName>{order.name} {order.volumes}</ItemName>
        <span>{order.count}</span>
        <ItemPrice>{getCurrency(totalPriceItems(order))}</ItemPrice>
        <TrashButton ref={refDeleteButton} onClick={() => deleteItem(index)}/>
        {order.choices && <Choices>Вкус: {order.choice}</Choices>}
      </OrderItemStyled>
  )
}