import React from 'react'
import Items from './items'

const NavButton = (props) => {

  let items = props.listas.map((lista, i) => {
    return <Items name={lista} key={i}/>
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