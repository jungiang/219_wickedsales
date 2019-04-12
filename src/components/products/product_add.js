import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import Modal from '../modal';
import {formatMoney} from '../../helpers';

class ProductAdd extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            qty: 1,
            totalPrice: 0,
            modalOpen: false,
            cartQty: 0
        }
        this.addToCart = this.addToCart.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.goToCart = this.goToCart.bind(this);
        this.incrementQty = this.incrementQty.bind(this);
        this.decrementQty = this.decrementQty.bind(this);
    }
    incrementQty(){
        this.setState({
            qty: this.state.qty + 1
        })
    }
    closeModal(){
        this.setState({
            modalOpen: false,
            qty: 1
        })
    }
    goToCart(){
        this.props.history.push('/cart');
    }
    addToCart(){
        const {productId, updateCart} = this.props;
        const {qty} = this.state;
        axios.get(`/api/addcartitem.php?product_id=${productId}&quantity=${qty}`).then(resp=>{
            // this.props.history.push('/cart');
            const {cartCount, cartTotal} = resp.data;
            updateCart(cartCount);

            this.setState({
                modalOpen: true,
                cartQty: cartCount,
                totalPrice: cartTotal
            })
        })
    }
    decrementQty(){
        if(this.state.qty > 1){
            this.setState({
                qty: this.state.qty - 1
            })    
        }
    }
    render() {
        const {modalOpen, qty, cartQty, totalPrice} = this.state;
        return (
            <div className="right-align add-to-cart">
                <span className="qty-container">
                    <button onClick={this.decrementQty} className="btn btn-small btn-floating purple lighten-1">
                        <i className="material-icons">remove</i>
                    </button>
                    <span className="product-qty">{qty}</span>
                    <button onClick={this.incrementQty} className="btn btn-small btn-floating purple lighten-1">
                        <i className="material-icons">add</i>
                    </button>
                </span>
                <button onClick={this.addToCart} className="btn purple dark-2">
                    <i className="material-icons">add_shopping_cart</i>
                </button>
                <Modal
                    defaultAction={this.closeModal} 
                    defaultActionText="Continue Shopping" 
                    isOpen={modalOpen}
                    secondaryAction={this.goToCart}
                    secondaryActionText="View Cart"
                >
                    <h1 className="center">{qty} Item{qty > 1 && 's'} Added to Cart</h1>
                        <div className="row">
                            <div className="col s6">Cart Total Items:</div>
                            <div className="col s6 left-align">{cartQty}</div>
                        </div>
                        <div className="row">
                            <div className="col s6">Cart Total Price:</div>
                            <div className="col s6 left-align">{formatMoney(totalPrice)}</div>
                        </div>
                </Modal>
            </div>
        )
    }
}

export default withRouter(ProductAdd);