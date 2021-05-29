import React, { Component } from 'react'
import './Err404.css'
import img from './errimg.svg'
import { Link } from 'react-router-dom'

export default class Err404 extends Component {

    componentDidMount(){
        if( typeof this.props.pageData === 'function' ){
            this.props.pageData({
                title: "Error 404 - Page Not Found",
                name: "Page Not Found"
            })
        }
    }

    render() {
        return (
            <div className="db-err404-container">
                <div className="db-err404-header" style={{'color': 'white'}}>
                    <span>Ohh</span>
                </div>
                <div className="db-err404-content">
                    <img src={ img } alt="" />
                    <p><span className="red fs-26">Ohh.....</span> You Requested the page that is no longer There.</p>
                    <Link to="/">
                        <button className="btn btn-secondary px-4">Home</button>
                    </Link>
                </div>
            </div>
        )
    }
}
