import React, {Component, PropTypes} from 'react';

export default class ListView extends React.Component {

	static propTypes = {

		users: PropTypes.arrayOf(PropTypes.shape ({

		name: PropTypes.string.isRequired,
		photo: PropTypes.string.isRequired

		})),

		onSelect: PropTypes.func//.isRequired

	}

getUser(user){
	return <li key={user.name} onClick={() => this.props.onSelect(user)}> 
			<img src={user.photo}/>
			{user.name}
			</li>
}


render(){
	let { users } = this.props;

	return (

		<div className ="list-view-wrapper">
			<div className="LV-header">
				<p>ARTISTS CONTACTS</p>
			</div>

			<ul className="LV-username">
			
			{ users.map(this.getUser.bind(this))}
			</ul>

		</div>

		)

	}

}





