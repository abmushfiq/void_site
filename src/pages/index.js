import React, { Component } from 'react';
import Header from '../components/Header';
import TabComponents from '../components/TabComponents';

class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <TabComponents />
            </div>
        )
    }
}

export default Main;
