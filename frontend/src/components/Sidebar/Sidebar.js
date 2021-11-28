import React, { Component } from 'react'
import './Sidebar.css'

export class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="logo-content">
                    <div className="logo">
                        <i className="bx bxl-c-plus-plus"></i>
                        <div className="logo-name">Market Sales</div>
                    </div>

                    <i className="bx bx-menu" id="btnmenu"></i>
                </div>

                <ul className="nav-list">
                    <li>
                        <a href="/">
                            <i className="bx bx-grid-alt"></i>
                            <span className="links-name">Dashboard</span>
                        </a>
                        {/* <span className="tooltip">Dashboard</span> */}
                    </li>
                    <li>
                        <a href="/">
                            <i className="bx bx-user"></i>
                            <span className="links-name">User</span>
                        </a>
                        {/* <span className="tooltip">Dashboard</span> */}
                    </li>
                </ul>

                {/* profile  content*/}
                <div className="profile-content">
                    <div className="profile">
                        <div className="profile-details">
                            <img src="user.png" alt="" />
                            <div className="name-job">
                                <div className="name">Gokhan Can</div>
                                <div className="job">Dev</div>
                            </div>
                        </div>

                        <i className="bx bx-log-out" id="log-out"></i>


                    </div>
                </div>

            </div>
        )
    }
}

export default Sidebar;
