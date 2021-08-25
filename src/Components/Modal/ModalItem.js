import styled from 'styled-components'
import { getCurrency } from '../Functions/secondaryFunction'
import { Button } from '../Style/Button'

const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  z-index: 20;
`
const Modal = styled.div`
  background-color: #fff;
  width: 600px;
  height: 400px;
  z-index: 100;
  display: flex;
`
const BannerImg = styled.img`
  width: 300px;
  height: 100%;
  background-image: url(${({img}) => img});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`
const ModalContent = styled.div`
  padding: 20px;
  width: 300px;
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

export const ModalItem = ({ openItem, setOpenItem }) => {
  function closeModal(e) {
    if (e.target.id === 'overlay') {
      setOpenItem(null)
    }
  }
  if (!openItem) return null

  return (
    <Overlay id='overlay' onClick={closeModal}>
      <Modal>
        <BannerImg img={openItem.img}/>
        <ModalContent>
          <ContentTop>
            <p>{openItem.name}</p>
            <p>{getCurrency(openItem.price)}</p>  
          </ContentTop>
          <ContentDesc>
            {openItem.description}
          </ContentDesc>
          <Button>
            Купить
          </Button>
        </ModalContent>
      </Modal>
    </Overlay>
  )
}