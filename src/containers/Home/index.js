import React, {Component} from 'react'
import NavButton from '../../components/navButton/navButton'

class Home extends Component{
	render() {
		return (
			
			<div className="content">
				<NavButton listas={['LO ÚLTIMO', 'LO MAS VISTO']}/>
			</div>
	)
	}
}

export default Home

