import React from 'react'
import ProductThumbnail from './ProductThumbnail'
import {styleAllProducts} from '../styles/index'

export default class AllProducts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: props.products.groups
    }
  }

  render() {
    return (
      <div id="allProducts" style={styleAllProducts}>
        {this.state.products.map(product => <ProductThumbnail product={product} key={product.id} id={product.id} />)}
      </div>
    )
  }
}
