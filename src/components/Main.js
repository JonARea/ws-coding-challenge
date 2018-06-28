import React from 'react'
import Header from './Header'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import AllProducts from './AllProducts'
import SingleProductDetail from './SingleProductDetail'
import products from '../data/products'

const Main = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Route path='/products/:id' render={({match}) => {
        const product = products.groups.find(product => product.id === match.params.id)
        return (<SingleProductDetail product={product} />)
      }}
      />
      <Route exact path='/' render={() => <AllProducts products={products} />} />
    </div>
  </BrowserRouter>
)

export default Main
