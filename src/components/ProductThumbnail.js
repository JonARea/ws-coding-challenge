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

  componentDidMount() {
    const element = document.getElementById(this.props.id)
    this.toggleDetails(element)
    window.addEventListener('scroll', () => {
      if (element) {
        this.toggleDetails(element)
      }
    })
  }

  componentIsInView = (element) => {
    const top = element.getBoundingClientRect().top
    return top > 50 && window.innerHeight - 200 > top
  }

  toggleDetails = (element) => {
    if (this.componentIsInView(element) && !this.state.showDetails) { //component has moved in view
      this.setState({showDetails: true})
    } else if (!this.componentIsInView(element) && this.state.showDetails) { //component has moved out of view
        this.setState({showDetails: false})
    }
  }

  render() {
    const {product, id} = this.props
    return (
      <div
        className="productThumbnailCard"
        style={{padding: '0.5vw', backgroundColor: '#eee'}}
      >

      <div
        className="productThumbnail"
        style={styleProductThumbnail}
        id={id}
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
    </div>
    )
  }
}

export default ProductThumbnail
