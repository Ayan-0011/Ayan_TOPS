/*

Lifecycle of Components
Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.

The three phases are: 

Mounting,   => componentDidMount() => The componentDidMount() method is called after the component is rendered.
Updating => componentDidUpdate() => The componentDidUpdate method is called after the component is updated in the DOM. 
Unmounting => componentWillUnmount() => The componentWillUnmount method is called when the component is about to be removed from the DOM.


*/

import React, { Component } from 'react'
import Life_img from './Life_img';

export class Life_class extends Component {
    constructor() {
        super();
        this.state = {
            number: 1,
            isImage: false
        }
    }
    // Component Update 
    componentDidUpdate() {
        console.log('Main Component Updating (update)');
    }

    render() {
        return (
            <div>

                <button onClick={() => this.setState({ number: this.state.number + 1 })}>+</button>
                <h1>{this.state.number}</h1>
                <button onClick={() => this.setState({ number: this.state.number - 1 })}>-</button>

                <hr />


                <button className='btn btn-primary' onClick={() => this.setState({ isImage: false })}>Hide</button>
                <button className='btn btn-primary' onClick={() => this.setState({ isImage: true })}>Show</button>
                <button className='btn btn-primary' onClick={() => this.setState({ isImage: !this.state.isImage })}>Hide/Show</button>
                {
                    this.state.isImage ? <Life_img /> : null
                }
            </div>
        )
    }
}

export default Life_class