import React from 'react'
import SingleProductModal from '../components/SingleProductModal'
import products from '../data/products'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

test('Single Product Modal component correctly shows navigation icons', () => {
  const component = shallow(
    <SingleProductModal
      images={products.groups[0].images}
      isOpen={true}
      closeModal={() => {component.props.isOpen = false}}
    />
  )
  expect(component).toMatchSnapshot()
  component.find('.navigate_next').simulate('click')
  expect(component).toMatchSnapshot()
  component.find('.navigate_next').simulate('click')
  expect(component).toMatchSnapshot()
  component.find('.navigate_before').simulate('click')
  expect(component).toMatchSnapshot()
  component.find('.navigate_before').simulate('click')
  expect(component).toMatchSnapshot()
})
