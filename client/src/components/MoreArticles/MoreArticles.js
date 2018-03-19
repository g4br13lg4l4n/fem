import React from 'react'

const MoreArticles = () => {

  const styles = {
    more: {
      border: 0,
      display: 'block',
      margin: '16px auto',
      background: '#DC9A55',
      padding: '10px 18px',
      color: 'white',
      fontFamily: ['Oswald', 'sans-serif'],
      fontSize: '18px',
      borderRadius: '6px',
      fontWeight: '400'
    }
  }

  return (
    <button style={styles.more}>VER MÁS NOTAS</button>
  )
}

export default MoreArticles