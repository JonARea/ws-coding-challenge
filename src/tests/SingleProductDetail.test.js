import React from 'react'
import SingleProductDetail from '../components/SingleProductDetail'
import products from '../data/products'
import {shallow, mount, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

test('Single Product Detail component shows modal on click', () => {
  const component = shallow(
    <SingleProductDetail product={products.groups[0]} />
  )
  expect(component).toMatchSnapshot()
  expect(component.state().showModal).toBe(false)
  component.find('.singleProductDetailImage').simulate('click')
  expect(component.state().showModal).toBe(true)
  expect(component).toMatchSnapshot()
})

test('Single Product Detail component hides modal on click', () => {
  const component = mount(
    <SingleProductDetail product={products.groups[0]} />
  )
  component.find('.singleProductDetailImage').simulate('click')
  expect(component.state().showModal).toBe(true)
  component.find('.close').simulate('click')
  expect(component.state().showModal).toBe(false)
})
