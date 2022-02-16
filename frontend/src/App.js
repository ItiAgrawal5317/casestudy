
// Import for routing
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Import components
import Header from './components/header/Header';
import Invitemessage from './components/invitenow/Invitemessage';
import Homee from './components/homee/Homee';
import Login from './components/login/Login';
import SignUp from './components/signup/SignUp';
import WishlistEmpty from './components/wishlist/WishListEmpty';
import Bag from './components/bag/Bag';
import { TemplateProvider } from './templates/TemplateProvider';
import Footer from './components/footer/Footer';
import Navigation from './components/productitem/Navigation';
import ContextProvider from './context/ContextProvider';
import ContactUs from './components/contactus/ContactUs';
import BookProduct from './components/booking/BookProduct';
import Payments from './components/payments/Payments';
import ItemDetails from './components/detailsItem/ItemDetails';

function App() {
  return (
    <TemplateProvider>
    <ContextProvider>
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path="/" component={Homee} />
        <Route path='/invitenow' component={Invitemessage} />
        <Route path='/signup' component={SignUp} />
        <Route path='/login' component={Login} />
        <Route path='/products' component={Navigation} />
        <Route path='/product/:id' component={ItemDetails} />
        <Route path='/bookproduct' component={BookProduct} />
        <Route path='/payments' component={Payments } />
        <Route path='/bag' component={Bag} />
        <Route path='/wishlist' component={WishlistEmpty}/>
        <Route path='/contactus' component={ContactUs } />
        
      </Switch>

      <Footer />
    </BrowserRouter>
    </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
