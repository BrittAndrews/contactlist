import React from 'react';
import ReactDOM from 'react-dom';
import SingleView from './single-view';
import ListView from './list-view';
import Profile from './profile-constructor';
import myArtists from './profile-constructor';



function renderListView(){
ReactDOM.render(
	<ListView users={myArtists} onSelect={renderSingleView}/>
	, document.querySelector('.app')
	);	
}




function renderSingleView(user){
ReactDOM.render(
	<SingleView user={user} onBack={renderListView}/>
	, document.querySelector('.app')
	);
}

renderListView();









