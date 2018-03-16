import React, {Component} from 'react'
import DFP from '../../components/DFP/DFP'
import HeadSection from '../../components/HeadSection/HeadSection'

import NavButton from '../../components/navButton/navButton'
import Article from '../../components/Article/Article'
import Footer from '../../components/footer/footer'

import axios from 'axios'

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
		data : []
	}

	componentDidMount () {

		axios.get('http://localhost:5000/api')
			.then( response => {
				this.setState( prevState => {
					return {
						data : prevState.data = [...response.data.data]					}
				})
			})
	}

	render() {

		console.log(this.state.data)

		let Articles = this.state.data.map( (articulo, i) => {
			return <Article 
				key={i} 
				title={articulo.title}
				summary={articulo.summary}
				img={articulo.images.principal[0].url}/> 
		})

		return (
			<div className="container">
				<NavButton listas={['LO ÚLTIMO', 'LO MAS VISTO']}/>
				<DFP/>
				<HeadSection/>
				{Articles}
				<DFP/>
				<Footer imgs={imgs}/>
			</div>
		)
	}
}

export default Home

