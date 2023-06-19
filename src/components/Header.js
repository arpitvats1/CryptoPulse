import React from 'react'
import { AppBar, Container, MenuItem, Select, ThemeProvider, Toolbar, Typography, createTheme, makeStyles } from '@material-ui/core'
import { useNavigate } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';
import AuthModal from './Authentication/AuthModal';
import UserSidebari from './Authentication/UserSidebari';


const useStyles=makeStyles(()=> ({
    title:{
        flex: 1,
        color: "gold",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        cursor: "pointer",
    }
}))

const Header = () => {

    const classes=useStyles();
    const history=useNavigate();
    const { currency, setCurrency,user }= CryptoState()

    console.log(currency);
    const darktheme=createTheme({
        palette:{
            primary:{
                main:"#fff",
            },
            type:"dark",
        },
    });

  return (
    <ThemeProvider theme={darktheme}>
    <AppBar color='transparent' position='static'>
        <Container>
            <Toolbar>
                <Typography onClick={()=> history("/")} className={classes.title}
                variant='h6'>
                    CryptoPulse
                </Typography>
                <Select variant="outlined" style={{ width: 100, height: 40, marginRight: 15 }}
                value={currency}
                onChange={(e)=> setCurrency(e.target.value)}>
                    <MenuItem value={"USD"}>USD</MenuItem>
                    <MenuItem value={"INR"}>INR</MenuItem>
                </Select>

                {user ? <UserSidebari /> :<AuthModal />}
            </Toolbar>
        </Container>
    </AppBar>
    </ThemeProvider>
  )
}

export default Header
