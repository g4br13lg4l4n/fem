import React from 'react'
import sprites from '../../assets/images/sprite.v1.png'

const ListImgFooter = (props) => {
  const styles = {
    li: {
      padding: '2px'
    },
    span: {
      backgroundImage: `url(${sprites})`,
      backgroundPosition:`${props.position}`,
      display: 'block',
      height: `${props.height}`,
      width: `${props.width}`, 
      padding: '2px 6px',
      boxSizing: 'border-box'
    }
  }
  
  return (
    <li style={styles.li}>
      <a href={props.href}> 
        <span style={styles.span}></span> 
      </a>
    </li>
  )
}

export default ListImgFooter