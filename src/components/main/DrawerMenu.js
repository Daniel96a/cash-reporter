import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ThemeSwitch from './ThemeSwitch';
import { doLogout } from '../../redux/actions/auth'
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    logoutButton: {
        backgroundColor: theme.palette.primary.main,
        color: "white",
        textAlign: "center",
        margin: "auto",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: "calc(100vw - 250px)"
    }
}));

const DrawerMenu = props => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [side]: open });
    };
    const logout = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        props.doLogout()
        setState({ ...state, [side]: open });
    };

    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                <ListItem>
                    <ListItemText>Drawer Menu</ListItemText>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItemText style={{ textAlign: "center" }}>
                    Choose theme
                </ListItemText>
                <ListItem>
                    <ThemeSwitch />
                </ListItem>
                <Divider />

            </List>
            {props.isAuthenticated ? (
                <ListItem button className={classes.logoutButton} onClick={logout(side, false)} >
                    <ListItemText>Logout</ListItemText>
                </ListItem>

            ) : <Fragment />}
        </div>
    );
    return (
        <div style={{ position: "absolute" }}>
            <IconButton
                aria-controls="customized-menu"
                aria-haspopup="true"
                color="primary"
                onClick={toggleDrawer('left', true)}
            >
                <MenuIcon />
            </IconButton>
            <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                {sideList('left')}
            </Drawer>
        </div>
    );
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, { doLogout })(DrawerMenu);