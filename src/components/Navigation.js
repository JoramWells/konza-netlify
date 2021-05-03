import React from 'react'
import {Menu} from 'antd'
import {Link} from 'react-router-dom'

const {SubMenu} = Menu

export default function Navigation() {
    return (
        <Menu mode="horizontal">
            <Menu.Item>
                <Link to="/">
                Home
                </Link>
                
            </Menu.Item>
            <SubMenu title="Services" >
            <Menu.Item style={{margin:"0"}}>
                <Link to="/traffic">
                Traffic
                </Link>
            </Menu.Item>
            <Menu.Item style={{margin:"0"}}>
                Packing
            </Menu.Item> 
            <Menu.Item style={{margin:"0"}}>
                Track
            </Menu.Item>
            </SubMenu>
            <SubMenu title="Help">
                <Menu.Item style={{margin:"0"}}>
                    Create account
                </Menu.Item>
                <Menu.Item style={{margin:"0"}}>
                    Contact us
                </Menu.Item>
            </SubMenu>


            <Menu.Item>
                Login
            </Menu.Item>
            
        </Menu>
    )
}
