import React from 'react'

const HeadNav = () =>  {

  const styles = {
    header: {
      width: '100%',
      content: {
        textAlign: 'center',
        position: 'relative',
      },
      img: {
        backgroundImage: 'url(http://cdn2.webapps.imagendigital.com/soyactitud/images/sprite.v1.png)',
        width: '140px',
        height: '34px',
        display: 'inline-block'
      },
      btnMenu: {
        width: '38px',
        height: '31px',
        border: '0',
        background: 'transparent',
        margin: '3px 12px 0 0'
      },
      contentManu: {
        position: 'absolute',
        top: '0',
        right: '0',
        backgroundImage: 'url(http://cdn2.webapps.imagendigital.com/soyactitud/images/sprite.v1.png)',
        backgroundPosition: '1% 4.4%',
        transform: 'scale(.9)'
      }
    }
  }

  return (
    <header style={styles.header}>
      <div style={styles.header.content}>
        <div style={styles.header.img} ></div>
        <div style={styles.header.contentManu}>
          <div>
            <button style={styles.header.btnMenu}></button>
          </div>  
        </div>
      </div>  
    </header>  
  )
}

export default HeadNav
