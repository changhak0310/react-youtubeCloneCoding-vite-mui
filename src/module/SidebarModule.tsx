import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { Drawer, DrawerProps, Typography, List, ListProps, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { alpha, styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';

const drawerWidth = 240;

const SidebarDraw = styled(Drawer)<DrawerProps>(({ theme }) => ({
    '& .MuiPaper-root': {
       width: drawerWidth,
       backgroundColor: "#f9f9f9",
       position: "static",
      },
  }));

const ListPapper = styled(List)<ListProps>(({ theme }) => ({
    '& .selected': {
        backgroundColor: "#ff212140"
      },
  }));

export default function SidebarModule () {
    //const { classes } = useStyle;
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        {
            text: '홈',
            icon: <HomeOutlinedIcon/>,
            selectIcon: <HomeIcon/>,
            path: '/'
        },
        {
            text: 'Shorts',
            icon: <SubscriptionsOutlinedIcon/>,
            selectIcon: <SubscriptionsIcon/>,
            path: '/1'
        },
        {
            text: '구독',
            icon: <SmartDisplayOutlinedIcon/>,
            selectIcon: <SmartDisplayIcon/>,
            path: '/1'
        },
    ]

    return(
        <SidebarDraw
            variant="permanent"
            anchor="left"
            >
            <div>
                <Typography variant="h5">
                    Hello
                </Typography>
            </div>

            <ListPapper>
                {
                
                menuItems.map(item => {
                    if(location.pathname == item.path) {
                        return(
                        <ListItemButton
                            key={item.text}
                            className="selected"
                            onClick={()=>{
                                navigate(item.path)
                            }}
                        >
                            <ListItemIcon>{item.selectIcon}</ListItemIcon>  
                            <ListItemText primary={item.text}/>
                        </ListItemButton>
                        )
                    } else {
                        return (
                        <ListItemButton
                            key={item.text}
                            onClick={()=>{
                                navigate(item.path)
                            }}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>  
                            <ListItemText primary={item.text}/>
                        </ListItemButton>
                        )
                    }
                })}
            </ListPapper>
        </SidebarDraw>
    )
}
