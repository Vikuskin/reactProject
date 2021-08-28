import styled from 'styled-components'
import { getCurrency } from '../Functions/secondaryFunction'

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const Item = styled.li`
  width: 210px;
  height: 296px;
  background-image: ${({ img }) => `url(${img})`};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: white;
  margin-top: 20px;
  padding: 15px;
  color: white;
  z-index: 1;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: black;
    opacity: 50%;
    z-index: -1;
  }
  &:hover {
    cursor: pointer;
    transition: box-shadow 0.3s ease-in-out, border 0.3s ease-in-out;
    color: black;
    box-shadow: 1px 1px 6px rgb(0 0 0 / 20%);
    border: 1px solid #cccccc;
    &:after {
      opacity: 0;
    }
  }
`

export const ListItem = ({ itemList, setOpenItem }) => (
  <List>
    {itemList.map(item => (
      <Item 
        key={item.id}
        img={item.img}
        onClick={() => setOpenItem(item)}>
        <p>{item.name}</p>
        <p>{getCurrency(item.price)}</p>
      </Item>
    ))}
  </List>
)