import  React,{ Component } from 'react';
import Index from './pages/index/Index.jsx';
import { BrowserRouter,Link,Router,Route} from 'react-router-dom';
import BRoute from './components/BRoute';
import Hello from './pages/hello/Hello.jsx';

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <BRoute exact path="/" component={Index}/>
                        <BRoute exact path="/hello" component={Hello}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
export default App;