import styled from 'styled-components'
import trash from '../../image/trash.svg'

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
  margin: 15px 0;
`
const ItemName = styled.span`
  flex-grow: 1;
`
const ItemPrice = styled.span`
  margin-left: 20px;
  margin-right: 10px;
  min-width: 65px;
  text-align: right;
`

export const OrderListItem = () => (
  <OrderItemStyled>
    <ItemName>Cat</ItemName>
    <span>2</span>
    <ItemPrice>750 p</ItemPrice>
    <TrashButton/>
  </OrderItemStyled>
)