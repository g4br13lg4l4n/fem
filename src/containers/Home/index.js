import React, {Component} from 'react'
import NavButton from '../../components/navButton/navButton'
import Article from '../../components/Article/Article'
import DFP from '../../components/DFP/DFP'

import Footer from '../../components/footer/footer'

const imgs = [
	{
		href: 'http://www.imagen.com.mx/',
		position: '2px 63.6%',
		height: '32px',
		width: '87px'	
	},
	{
		position: '12px 26.6%',
		height: '30px',
		width: '80px'
	},
	{
		href:'http://cdn.imagendigital.com/resources/bottom/images/sello_victoria.png',
		position: '12px 26.6%',
		height: '24px',
		width: '50px'
	},

]

class Home extends Component{
	render() {
		return (
			<div className="container">
				<NavButton listas={['LO ÚLTIMO', 'LO MAS VISTO']}/>
				<DFP/>
				<Article/>
				<DFP/>
				<Article/>
				<Article/>
				<Article/>
				<Article/>
				<Article/>
				<Footer imgs={imgs}/>
			</div>
		)
	}
}

export default Home

