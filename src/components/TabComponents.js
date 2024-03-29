import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabDoor from './tabs_nav/TabDoor';
import TabPrice from './tabs_nav/TabPrice';
import TabDevices from './tabs_nav/TabDevices';
import '../css/TabNav.css';
import TabContentOne from './TabContentOne';
import TabContentTwo from "./TabContentTwo";

class TabComponents extends Component {

    state ={
        tabIndex:0
    }
    render() {
        return (
            <div>
                <Tabs className ='tabs' selectedIndex ={this.state.tabIndex}
                onSelect={tabIndex => this.setState({tabIndex})}>
                    <TabList className='tab-nav-container'>
                        <Tab className = {`${this.state.tabIndex === 0 ? 'tab-selected active' : null}`}>
                            <TabDoor /> <p><strong>About VOID</strong></p>
                        </Tab>
                        <Tab className = {`${this.state.tabIndex === 1 ? 'tab-selected active' : null}`}>
                            <TabDevices /><p style = {{marginTop:'-5.3125rem'}}><strong>What We Done</strong></p>
                        </Tab>
                        <Tab className = {`${this.state.tabIndex === 2  ? 'tab-selected active' : null}`}>
                            <TabPrice /> <p><strong>Contact Us</strong></p>
                        </Tab>
                        
                    </TabList>

                    {/* Tabs Content */}

                    <TabPanel>
                        <TabContentOne />

                    </TabPanel>

                    <TabPanel>
                        <TabContentTwo />

                    </TabPanel>
                </Tabs>
                
            </div>
        )
    }
}

export default TabComponents ;
