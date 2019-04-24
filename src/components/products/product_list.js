import React from 'react';
import axios from 'axios';
import ProductItem from './product_item';
import {connect} from 'react-redux';
import {getAllProducts} from '../../actions';

class ProductList extends React.Component{
    constructor(props){
        super(props);
        this.goToDetails = this.goToDetails.bind(this);
    }
    componentDidMount(){
        this.props.getAllProducts();
    } 
    goToDetails(id){
        this.props.history.push(`/products/${id}`);
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
        const productList = this.props.products.map((product)=>(
            <ProductItem key={product.id} {...product} goToDetails={this.goToDetails}/>
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

function mapStateToProps(state){
    return {
        products: state.products.list
    }
}

export default connect(mapStateToProps, {
    getAllProducts
})(ProductList);