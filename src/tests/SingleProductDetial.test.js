import React from 'react'
import SingleProductDetail from '../components/SingleProductDetail'
import renderer from 'react-test-renderer'
import products from '../data/products'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

test('Single Product Detail component shows modal on click', () => {
  const component = shallow(
    <SingleProductDetail product={products.groups[0]} />
  )
  expect(component).toMatchSnapshot()

  component.find('.singleProductDetailImage').simulate('click')

  expect(component).toMatchSnapshot()
})
