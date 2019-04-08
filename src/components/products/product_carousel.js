import React from 'react';

class ProductCarousel extends React.Component {
    componentDidMount(){
        console.log(this.carousel);
        M.Carousel.init(this.carousel);
    }
    render(){
        console.log(this.props);
        const items = this.props.images.map((item)=>(
            <a key={item} className="carousel-item" href="#">
                <img src={`/dist/${item}`} alt="Product Image"/>
            </a>
        ))
        return(
            <div ref={(element)=>this.carousel=element} className="carousel">
                {items}
            </div>
        )
    }
}

export default ProductCarousel;