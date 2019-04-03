import React from 'react';

class ProductDetails extends React.Component{    
    componentDidMount(){
        //call server to get product details
        const {params} = this.props.match;
    }
    render(){
        return (
            <div className="product-details">
                <h1 className="center">[Product Name] Details</h1>
            </div>
        );
    };
};

export default ProductDetails;