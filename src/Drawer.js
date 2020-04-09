import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LabelImportantRounded from "@material-ui/icons/Mail";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
const detectMob = () => {
  return window.innerWidth <= 800 && window.innerHeight <= 600;
};
console.log(detectMob());
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
}));

export default function DrawerLeft(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={props.open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <List>
          <ListItem>
            <AvatarGroup max={5}>
              {props.onlineUsers.map(ele => {
                return (
                  <Avatar style={{ backgroundColor: ele.color }}>
                    {ele.name[0]}
                  </Avatar>
                );
              })}
            </AvatarGroup>
          </ListItem>
        </List>
        <Divider />
        <List>
          {props.data.map((ele, pindex) => {
            return (
              <ListItem
                onClick={() => {
                  props.handleDrawerClick(pindex);
                }}
                button
                key={pindex}
              >
                <ListItemIcon>
                  <LabelImportantRounded />
                </ListItemIcon>
                <ListItemText primary={ele.data[0].value.slice(0, 13)} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </div>
  );
}
