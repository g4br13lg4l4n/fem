import React from 'react'

const Article = props => {

const styles = {
  article:{
    header:{
      padding: '10px 3% 10px 3%',
      boxSizing: 'border-box',
      fontSize: '25px'
    },
    body:{
      fontFamily: 'Helvitica',
      color: '#666',
      margin: 'margin',
      padding: '10px 3% 10px 3%',
    },
    seeMore:{
      border: '1px solid black',
      padding: '6px 14px',
      background: 'transparent',
      borderRadius: '5px',
      fontFamily: 'Helvetica',
      fontSize: '100%' 
    },
    blur:{
      backgroundImage: 'url("http://cdn2.webapps.imagendigital.com/soyactitud/images/bg_notas.png")',
      position: 'relative',
      zIndex: '1',
      textAlign: 'center',
      marginTop: '-90px',
      height: '80px',
      paddingTop: '40px',
      backgroundRepeat: 'repeat-x'
    },
    img: {
      width: '100%'
    }
  }
}

  return (
    <article>
      <img alt={'adsad'} src={props.img}/>
      <h3 style={styles.article.header}>{props.title}</h3>
      <p style={styles.article.body}>{props.summary}</p>
      <div style={styles.article.blur}>
        <button style={styles.article.seeMore}>VER MÁS</button>
      </div>  
    </article>
  )

}

export default Article 

