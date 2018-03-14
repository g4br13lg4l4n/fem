import React, {Component} from 'react'
import NavButton from '../../components/navButton/navButton'

class Home extends Component{
	render() {
		return (
			<div className="content">
				<NavButton listas={['item1', 'item2']}/>
			</div>
	)
	}
}

export default Home

