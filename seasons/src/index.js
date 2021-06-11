import React from 'react';
import ReactDOM from 'react-dom';
import SeasonsDisplay from './SeasonsDisplayed';
import "semantic-ui-css/semantic.min.css";

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = { lat: null, errorMessage: '' };
    }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            (err) => this.setState({ errorMessage: err.message }) 
        );
    }
    
    render() {
            if (this.state.errorMessage && !this.state.lat) {
                return <div>Error: {this.state.errorMessage}</div>
            }

            if (!this.state.errorMessage && this.state.lat) {
                return <SeasonsDisplay lat={this.state.lat} />
            }
            
            return <div>Loading...</div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))