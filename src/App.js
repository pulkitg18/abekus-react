/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import EditIcon from "@material-ui/icons/Edit";
import HdrStrongIcon from "@material-ui/icons/HdrStrong";
import AssessmentIcon from "@material-ui/icons/Assessment";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import UpdateIcon from "@material-ui/icons/Update";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import React, { useEffect } from "react";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  makeStyles,
  Menu,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import SupervisorAccountOutlinedIcon from "@material-ui/icons/SupervisorAccountOutlined";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { auth } from "./firebase";
import Login from "./Login";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
const useStyles = makeStyles({
  root: {
    Width: 175,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
function App() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const accountStyle = { color: "#3572B0", marginRight: "10px" };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEl1, setAnchorEl1] = React.useState(null);

  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl1(null);
  };
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user is ", authUser);
      if (authUser) {
        //logged in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        //logged out
        dispatch(logout());
      }
    });
  }, [dispatch]);
  const onClickEvent = (e) => {
    handleClose1();
    auth.signOut();
  };
  return (
    <div className="app">
      {user ? (
        <>
          <header className="root Bar-root position-fixed color-primary layout_appbar appbar layout__appbarShift mui-fixed muiPaper-elevation  ">
            <div className="header">
              <div className="header__data">
                <div className="header__data__text">
                  <h2>Score: 0</h2>
                </div>
              </div>
              <div className="header__data">
                <div className="header__data__text">
                  <h2>Credits: 50</h2>
                </div>
              </div>
              <div className="header__data">
                <NotificationsIcon />
              </div>
              <div className="header__data">
                <Avatar src={user.photo} onClick={handleClick1} />

                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl1}
                  keepMounted
                  open={Boolean(anchorEl1)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose1}>
                    <PersonOutlineOutlinedIcon style={accountStyle} />
                    Profile
                  </MenuItem>
                  <MenuItem onClick={handleClose1}>
                    <LockOutlinedIcon style={accountStyle} />
                    Password
                  </MenuItem>
                  <MenuItem onClick={handleClose1}>
                    <SupervisorAccountOutlinedIcon style={accountStyle} />
                    Referals
                  </MenuItem>
                  <MenuItem onClick={onClickEvent}>
                    <ExitToAppIcon style={accountStyle} />
                    Logout
                  </MenuItem>
                </Menu>
              </div>
            </div>
          </header>
          <div className="sidebar position-fixed-left">
            <div className="sidebar__header">
              <img
                className="sidebar__img"
                src="data:image/png;base64,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"
                alt=""
              />
              <ArrowBackIosIcon className="sidebar__arrowLeft" />
            </div>

            <div className="sidebar__bottom">
              <div className="sidebar__bottom__domain">
                <a>
                  <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                    style={{ color: "white" }}
                  >
                    Comp. Science
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>
                      Electronics and Communication
                    </MenuItem>
                    <MenuItem onClick={handleClose}>Aptitude</MenuItem>
                    <MenuItem onClick={handleClose}>
                      Mechanical Engineering
                    </MenuItem>
                    <MenuItem onClick={handleClose}>Civil Engineering</MenuItem>
                  </Menu>
                  <EditIcon />
                </a>
              </div>
            </div>

            <div className="sidebar__content">
              <a className="active">
                <HdrStrongIcon className="icon" />
                Play
              </a>
            </div>
            <div className="sidebar__content">
              <a className="not-active">
                <AssessmentIcon className="icon" />
                Leaderboard
              </a>
            </div>
            <div className="sidebar__content">
              <a className="not-active">
                <FormatListBulletedIcon className="icon" />
                Questions
              </a>
            </div>
            <div className="sidebar__content">
              <a className="not-active">
                <UpdateIcon className="icon" />
                History
              </a>
            </div>
          </div>
          <main className="app__content content__shift">
            <div className="mainContent">
              <div className="root">
                <div className="content">
                  <header className="content__header">Category</header>
                  <div className="content__list">
                    <div className="category__card">
                      <Card className={classes.root}>
                        <CardContent>
                          <img
                            className="image"
                            alt="algo"
                            src="https://s3-us-west-2.amazonaws.com/wikasta.projectq/algorithms_tag_image.jpg"
                          />
                          <Typography variant="h5" component="h2">
                            Algorithms
                          </Typography>

                          <br />
                          <Typography variant="body2" component="p">
                            Algorithms and Data Structures
                            <br />
                            <div className="card-content">
                              <PlaylistAddCheckIcon className="check-icon" />
                              <p>0/995</p>
                            </div>
                          </Typography>
                        </CardContent>
                        <CardActions className="play-button">
                          <PlayCircleOutlineIcon />
                          <Button className="styleing" size="small">
                            Start Quiz
                          </Button>
                        </CardActions>
                      </Card>
                    </div>
                    <div className="category__card">
                      <Card className={classes.root}>
                        <CardContent>
                          <img
                            className="image"
                            alt="algo"
                            src="images/AWS.png"
                          />
                          <Typography variant="h5" component="h2">
                            AWS
                          </Typography>

                          <br />
                          <Typography variant="body2" component="p">
                            Amazon Web Servcies <br />
                            <div className="card-content">
                              <PlaylistAddCheckIcon className="check-icon" />
                              <p>0/379</p>
                            </div>
                          </Typography>
                        </CardContent>
                        <CardActions className="play-button">
                          <PlayCircleOutlineIcon />
                          <Button className="styleing" size="small">
                            Start Quiz
                          </Button>
                        </CardActions>
                      </Card>
                    </div>
                    <div className="category__card">
                      <Card className={classes.root}>
                        <CardContent>
                          <img
                            className="image"
                            alt="algo"
                            src="https://s3-us-west-2.amazonaws.com/wikasta.projectq/bash_tag_image.jpg"
                          />
                          <Typography variant="h5" component="h2">
                            Bash Scripting
                          </Typography>

                          <br />
                          <Typography variant="body2" component="p">
                            Bash Scripting and Commands
                            <br />
                            <div className="card-content">
                              <PlaylistAddCheckIcon className="check-icon" />
                              <p>0/338</p>
                            </div>
                          </Typography>
                        </CardContent>
                        <CardActions className="play-button">
                          <PlayCircleOutlineIcon />
                          <Button className="styleing" size="small">
                            Start Quiz
                          </Button>
                        </CardActions>
                      </Card>
                    </div>
                    <div className="category__card">
                      <Card className={classes.root}>
                        <CardContent>
                          <img
                            className="image"
                            alt="algo"
                            src="images/BlockChain.png"
                          />
                          <Typography variant="h5" component="h2">
                            Blockchain
                          </Typography>

                          <br />
                          <Typography variant="body2" component="p">
                            Blockchain and technology
                            <br />
                            <div className="card-content">
                              <PlaylistAddCheckIcon className="check-icon" />
                              <p>0/189</p>
                            </div>
                          </Typography>
                        </CardContent>
                        <CardActions className="play-button">
                          <PlayCircleOutlineIcon />
                          <Button className="styleing" size="small">
                            Start Quiz
                          </Button>
                        </CardActions>
                      </Card>
                    </div>
                    <div className="category__card">
                      <Card className={classes.root}>
                        <CardContent>
                          <img
                            className="image"
                            alt="algo"
                            src="https://s3-us-west-2.amazonaws.com/wikasta.projectq/bootstrap_tag_image.jpg"
                          />
                          <Typography variant="h5" component="h2">
                            Bootstap
                          </Typography>

                          <br />
                          <Typography variant="body2" component="p">
                            Bootstap Framework Questions
                            <br />
                            <div className="card-content">
                              <PlaylistAddCheckIcon className="check-icon" />
                              <p>0/995</p>
                            </div>
                          </Typography>
                        </CardContent>
                        <CardActions className="play-button">
                          <PlayCircleOutlineIcon />
                          <Button className="styleing" size="small">
                            Start Quiz
                          </Button>
                        </CardActions>
                      </Card>
                    </div>
                    <div className="category__card">
                      <Card className={classes.root}>
                        <CardContent>
                          <img
                            className="image"
                            alt="algo"
                            src="https://s3-us-west-2.amazonaws.com/wikasta.projectq/C-SHARP.png"
                          />
                          <Typography variant="h5" component="h2">
                            C#
                          </Typography>

                          <br />
                          <Typography variant="body2" component="p">
                            C Shap Programing Language
                            <br />
                            <div className="card-content">
                              <PlaylistAddCheckIcon className="check-icon" />
                              <p>0/995</p>
                            </div>
                          </Typography>
                        </CardContent>
                        <CardActions className="play-button">
                          <PlayCircleOutlineIcon />
                          <Button className="styleing" size="small">
                            Start Quiz
                          </Button>
                        </CardActions>
                      </Card>
                    </div>
                    <div className="category__card">
                      <Card className={classes.root}>
                        <CardContent>
                          <img
                            className="image"
                            alt="algo"
                            src="https://s3-us-west-2.amazonaws.com/wikasta.projectq/c_c%2B%2B_tag_image.jpg"
                          />
                          <Typography variant="h5" component="h2">
                            C & C++
                          </Typography>

                          <br />
                          <Typography variant="body2" component="p">
                            The C & C++ Programing Languages
                            <br />
                            <div className="card-content">
                              <PlaylistAddCheckIcon className="check-icon" />
                              <p>0/995</p>
                            </div>
                          </Typography>
                        </CardContent>
                        <CardActions className="play-button">
                          <PlayCircleOutlineIcon />
                          <Button className="styleing" size="small">
                            Start Quiz
                          </Button>
                        </CardActions>
                      </Card>
                    </div>
                    <div className="category__card">
                      <Card className={classes.root}>
                        <CardContent>
                          <img
                            className="image"
                            alt="algo"
                            src="https://s3-us-west-2.amazonaws.com/wikasta.projectq/HTML-%26-CSS.png"
                          />
                          <Typography variant="h5" component="h2">
                            HTML & CSS
                          </Typography>

                          <br />
                          <Typography variant="body2" component="p">
                            HTML and CSS
                            <br />
                            <div className="card-content">
                              <PlaylistAddCheckIcon className="check-icon" />
                              <p>0/1418</p>
                            </div>
                          </Typography>
                        </CardContent>
                        <CardActions className="play-button">
                          <PlayCircleOutlineIcon />
                          <Button className="styleing" size="small">
                            Start Quiz
                          </Button>
                        </CardActions>
                      </Card>
                    </div>
                    <div className="category__card">
                      <Card className={classes.root}>
                        <CardContent>
                          <img
                            className="image"
                            alt="algo"
                            src="https://s3-us-west-2.amazonaws.com/wikasta.projectq/java_tag_image.jpg"
                          />
                          <Typography variant="h5" component="h2">
                            Java
                          </Typography>

                          <br />
                          <Typography variant="body2" component="p">
                            Java Langauge
                            <br />
                            <div className="card-content">
                              <PlaylistAddCheckIcon className="check-icon" />
                              <p>0/2500</p>
                            </div>
                          </Typography>
                        </CardContent>
                        <CardActions className="play-button">
                          <PlayCircleOutlineIcon />
                          <Button className="styleing" size="small">
                            Start Quiz
                          </Button>
                        </CardActions>
                      </Card>
                    </div>
                    <div className="category__card">
                      <Card className={classes.root}>
                        <CardContent>
                          <img
                            className="image"
                            alt="algo"
                            src="https://s3-us-west-2.amazonaws.com/wikasta.projectq/JAVASCRIPT.png"
                          />
                          <Typography variant="h5" component="h2">
                            Javascript
                          </Typography>

                          <br />
                          <Typography variant="body2" component="p">
                            The Javascript Programing Language
                            <br />
                            <div className="card-content">
                              <PlaylistAddCheckIcon className="check-icon" />
                              <p>0/2410</p>
                            </div>
                          </Typography>
                        </CardContent>
                        <CardActions className="play-button">
                          <PlayCircleOutlineIcon />
                          <Button className="styleing" size="small">
                            Start Quiz
                          </Button>
                        </CardActions>
                      </Card>
                    </div>
                    <div className="category__card">
                      <Card className={classes.root}>
                        <CardContent>
                          <img
                            className="image"
                            alt="algo"
                            src="/images/Machine.png"
                          />
                          <Typography variant="h5" component="h2">
                            Machine Learning
                          </Typography>

                          <br />
                          <Typography variant="body2" component="p">
                            Machine Learning Questions
                            <br />
                            <div className="card-content">
                              <PlaylistAddCheckIcon className="check-icon" />
                              <p>0/43</p>
                            </div>
                          </Typography>
                        </CardContent>
                        <CardActions className="play-button">
                          <PlayCircleOutlineIcon />
                          <Button className="styleing" size="small">
                            Start Quiz
                          </Button>
                        </CardActions>
                      </Card>
                    </div>

                    <div className="category__card">
                      <Card className={classes.root}>
                        <CardContent>
                          <img
                            className="image"
                            alt="algo"
                            src="https://s3-us-west-2.amazonaws.com/wikasta.projectq/MATLAB.png"
                          />
                          <Typography variant="h5" component="h2">
                            Matlab
                          </Typography>

                          <br />
                          <Typography variant="body2" component="p">
                            Matlab Programing
                            <br />
                            <div className="card-content">
                              <PlaylistAddCheckIcon className="check-icon" />
                              <p>0/995</p>
                            </div>
                          </Typography>
                        </CardContent>
                        <CardActions className="play-button">
                          <PlayCircleOutlineIcon />
                          <Button className="styleing" size="small">
                            Start Quiz
                          </Button>
                        </CardActions>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
