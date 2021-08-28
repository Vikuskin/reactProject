import { GlobalStyle } from './Components/Style/GlobalStyle'
import { Header } from './Components/Header/Header'
import { Items } from './Components/Items/Items'
import { ModalItem } from './Components/Modal/ModalItem'
import { Order } from './Components/Order/Order'
import { useOpenItem } from './Components/Hooks/useOpenItem'
import { useOrders } from './Components/Hooks/useOrders'

function App() {
  const openItem = useOpenItem()
  const orders = useOrders()
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Items {...openItem}/>
      { openItem.openItem && <ModalItem {...openItem} {...orders}/>}
      <Order {...orders} {...openItem}/>
    </>
  );
}

export default App;
