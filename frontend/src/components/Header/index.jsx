import { IconButton } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CodeIcon from "@material-ui/icons/Code";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Register from "../../features/Auth/components/Register";
import "./styles.scss";
import CloseIcon from '@material-ui/icons/Close';
import Login from "../../features/Auth/components/Login";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: "none",
    color: "#fff",
  },
  
  closeButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: theme.palette.grey[500],
    zIndex: 1
  }
}));

export default function Header() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <CodeIcon className={classes.menuButton} />

          <Typography variant="h6" className={classes.title}>
            <Link className={classes.link} to="/">
              Instagram
            </Link>
          </Typography>

          <NavLink className={classes.link} to="/login">
            <Button color="inherit">Đăng nhập</Button>
          </NavLink>

          <NavLink className={classes.link} to="/signup">
            <Button color="inherit" onClick={handleClickOpen}>
              Đăng ký
            </Button>
          </NavLink>

          <NavLink className={classes.link} to="/profile">
            <Button color="inherit">Profile</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        disableBackdropClick
        disableEscapeKeyDown
      >

        <IconButton className={classes.closeButton} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
        <DialogContent>
          {/* <Register closeDialog={handleClose} /> */}
          <Login closeDialog={handleClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
