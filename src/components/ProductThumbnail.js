import React from 'react'
import {Link} from 'react-router-dom'
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
    }
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
        <Link to={'/products/' + product.id}>
          <img
            className="productThumbnailImage"
            style={styleProductThumbnailImage}
            src={product.hero.href}
            alt={product.hero.alt}
          />
        </ Link>
    </div>
    )
  }
}

export default ProductThumbnail
