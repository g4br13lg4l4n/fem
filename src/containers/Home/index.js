import React, {Component} from 'react'
import NavButton from '../../components/navButton/navButton'
import Article from '../../components/Article/Article'
import DFP from '../../components/DFP/DFP'
import HeadSection from '../../components/HeadSection/HeadSection'
import HeadNav from '../../components/HeadNav/HeadNav'

import Footer from '../../components/footer/footer'

const imgs = [
	{
		href: 'http://www.imagen.com.mx/',
		position: '2px 63.6%',
		height: '32px',
		width: '87px'	
	},
	{
		position: '40% 63.6%',
		height: '30px',
		width: '100px'
	}
]

class Home extends Component{
	render() {
		return (
			<div className="container">
				<HeadNav/>
				<NavButton listas={['LO ÚLTIMO', 'LO MAS VISTO']}/>
				<DFP/>
				<HeadSection/>
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

