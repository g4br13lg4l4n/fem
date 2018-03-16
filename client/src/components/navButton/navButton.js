import React from 'react'
import Items from './items'

const NavButton = (props) => {

  const styles = {
    nav: {
      borderTop: '1px solid #909090'
    },
    ul: {
      display: 'flex'
    }
  }

  let items = props.listas.map((lista, i) => {
    return <Items name={lista} key={i}/>
  })

  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        {items}
      </ul>  
    </nav>  	
  )
}
export default NavButton