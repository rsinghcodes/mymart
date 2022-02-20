import {
  Collapse,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  Chip,
} from '@material-ui/core';
import React from 'react';
import {
  ExpandLess,
  ExpandMore,
  ExitToApp,
  ChevronLeft,
  ChevronRight,
  Category,
  Person,
  LocalMall,
  Security,
  LocalShipping,
} from '@material-ui/icons';

import useStyles from './Drawer.styles';
import { Link } from 'react-router-dom';

const DrawerItems = ({
  setDrawerOpen,
  handleClick,
  currentUser,
  categories,
  handleSignoutbtn,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <>
      <div className={classes.drawerHeader}>
        <IconButton onClick={() => setDrawerOpen(false)}>
          {theme.direction === 'rtl' ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
        <Chip
          icon={<Person />}
          color="primary"
          label={currentUser ? currentUser.displayName : 'Guest User'}
        />
      </div>
      <Divider />
      <List disablePadding className={classes.drawer}>
        <ListItem button onClick={handleOpen}>
          <ListItemIcon>
            <Category />
          </ListItemIcon>
          <ListItemText primary="Categories" />
          <ListItemIcon>{open ? <ExpandLess /> : <ExpandMore />}</ListItemIcon>
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {categories.map(({ title, id, linkUrl, match }) => {
              return (
                <ListItem
                  button
                  className={classes.nested}
                  key={id}
                  component={Link}
                  to={`/${linkUrl}`}
                  onClick={handleClick}
                >
                  <ListItemText primary={title} />
                </ListItem>
              );
            })}
          </List>
        </Collapse>
        <ListItem
          button
          component={Link}
          to="/shop"
          onClick={() => setDrawerOpen(false)}
        >
          <ListItemIcon>
            <LocalMall />
          </ListItemIcon>
          <ListItemText primary="Shop" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/orders"
          onClick={() => setDrawerOpen(false)}
        >
          <ListItemIcon>
            <LocalShipping />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItem>
        {currentUser ? (
          <ListItem button onClick={handleSignoutbtn}>
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText primary="Sign Out" />
          </ListItem>
        ) : (
          <ListItem
            button
            component={Link}
            to="/sign-in"
            onClick={() => setDrawerOpen(false)}
          >
            <ListItemIcon>
              <Security />
            </ListItemIcon>
            <ListItemText primary="Sign-in" />
          </ListItem>
        )}
      </List>
    </>
  );
};

export default DrawerItems;
