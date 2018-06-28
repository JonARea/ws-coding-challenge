import React from 'react'
import SingleProductModal from './SingleProductModal'
import {styleSingleProductDetail, styleAddToCart} from '../styles'

export default class SingleProductDetail extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        showModal: false,
      }
  }

  closeModal = () => this.setState({showModal: false})

  render() {
    const {product} = this.props
    return (
      <div>
        <SingleProductModal
          images={product.images}
          isOpen={this.state.showModal}
          closeModal={this.closeModal}
          />
        <div className="singleProductDetail" style={styleSingleProductDetail}>
          <div className="singleProductDetailLeft" style={{padding: '1vw', backgroundColor: '#eee'}}>
            <img
              src={product.hero.href}
              alt={product.hero.alt}
              className="singleProductDetailImage"
              style={{cursor: 'pointer'}}
              onClick={() => this.setState({showModal: true})}
            />
          </div>
          <div className="singleProductDetailRight" style={{maxWidth: '50%'}}>
            <h2 className="singleProductDetailName">{product.name}</h2>
            <h3 className="singleProductDetailPrice">{product.priceRange.selling.low + ' - ' + product.priceRange.selling.high}</h3>
            <button className="addTocart" style={styleAddToCart}>Add To Cart</button>
            <h3>Overview</h3>
            <p className="productOverview">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            <h3>Shipping</h3>
            <p className="shippingDetail">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          </div>
        </div>
      </div>
    )
  }
}
