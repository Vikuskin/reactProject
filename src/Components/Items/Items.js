import styled from 'styled-components'
import { ListItem } from './ListItem'
import { useFetch } from '../Hooks/useFetch'
import { useCount } from '../Hooks/useCount'

const ItemsStyled = styled.main`
  background-color: #ccc;
  margin-top: 80px;
  margin-left: 400px;
`
const SectionItem = styled.section`
  padding: 30px;
`
const TitleItem = styled.h2`
  font-size: 25px;
  line-height: 5px;
  font-weight: normal;
`

export const Items = () => {
  const res = useFetch()
  const dbItem = res.response

  return (
  <ItemsStyled>
    {dbItem ?
      <>
        <SectionItem>
          <TitleItem>Сухой корм</TitleItem>
          <ListItem itemList={dbItem.dryFood}/>
        </SectionItem>
        <SectionItem>
          <TitleItem>Консервы</TitleItem>
          <ListItem itemList={dbItem.cannedFood}/>        
        </SectionItem>
        <SectionItem>
          <TitleItem>Лакомства</TitleItem>
          <ListItem itemList={dbItem.treats}/>
        </SectionItem>
        <SectionItem>
          <TitleItem>Игрушки</TitleItem>
          <ListItem itemList={dbItem.toys}/>
        </SectionItem>
      </> : res.error ?
      <div>Ошибка...</div> :
      <div>Загрузка..</div>}
  </ItemsStyled>)
}
