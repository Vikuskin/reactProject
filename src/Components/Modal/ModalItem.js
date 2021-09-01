import styled from 'styled-components'
import { getCurrency, totalPriceItems } from '../Functions/secondaryFunction'
import { Button } from '../Style/Button'
import { CountItem } from './CountItem'
import { useCount } from '../Hooks/useCount'
import { Choices } from './Choices'
import { Volume } from './Volume'
import { useChoices } from '../Hooks/useChoices'
import { useVolume } from '../Hooks/useVolume'
import { Overlay } from '../Style/Overlay'
import { useContext } from 'react'
import { Context } from '../Functions/context'

const Modal = styled.div`
  background-color: #fff;
  width: 600px;
  height: 400px;
  z-index: 100;
  display: flex;
`
const BannerImg = styled.img`
  width: 50%;
  height: 100%;
  background-image: url(${({img}) => img});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`
const ModalContent = styled.div`
  padding: 20px;
  width: 50%;
  display: flex;
  flex-direction: column;
  height: 100%;
`
const ContentDesc = styled.p`
  font-size: 15px;
`
const ContentTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`
const TotalPriceItem = styled.div`
  display: flex;
  justify-content: space-between;
`
export const ModalItem = () => {
  const { 
    openItem: { openItem, setOpenItem },
    orders: { orders, setOrders }
  } = useContext(Context)
  
  const counter = useCount(openItem.count)
  const choices = useChoices(openItem)
  const volume = useVolume(openItem)
  const isEdit = openItem.index > -1
  const closeModal = e => {
    if (e.target.id === 'overlay') {
      setOpenItem(null)
    }
  }

  const editOrder = () => {
    const newOrders = [...orders]
    newOrders[openItem.index] = order
    setOrders(newOrders)
    setOpenItem(null)
  }

  const order = {
    ...openItem,
    count: counter.count,
    choice: choices.choices,
    volumes: volume.volume
  }

  const addToOrder = () => {
    setOrders([...orders, order])
    setOpenItem(null)
  }

  return (
    <Overlay id='overlay' onClick={closeModal}>
      <Modal>
        <BannerImg img={openItem.img}/>
        <ModalContent>
          <ContentTop>
            <p>{openItem.name}</p>
            <p>{getCurrency(totalPriceItems(order))}</p>  
          </ContentTop>
          <ContentDesc>
            {openItem.description}
          </ContentDesc>
          <CountItem {...counter}></CountItem>
          {openItem.choices && <Choices {...choices} openItem={openItem}/>}
          {openItem.volume && <Volume {...volume} openItem={openItem}/>}
          <TotalPriceItem>
            <span>Цена:</span>
            <span>{getCurrency(totalPriceItems(order))}</span>
          </TotalPriceItem>
          <Button 
            onClick={isEdit ? editOrder : addToOrder}
            disabled={order.choices ? !order.choice : order.volume ? !order.volumes : false}>
            {isEdit ? 'Редактировать' : 'Добавить'}
          </Button>
        </ModalContent>
      </Modal>
    </Overlay>
  )
}