import React from 'react'
import './AppDD.css'

function AppDropdown() {
    return (
        <div className="AppMenu">
            <div>Chat App</div>
            <div>Contact / Employee</div>
            <div>Support Ticket</div>
            <div>Calendar</div>
            <div>Profile</div>
            <div>Userlist Grid</div>
            <div>Userlist</div>
            <div>Emails</div>
        </div>
    )
}

function MenuDropdown() {
    return (
        <div className="MenuDd">
            <div className="MenuCategory">
                <ul>
                    <li className="Head">Apps</li>
                    <li>Support Ticket</li>
                    <li>Chat App</li>
                    <li>Profile App</li>
                    <li>Calendar App</li>
                </ul>
                <ul>
                    <li className="Head">Widgets</li>
                    <li>Weather Widgets</li>
                    <li>Blog Widgets</li>
                    <li>Chart Wigets</li>
                    <li>Social Widgets</li>
                </ul>
                <ul>
                    <li className="Head">Charts</li>
                    <li>ChartJs</li>
                    <li>Flot Charts</li>
                    <li>Morris Charts</li>
                    <li>Inline Charts</li>
                </ul>
                <ul>

                    <li className="Head">Extra Pages</li>
                    <li>Invoice</li>
                    <li>Login</li>
                    <li>404</li>
                    <li>Maintanance</li>
                </ul>
            </div>

        </div>
    )
}

function MonthlyDropd() {
    return (
        <div className="MonthlyDropd">
            <ul>
                <li>
                    <i class="fas fa-list-alt" style={{color: "#a0a6b1"}}></i>
                    <span id="One" className="Name" style={{color: "#a0a6b1",fontWeight:"300"}}>Details</span>
                </li>
                <li>
                <ion-icon name="add-outline" style={{color: "#a0a6b1"}}></ion-icon>
                    <span className="Name" style={{color: "#a0a6b1",fontWeight:"300"}}>Add new</span>
                </li>
                <li>
                <ion-icon name="refresh-outline" style={{color: "#a0a6b1"}}></ion-icon>
                    <span className="Name" style={{color: "#a0a6b1",fontWeight:"300"}}>Refresh</span>
                </li>
            </ul>
        </div>
    )
}

function MonthlyDropdTwo() {
    return (
        <div className="MonthlyDropdTwo">
            <ul>
                <li>
                    <i class="fas fa-list-alt" style={{color: "#a0a6b1"}}></i>
                    <span id="One" className="Name" style={{color: "#a0a6b1",fontWeight:"300"}}>Details</span>
                </li>
                <li>
                <ion-icon name="add-outline" style={{color: "#a0a6b1"}}></ion-icon>
                    <span className="Name" style={{color: "#a0a6b1",fontWeight:"300"}}>Add new</span>
                </li>
                <li>
                <ion-icon name="refresh-outline" style={{color: "#a0a6b1"}}></ion-icon>
                    <span className="Name" style={{color: "#a0a6b1",fontWeight:"300"}}>Refresh</span>
                </li>
            </ul>
        </div>
    )
}

function MonthlyDropdThree() {
    return (
        <div className="MonthlyDropdThree">
            <ul>
                <li>
                    <i class="fas fa-list-alt" style={{color: "#a0a6b1"}}></i>
                    <span id="One" className="Name" style={{color: "#a0a6b1",fontWeight:"300"}}>Details</span>
                </li>
                <li>
                <ion-icon name="add-outline" style={{color: "#a0a6b1"}}></ion-icon>
                    <span className="Name" style={{color: "#a0a6b1",fontWeight:"300"}}>Add new</span>
                </li>
                <li>
                <ion-icon name="refresh-outline" style={{color: "#a0a6b1"}}></ion-icon>
                    <span className="Name" style={{color: "#a0a6b1",fontWeight:"300"}}>Refresh</span>
                </li>
            </ul>
        </div>
    )
}

function MonthlyDropdFour() {
    return (
        <div className="MonthlyDropdFour">
            <ul>
                <li>
                    <i class="fas fa-list-alt" style={{color: "#a0a6b1"}}></i>
                    <span id="One" className="Name" style={{color: "#a0a6b1",fontWeight:"300"}}>Details</span>
                </li>
                <li>
                <ion-icon name="add-outline" style={{color: "#a0a6b1"}}></ion-icon>
                    <span className="Name" style={{color: "#a0a6b1",fontWeight:"300"}}>Add new</span>
                </li>
                <li>
                <ion-icon name="refresh-outline" style={{color: "#a0a6b1"}}></ion-icon>
                    <span className="Name" style={{color: "#a0a6b1",fontWeight:"300"}}>Refresh</span>
                </li>
            </ul>
        </div>
    )
}
export { AppDropdown, MenuDropdown, MonthlyDropd , MonthlyDropdTwo , MonthlyDropdThree , MonthlyDropdFour}