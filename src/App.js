import { GlobalStyle } from './Components/Style/GlobalStyle'
import { Header } from './Components/Header/Header'
import { Items } from './Components/Items/Items'
import { ModalItem } from './Components/Modal/ModalItem'
import { Order } from './Components/Order/Order'
import { useOpenItem } from './Components/Hooks/useOpenItem'
import { useOrders } from './Components/Hooks/useOrders'
import { useAuth } from './Components/Hooks/useAuth'
import { useTitle } from './Components/Hooks/useTitle'
import { OrderConfirm } from './Components/Order/OrderConfirm'
import { useOrderConfirm } from './Components/Hooks/useOrderConfirm'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import { Context } from './Components/Functions/context'

const firebaseConfig = {
  apiKey: "AIzaSyCkq5c_ZQhVPA_mbHLY4MMTa6Ta1Q9VdZw",
  authDomain: "murrmelad-72b2f.firebaseapp.com",
  projectId: "murrmelad-72b2f",
  storageBucket: "murrmelad-72b2f.appspot.com",
  messagingSenderId: "710662091766",
  appId: "1:710662091766:web:6a37ad7fca8a6a62408dd7"
};

firebase.initializeApp(firebaseConfig)

function App() {
  const auth = useAuth(firebase.auth)
  const openItem = useOpenItem()
  const orders = useOrders()
  const orderConfirm = useOrderConfirm()
  useTitle(openItem.openItem)
  return (
    <Context.Provider value={{
      auth, 
      openItem, 
      orders, 
      orderConfirm,
      firebaseDatabase: firebase.database
    }}>
      <GlobalStyle/>
      <Header/>
      <Items/>
      { openItem.openItem && <ModalItem/>}
      <Order/>
      {orderConfirm.openOrderConfirm && <OrderConfirm/>}
    </Context.Provider>
  );
}

export default App;
