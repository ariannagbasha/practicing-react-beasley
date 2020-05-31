import React, {Component} from 'react'
import './AlbumTitle.css'

class AlbumTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reveal: false,
        }
    } 
    handleReveal = event => {
        this.setState({reveal: true}) 
    }

    
    render() {
    return(
        <h1 className="AlbumTitle">
            <button onClick={this.handleReveal}>Reveal Album Title</button>
            { this.state.reveal ? <span>Night of the Salamander</span> : null}
        </h1>
    )
    }
}
export default AlbumTitle