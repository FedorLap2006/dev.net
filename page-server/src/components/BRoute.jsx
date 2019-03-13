import React,{Component} from 'react';
import { Link,Router,Route} from 'react-router-dom';

function BRoute(props) {
    const {exact=false,path,component} = props;

    if (exact) {
        return (
            <Route exact path={path} component={component}/>
        );
    } else {
        return (
            <Route path={path} component={component}/>
        );
    }
};

export default BRoute;