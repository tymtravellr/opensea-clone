import styled from "@emotion/styled";
import { Avatar } from "@mui/material";
import Box from "@mui/system/Box";

export const DrawerHeaderStyled = styled(Box)(({ theme }) => ({
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    borderTop: `1px solid ${theme.palette.border.dark}`,
    fontWeight: 600
}))

export const AvatarStyled = styled(Avatar)(({ theme }) => ({
    height: '30px',
    width: '30px',
    background: 'none',
    marginRight: '8px',
    color: theme.palette.mode === "light" ? "rgb(53,56,64)" :  "rgb(229,232,235)",
}))