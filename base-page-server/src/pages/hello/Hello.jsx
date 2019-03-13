import React,{Component} from 'react';
// import Test from 'components/Test';
import {Link} from 'react-router-dom';
import './style.css';


class Hello extends Component {
    render() {
        return (
            <div>
                <Link to="/">to index</Link>
            </div>
        );
    }
}

export default Hello;