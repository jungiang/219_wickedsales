import React from 'react';
import axios from 'axios';
import ProductCarousel from './product_carousel';

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
        const{details} = this.state;
        if(details === null){
            return <h1>Loading...</h1>
        }else if(!details){
            return <h1>No Product Found</h1>
        }

        const {description = 'No description available', name, images} = details;

        return (
            <div className="product-details">
                <h1 className="center">{name}</h1>
                <ProductCarousel images={images}/>
                <p>{description}</p>
            </div>
        );
    };
};

export default ProductDetails;