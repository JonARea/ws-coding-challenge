import React from 'react'
import Header from '../components/Header'
import renderer from 'react-test-renderer'
import {} from 'react-router-dom'

test('Header shows Link to All products when on a single product page', () => {
  const component = renderer.create(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  tree = component.toJSON()
  expect(tree).toMatchSnapshot()

})
