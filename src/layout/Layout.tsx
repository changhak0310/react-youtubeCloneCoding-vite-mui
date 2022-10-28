import HeaderModule from "../module/HeaderModule";
import SidebarModule from "../module/SidebarModule";
import VideoModule from "../module/VideoModule";
import { Box } from '@mui/material'
import { alpha, styled } from '@mui/material/styles';

const LayoutBox = styled(Box)(({ theme }) => ({
    '& .MuiBox-root': {
       display: 'flex',
      },
  }));

type ContentProps = {
    conent: String
}

export default function Layout({conent} : ContentProps): React.ReactElement {

    function contentCheck(conent : String) {
        switch(conent){
            case 'Main': 
                return <VideoModule/>
        }
    }
    return(
        <LayoutBox 
            sx={{
                height: '100vh'
            }}>
            <HeaderModule/>
                <Box>
                    <SidebarModule/>
                    {contentCheck(conent)}
                </Box>
        </LayoutBox>
    );
}