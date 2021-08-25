import { GlobalStyle } from './Components/Style/GlobalStyle'
import { Header } from './Components/Header/Header'
import { Items } from './Components/Items/Items'
import { ModalItem } from './Components/Modal/ModalItem'
import { Order } from './Components/Order/Order'
import React from 'react'

function App() {
  const [openItem, setOpenItem] = React.useState(null)
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Items setOpenItem={setOpenItem}/>
      <ModalItem openItem={openItem} setOpenItem={setOpenItem}/>
      <Order/>
    </>
  );
}

export default App;
