import React from 'react';
import axios from 'axios';
import ProductAdd from './product_add';
import ProductCarousel from './product_carousel';
import {formatMoney} from '../../helpers';
import MiscDetails from './misc_details';

class ProductDetails extends React.Component{    
    state = {
        details: null
    }
    async componentDidMount(){
        const {params} = this.props.match;
        const resp = await axios.get(`/api/getproductdetails.php?productId=${params.product_id}`);
        if(resp.data.success){
            this.setState({
                details: resp.data.productInfo
            })    
        }else{
            this.setState({
                details: false
            })
        }
    }
    render(){
        const {details} = this.state;
        const {match: {params}, updateCart} = this.props;
        if(details === null){
            return <h1>Loading...</h1>
        }else if(!details){
            return <h1>No Product Found</h1>
        }

        const {description = 'No description available', name, images, price, miscDetails} = details;

        return (
            <div className="product-details">
                <h1 className="center">{name}</h1>
                <div className="row">
                    <ProductCarousel images={images}/>
                    <div className="col s12 m4">
                        <div className="right-align product-price">{formatMoney(price)}</div>
                        <ProductAdd productId={params.product_id} updateCart={updateCart}/>
                        <p>{description}</p>
                        <MiscDetails details={miscDetails}/>
                    </div>
                </div>
            </div>
        );
    };
};

export default ProductDetails;