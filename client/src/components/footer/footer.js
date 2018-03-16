import React from 'react'
import ListImgFooter from '../listImgFooter/listImgFooter'

const styles = {
  footer: {
    display: 'block',
    background: 'black'
  },
  ul: {
    display: 'flex'
  },
  nav: {
    height: '36px'
  },
}

const Footer = (props) => {
  let imgs = props.imgs.map(( img, i) =>{
    return <ListImgFooter img={img.href} position={img.position} height={img.height} width={img.width} key={i}/>
  })

  return (
    <footer style={styles.footer}>
      <nav style={styles.nav}>
        <ul style={styles.ul}>
          {imgs}
        </ul>  
      </nav>    
    </footer>  
  )
}

export default Footer