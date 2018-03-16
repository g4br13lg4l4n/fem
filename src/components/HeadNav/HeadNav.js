import React from 'react'

const HeadNav = () =>  {

  const styles = {
    header: {
      width: '100%',
      content: {
        textAlign: 'center',
        position: 'relative'
      },
      img: {
        backgroundImage: 'url(http://cdn2.webapps.imagendigital.com/soyactitud/images/sprite.v1.png)',
        width: '140px',
        height: '34px',
        display: 'inline-block'
      },
      btnMenu: {
        width: '38px',
        height: '31px'
      },
      contentManu: {
        position: 'absolute',
        top: '0',
        right: '0'
      }
    }
  }

  return (
    <header style={styles.header}>
      <div style={styles.header.content}>
        <div style={styles.header.img} ></div>
        <div style={styles.header.contentManu}>
          <div>
            <button style={styles.header.btnMenu}> 
              <span></span>
            </button>
          </div>  
        </div>
      </div>  
    </header>  
  )
}

export default HeadNav
