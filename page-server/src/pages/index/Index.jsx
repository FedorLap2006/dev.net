import React,{Component} from 'react';
// import Test from 'components/Test';
import {Link} from 'react-router-dom';


class Index extends Component {
    render() {
        return (
            <div>
                <div>hello</div>
                <Link to="/hello">to hello</Link>
            </div>
        );
    }
}

export default Index;