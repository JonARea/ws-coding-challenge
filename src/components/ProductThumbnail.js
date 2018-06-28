import React from 'react'
import SingleProductModal from './SingleProductModal'
import {
  styleProductThumbnail,
  styleProductThumbnailName,
  styleProductThumbnailImage,
  styleProductThumbnailPrice
} from '../styles/index'

class ProductThumbnail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showDetails: false,
      showModal: false
    }
  }

  closeModal = () => {
    this.setState({showModal: false})
  }

  render() {
    const {product} = this.props
    return (
      <div
        className="productThumbnail"
        style={styleProductThumbnail}
        onMouseEnter={() => this.setState({showDetails: true})}
        onMouseLeave={() => this.setState({showDetails: false})}
      >
        <div
          className="productThumbnailName"
          style={this.state.showDetails ? {
              ...styleProductThumbnailName,
              opacity: '0.7'
            } : {
              ...styleProductThumbnailName,
              opacity: '0'
            }}
        >
          {product.name}
        </div>
        <div
          className="productThumbnailPrice"
          style={this.state.showDetails ? {
              ...styleProductThumbnailPrice,
              opacity: '0.7'
            } : {
              ...styleProductThumbnailPrice,
              opacity: '0'
            }}
        >
          {'$' + product.priceRange.selling.low + ' - $' + product.priceRange.selling.high}
        </div>
        <img
          className="productThumbnailImage"
          style={styleProductThumbnailImage}
          onClick={() => this.setState({showModal: true})}
          src={product.hero.href}
          alt={product.hero.alt}
        />
        <SingleProductModal
          images={product.images}
          isOpen={this.state.showModal}
          closeModal={this.closeModal}
        />
    </div>
    )
  }
}

export default ProductThumbnail
