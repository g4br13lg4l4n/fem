import React from 'react'
import sprites from '../../assets/images/sprite.v1.png'

const ListImgFooter = (props) => {
  const styles = {
    span: {
      backgroundImage: `url(${sprites})`,
      backgroundPosition:`${props.position}`,
      display: 'block',
      height: `${props.height}`,
      width: `${props.width}`, 
    }
  }
  
  return (
    <li>
      <a href={props.href}> 
        <span style={styles.span}></span> 
      </a>
    </li>
  )
}

export default ListImgFooter