import React from 'react'
import SingleProductModal from './SingleProductModal'
import {styleSingleProductDetail} from '../styles'

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
          <div className="singleProductDetailLeft">
            <img
              src={product.hero.href}
              alt={product.hero.alt}
              className="singleProductDetailImage"
              onClick={() => this.setState({showModal: true})}
              />
          </div>
          <div className="singleProductDetailRight">
            <h2 className="singleProductDetailName">{product.name}</h2>
            <h3 className="singleProductDetailPrice">{product.priceRange.selling.low + ' - ' + product.priceRange.selling.high}</h3>
            <button className="addTocart">Add To Cart</button>
            <h3>Overview</h3>
            <p className="productOverview">Ispum Lorem></p>
            <h3>Shipping</h3>
            <p className="shippingDetail">Shipping blah</p>
          </div>
        </div>
      </div>
    )
  }
}
