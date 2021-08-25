import styled from 'styled-components'
import { ListItem } from './ListItem'
import dbItem from '../DBItem'

const ItemsStyled = styled.main`
  background-color: #ccc;
  margin-top: 80px;
  margin-left: 380px;
`
const SectionItem = styled.section`
  padding: 30px;
`
const TitleItem = styled.h2`
  font-size: 25px;
  line-height: 5px;
  font-weight: normal;
`

export const Items = ({ setOpenItem }) => (
  <ItemsStyled>
    <SectionItem>
      <TitleItem>Сухой корм</TitleItem>
      <ListItem 
        itemList={dbItem.dryFood}
        setOpenItem={setOpenItem}/>
    </SectionItem>
    <SectionItem>
      <TitleItem>Консервы</TitleItem>
      <ListItem 
        itemList={dbItem.cannedFood}
        setOpenItem={setOpenItem}/>
    </SectionItem>
    <SectionItem>
      <TitleItem>Лакомства</TitleItem>
      <ListItem 
        itemList={dbItem.treats}
        setOpenItem={setOpenItem}/>
    </SectionItem>
    <SectionItem>
      <TitleItem>Игрушки</TitleItem>
      <ListItem 
        itemList={dbItem.toys}
        setOpenItem={setOpenItem}/>
    </SectionItem>
  </ItemsStyled>
)
