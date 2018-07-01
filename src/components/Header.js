import React from 'react'
import {styleHeader} from '../styles'
import {Link} from 'react-router-dom'

const Header = ({location}) => (
  <div style={styleHeader}>
    <h1 className="headerBrand">
      west elm
    </h1>
      {location.pathname !== '/' &&
        <Link to={'/'} style={{textDecoration: 'none', color: 'black'}}>
          <h4>All new Products</h4>
        </Link>
      }
  </div>
)

export default Header
