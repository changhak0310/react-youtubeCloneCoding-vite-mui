import React from "react";
import { Box, AppBar, Toolbar, TextField, InputAdornment, Avatar, IconButton, Badge } from '@mui/material'
import KeyboardIcon from '@mui/icons-material/Keyboard';
import Search from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

const drawerWidth = 240;

const style = {
    appbarStyle : {
        //width: `calc(100% - ${drawerWidth}px)`
        width: "100%"
    }
}

export default function HeaderModule() {
    return(
        <AppBar 
            position="static" 
            color="transparent" 
            elevation={1}
            sx={style.appbarStyle}
            >
            <Toolbar>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        maxWidth: 'lg',
                        width: '100%',
                        mx: 'auto'
                    }}>
                    {/* left */}
                    <Box sx={{
                        display: 'flex',
                    }}>
                        <IconButton
                            sx={{size: 40}}>
                            <MenuRoundedIcon sx={{size: 24}}/>
                        </IconButton>
                        <img
                            alt="logo"
                            style={{
                                width: "90px",
                                height: "20px",
                                //padding: "18px 14px 18px 16px",
                                display: "inline-flex",
                                alignItems: "center",
                            }}
                            src="src/asset/image/youtubeLogo.png"/>
                    </Box>

                    {/* middle */}
                    <Box sx={{
                            display: 'flex'
                    }}>
                        <TextField
                            id="input-with-icon-textfield"
                            placeholder="검색"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <KeyboardIcon/>
                                    </InputAdornment>
                                )
                            }}
                            size="small"/>
                            <Box>
                                <IconButton>
                                    <Search/>
                                </IconButton>
                                <IconButton>
                                    <MicIcon/>
                                </IconButton>
                            </Box>
                    </Box>

                    {/* right */}
                    <Box 
                        sx={{
                            display: 'flex'
                    }}>
                        <IconButton>
                            <VideoCallOutlinedIcon/>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={999} color="error">
                                <NotificationsNoneOutlinedIcon/>
                            </Badge>
                        </IconButton>
                        <Avatar
                            alt="profile_img"
                            src="https://yt3.ggpht.com/ytc/AMLnZu_by4FzKB941ir0rtvQbKPhpBWIu0JyqsfBgLnCmh6dlg=s88-c-k-c0x00ffffff-no-rj-mo"
                        />
                    </Box>

                </Box>
            </Toolbar>
        </AppBar>
    );
}