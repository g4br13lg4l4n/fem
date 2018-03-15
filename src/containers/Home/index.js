import React, {Component} from 'react'
import NavButton from '../../components/navButton/navButton'
import Article from '../../components/Article/Article'
import DFP from '../../components/DFP/DFP'


class Home extends Component{
	render() {
		return (
			<div className="content">
				<NavButton listas={['item1', 'item2']}/>
				<DFP/>
				<Article/>
				<DFP/>
				<Article/>
				<Article/>
				<Article/>
				<Article/>
				<Article/>
			</div>
		)
	}
}

export default Home

