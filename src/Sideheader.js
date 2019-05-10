import React, { Component } from 'react';
import './Sideheader.css';

class Sideheader extends Component {
    render() {
        return (
            <div className="right">
                <div className="headers">
                    <div className="input-area">
                    <input type="text" placeholder="Search movie" />
                    </div>
                    <select>
                    <option value="Trending" className="opt">Trending</option>
                    <option value="Latest" className="opt">Latest</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default Sideheader;