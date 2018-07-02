import React from 'react'
import AllProducts from '../components/AllProducts'
import renderer from 'react-test-renderer'
import {BrowserRouter} from 'react-router-dom'
import products from '../data/products'

test('AllProducts shows thumbnails of all the products', () => {
  const component = renderer.create(
    <BrowserRouter>
      <AllProducts products={products} />
    </BrowserRouter>
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
