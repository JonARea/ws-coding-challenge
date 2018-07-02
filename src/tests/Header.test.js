import React from 'react'
import Header from '../components/Header'
import renderer from 'react-test-renderer'
import {BrowserRouter} from 'react-router-dom'

test('Header shows Link to All products when on a single product page', () => {
  const noLink = renderer.create(
    <BrowserRouter>
      <Header location={{pathname: '/'}} />
    </BrowserRouter>
  )
  let tree = noLink.toJSON()
  expect(tree).toMatchSnapshot()

  const link = renderer.create(
    <BrowserRouter>
      <Header location={{pathname: '/somethingelse'}} />
    </BrowserRouter>
  )
  tree = link.toJSON()
  expect(tree).toMatchSnapshot()

})
