import React, { useState } from 'react'
import './Header.css'
import Avatar from '@mui/material/Avatar';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { Drawer } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { MenuDropdown } from '../Dashboard/AppDropdown';

const Header = () => {

    const [open, setOpen] = useState(false);

    const [anchorEl, setAnchorEl] = useState(null);
    const openA = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [openAvatar,setOpenAvatar] = useState(false);
    // Menu : DropdownMenu
    const [openMenu,setOpenMenu] = useState(false);
  // Menu : DropdownMenu
    return (
        <div className="HeaderContainer">
            <div className="sectionA">

                <div className="Logo">
                    <img src="http://admin-templates.websitedesignmarketingagency.com/soft-material-admin/images/logo-light.png" alt="" />
                    <img src="http://admin-templates.websitedesignmarketingagency.com/soft-material-admin/images/logo-light-text.png" alt="" />
                </div>
                <div className="Menu" onClick={()=>{setOpenMenu(!openMenu)}}>
                    <span>
                        <i class="fas fa-th-large" style={{ color: "#ffffff" }}></i>
                        <i class="fas fa-caret-down" style={{ color: "#ffffff" }}></i>
                    </span>
                    <div className={`OpenMenu ${openMenu? 'active' : 'inactive'}`}>
                    <MenuDropdown />
                    </div>
                </div>
            </div>

            <div className="sectionB">
                <div className="SearchIcon">
                    <i class="fas fa-search"></i>
                </div>
                <div className="SocialMediaIcon">
                    <ul>
                        <li>
                            <div className='beat'>
                                <i className="fas fa-envelope fa-lg shake" id="Shake" ></i>
                            </div>
                        </li>
                        <li>
                            <div className='beatB' id='Bell'>
                                <i class="fas fa-bell fa-lg"></i>
                            </div>
                        </li>
                        <li>
                            <div className='beatC' id='ShakeB'>
                                <ChatBubbleIcon />
                            </div>
                        </li>
                        <li>
                            <div className="Avatar" onClick={()=>{setOpenAvatar(!openAvatar)}}>
                                <Avatar id="demo-positioned-button"
                                    aria-controls={openA ? 'demo-positioned-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={openA ? 'true' : undefined}
                                    onClick={handleClick}
                                    alt="Remy Sharp" src="http://admin-templates.websitedesignmarketingagency.com/soft-material-admin/images/user5-128x128.jpg" />
                                <Menu
                                    
                                    id="demo-positioned-menu"
                                    aria-labelledby="demo-positioned-button"
                                    anchorEl={anchorEl}
                                    open={openA}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    onClick={handleClose} className={`OpenAvatar ${openAvatar? 'active' : 'inactive'}`}
                                >
                                    <MenuItem >
                                        <div className="Profile" style={{borderBottom:"2px solid #d2d6de",paddingBottom:"15px"}}>
                                            <div className="Image">
                                            <img src="http://admin-templates.websitedesignmarketingagency.com/soft-material-admin/images/user5-128x128.jpg" alt="" />
                                            </div>
                                            <div className="ProfileDetails">
                                                <span style={{color:"#67757c",fontSize:"22px"}}>Juliya Brus</span>
                                                <span style={{color:"#67757c",fontSize:"14px"}}>jb@gmail.com</span>
                                                <span className="ViewProfile">View Profile</span>
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <div className="SocialIcons" style={{borderBottom:"2px solid #d2d6de",paddingBottom:"15px"}}>
                                            <ul>
                                                <li>
                                                <ion-icon name="person"></ion-icon>
                                                    <span>My Profile</span>
                                                </li>
                                                <li>
                                                <ion-icon name="mail"></ion-icon>
                                                    <span>Inbox</span>
                                                </li>
                                                <li>
                                                <ion-icon name="hammer"></ion-icon>
                                                    <span>Setting</span>
                                                </li>
                                                <li>
                                                <ion-icon name="settings"></ion-icon>
                                                <span>Account Setting</span>
                                                </li>
                                                <li>
                                                <ion-icon name="power"></ion-icon>
                                                <span>Logout</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </MenuItem>
                                    {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
                                </Menu>
                            </div>
                        </li>
                        <li>
                            <div onClick={() => setOpen(true)} >
                                <i class="fas fa-cog fa-lg" id="ring" ></i>
                            </div>
                            <Drawer variant='presentation' anchor='right' open={open} onClose={() => setOpen(false)}>
                                <div className="Sidebar" style={{ width: "250px", zIndex: "100", boxShadow: "none" }}>
                                    <div className="Sid">
                                        <div><i class="fa fa-wrench"></i></div>
                                        <div><i class="fa fa-home"></i></div>
                                        <div><i class="fas fa-cog " id="ring2"></i></div>
                                    </div>
                                    <div className="SideContent">
                                        <div className="Layout">Layout Options</div>
                                        <div className="Check">
                                            <input type="checkbox" />
                                            <span>Toggle Right Sidebar Skin</span>
                                        </div>
                                        <div className="Skins" >
                                            <span style={{ color: "#455a64" }}>Skin</span>
                                            <div style={{ paddingTop: "50px" }}>
                                                <div style={{ display: "flex", alignItems: "end" }}>
                                                    <span style={{ width: "100%", backgroundColor: "#2196F3", height: "75%", bottom: "0" }}></span>
                                                </div>
                                                <div style={{ display: "flex", alignItems: "end" }}>
                                                    <span style={{ width: "100%", backgroundColor: "#f4f6f9", height: "75%", bottom: "0" }}></span>
                                                </div>
                                                <div style={{ display: "flex", alignItems: "end" }}>
                                                    <span style={{ width: "100%", backgroundColor: "#9C27B0", height: "75%", bottom: "0" }}></span>
                                                </div>

                                                <div style={{ display: "flex", alignItems: "end" }}>
                                                    <span style={{ width: "100%", backgroundColor: "#28D094", height: "75%", bottom: "0" }}></span>
                                                </div>

                                                <div style={{ display: "flex", alignItems: "end" }}>
                                                    <span style={{ width: "100%", backgroundColor: "#ff002e", height: "75%", bottom: "0" }}></span>
                                                </div>

                                                <div style={{ display: "flex", alignItems: "end" }}>
                                                    <span style={{ width: "100%", backgroundColor: "#FFEB3B", height: "75%", bottom: "0" }}></span>
                                                </div>

                                                <div style={{ display: "flex", alignItems: "end" }}>
                                                    <span style={{ width: "100%", backgroundColor: "#2196F3", height: "75%", bottom: "0" }}></span>
                                                </div>

                                                <div style={{ display: "flex", alignItems: "end" }}>
                                                    <span style={{ width: "100%", backgroundColor: "#2A3E52", height: "75%", bottom: "0" }}></span>
                                                </div>

                                                <div style={{ display: "flex", alignItems: "end" }}>
                                                    <span style={{ width: "100%", backgroundColor: "#9C27B0", height: "75%", bottom: "0" }}></span>
                                                </div>

                                                <div style={{ display: "flex", alignItems: "end" }}>
                                                    <span style={{ width: "100%", backgroundColor: "#28D094", height: "75%", bottom: "0" }}></span>
                                                </div>

                                                <div style={{ display: "flex", alignItems: "end" }}>
                                                    <span style={{ width: "100%", backgroundColor: "#ff002e", height: "75%", bottom: "0" }}></span>
                                                </div>

                                                <div style={{ display: "flex", alignItems: "end" }}>
                                                    <span style={{ width: "100%", backgroundColor: "#FFEB3B", height: "75%", bottom: "0" }}></span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </Drawer>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
