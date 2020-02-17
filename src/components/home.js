import React from 'react';
import { withRouter} from 'react-router-dom';
import List from './list';

const title = "Todo list"
class Home extends React.Component {
    render() {
        return (
            <div>
                <h2>{title}</h2>
                <List name="list_one" />
            </div>
        );
    }
}

export default withRouter(Home);
