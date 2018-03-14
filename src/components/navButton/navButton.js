import React from 'react'

import Items from './items'

const NavButton = (props) => {

  let items = props.listas.map(lista => {
    return <Items name={lista}/>
  })

  return (
    <nav>
      <ul>
        {items}
      </ul>  
    </nav>  	
  )
}
export default NavButton