import React from 'react'
import products from '../data/products'
import ProductThumbnail from './ProductThumbnail'
import {styleAllProducts} from '../styles/index'

export default class AllProducts extends React.Component {
  constructor() {
    super()
    this.state = {
      products: products.groups
    }
  }

  render() {
    return (
      <div id="allProducts" style={styleAllProducts}>
        {this.state.products.map(product => <ProductThumbnail product={product} key={product.id} />)}
      </div>
    )
  }
}
