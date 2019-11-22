/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{Component} from 'react';
import Header from './components/Header';
import ProductsContainer from './containers/ProductsContainer';
import MessageContainer from './containers/MessageContainer';
import Footer from './components/Footer';
import CartContainer from './containers/CartContainer';

class App extends Component {
    render(){
        return (
            <div>
            <Header/>
        <main id="mainContainer">
            <div className="container">
                {/* <!-- Products --> */}
                <ProductsContainer/>
                {/* <!-- Message --> */}
                <MessageContainer/>
                {/* <!-- Cart --> */}
                <CartContainer/>
            </div>
        </main>
        <Footer/>
        </div>
        );
    }
}
export default App;
