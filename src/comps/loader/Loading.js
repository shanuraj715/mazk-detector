import React, { Component } from 'react'
import './loading.css'

export default class Loading extends Component {
    render() {
        return (
            <div className="loader-container">
                <div className="loader">
                    {/* <div className="face face1">
                        <div className="circle"></div>
                    </div> */}
                    <div className="face face2">
                        <div className="circle"></div>
                    </div>
                    <span className="loading-text">Initialzing...</span>
                </div>
                <p className="loading-text-p">It may take a while, depends on your internet connection.<br />Please Wait...</p>
            </div>
            
        )
    }
}
