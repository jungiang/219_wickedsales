import React from 'react';
import axios from 'axios';
import ProductItem from './product_item';

class ProductList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            products: []
        }
    }
    componentDidMount(){
        this.getProducts();
    }   
    getProducts(){
        axios.get('/api/getproducts.php').then((resp)=>{
            this.setState({
                products: resp.data.products
            })
        }).catch((err)=>{
            console.log(err);
        })
    } 
    render(){
        const productList = this.state.products.map((item)=>(
            <ProductItem key={item.id} {...item}/>
        ));
        return (
            <div className="product-list">
                <h1 className="center">Wicked Product List</h1>
                <ul className="collection">
                    {productList}
                </ul>
            </div>
        );
    };
};

export default ProductList;