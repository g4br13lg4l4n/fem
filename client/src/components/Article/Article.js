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
<<<<<<< HEAD:src/components/Article/Article.js
      <img style={styles.article.img} alt={'adsad'} src={'http://cdn2.actitudfem.com/media/files/styles/medium/public/images/2018/03/lissette-calveiro-instagram-influences-que-vivio-una-mentira.jpg'}/>
      <h3 style={styles.article.header}>Lissette Calveiro cuenta cómo vivir la mentira de ser influencer en Instagram la endeudó</h3>
      <p style={styles.article.body}>Cuando Lissette Calveiro se mudó a Nueva York, pensó que estaba viviendo como una de las chicas de Sex and the City.&nbsp;Ropa y zapatos de marca, brunches con sus amigas, definitivamente estaba llevando la vida de Carrie Bradshaw y no podía dejar de presumirla en...</p>
=======
      <img alt={'adsad'} src={props.img}/>
      <h3 style={styles.article.header}>{props.title}</h3>
      <p style={styles.article.body}>{props.summary}</p>
>>>>>>> 7a5fac82b22cd16b6341c5d1dd86e93aba682198:client/src/components/Article/Article.js
      <div style={styles.article.blur}>
        <button style={styles.article.seeMore}>VER MÁS</button>
      </div>  
    </article>
  )

}

export default Article 

