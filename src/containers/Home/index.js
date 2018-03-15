import React, {Component} from 'react'
import DFP from '../../components/DFP/DFP'
import HeadSection from '../../components/HeadSection/HeadSection'

import NavButton from '../../components/navButton/navButton'
import Article from '../../components/Article/Article'
import Footer from '../../components/footer/footer'

import Axios from '../../components/helpers/getData'

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

	state = {
		data : null
	}

	componentDidMount () {
		this.setState( prevState => {

			return {
				data : prevState.data = Axios.getData()
			}


		})
	}

	render() {
		return (
			<div className="container">
				<NavButton listas={['LO ÚLTIMO', 'LO MAS VISTO']}/>
				<DFP/>
				<HeadSection/>
				<Article/>
				<Article/>
				<Article/>
				<DFP/>
				<Article/>
				<Article/>
				<Article/>
				<DFP/>
				<Article/>
				<Article/>
				<Article/>
				<DFP/>
				<Footer imgs={imgs}/>
			</div>
		)
	}
}

export default Home

