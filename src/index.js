import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';
import App from './App';
import axios from 'axios';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
/*
Paso 2
Usa fake data Ej: `state = { colores = [ "#123456", "#123456", "#123456" ] }` 
*/
class Repaso extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			colors: ["#778AA3", "#872093", "#2EEE44"]
			/*
			Para Hardcoded añado más cards
			*/
		}
	}
/*
Paso 3
Conecta tu aplicación a hexbot, puedes usar `axios` o `fetch`.
Ej: `axios.get("http://api.noopschallenge.com/hexbot")`  
*/
	componentWillMount(){
		axios.get(`http://api.noopschallenge.com/hexbot?count=1`)
	      .then(res => {
	        const data = res.data.colors;
	        this.setState({colors: data});
	        console.log(data);
	      });
	}

	render(){
		return(
			<div id="main">
				<div id="content">
						<h1>Lucky Color ;)</h1>
					{this.state.colors.map((color, key)=> <Card key={key} num={key} color={color.value} />)}

					

				</div>
			</div>

		);
	}
}

class Card extends React.Component{
	render(){
		return(
			<div className="card" style={{background: this.props.color}}>	
			</div>
		);
	}
}

ReactDOM.render(
	<Repaso />,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();