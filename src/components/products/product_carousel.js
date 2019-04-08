import React from 'react';

class ProductCarousel extends React.Component {
    componentDidMount(){
        const config = {
            numVisible: 1,
            indicators: true
        }
        M.Carousel.init(this.carousel, config);
    }
    render(){
        const items = this.props.images.map((item)=>(
            <a key={item} className="carousel-item" href="#">
                <img src={`/dist/${item}`} alt="Product Image"/>
            </a>
        ))
        return(
            <div ref={(element)=>this.carousel=element} className="col s12 m8 carousel">
                {items}
            </div>
        )
    }
}

export default ProductCarousel;