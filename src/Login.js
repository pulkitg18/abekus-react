import { Container, Paper } from "@material-ui/core";
import { auth, provider } from "./firebase";
import React from "react";
import "./Login.css";
import TimelineIcon from "@material-ui/icons/Timeline";
import CodeIcon from "@material-ui/icons/Code";
import PeopleIcon from "@material-ui/icons/People";
import GoogleButton from "react-google-button";
function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login-header"></div>
      <Container style={{ display: "flex" }} className="login__container">
        <Paper className="login__content-wrapper">
          <div className="login__header">
            <div className="brand">
              <img
                style={{ paddingTop: "20px" }}
                src={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVMAAABDCAMAAAAWNBZpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkVFRTI0MUNEMTc3MTFFOTk2MUNFQjgwM0I4NUM3MjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkVFRTI0MUREMTc3MTFFOTk2MUNFQjgwM0I4NUM3MjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2RUVFMjQxQUQxNzcxMUU5OTYxQ0VCODAzQjg1QzcyMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2RUVFMjQxQkQxNzcxMUU5OTYxQ0VCODAzQjg1QzcyMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqXSoxUAAABdUExURTVy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"
                }
                alt="Abekus"
                width={120}
              />
            </div>
          </div>
          <div className="login__grids">
            <div className="login__left">
              <div className="login__details">
                <div className="login__details-item">
                  <TimelineIcon className="login__icons  icon-rose">
                    timeline
                  </TimelineIcon>
                  <div className="login__details-head">
                    <h3>Beyond Code</h3>
                    <p>
                      Become a true programming master by enhancing your soft
                      skills and technical ability.
                    </p>
                  </div>
                </div>
                <div className="login__details-item">
                  <CodeIcon className="login__icons icon-primary">
                    code
                  </CodeIcon>
                  <div className="login__details-head">
                    <h3>Sharpen your skills</h3>
                    <p>
                      Challenge yourself on questions, created by the community
                      to strengthen different skills. Master your current
                      language of choice, or expand your understanding of a new
                      one.
                    </p>
                  </div>
                </div>
                <div className="login__details-item">
                  <PeopleIcon
                    style={{ color: "#00bcd4" }}
                    className="login__icons icon-info"
                  >
                    group
                  </PeopleIcon>
                  <div className="login__details-head">
                    <h3>Earn points and badges</h3>
                    <p>
                      Answers are scored based on the difficulty level. As you
                      complete difficult questions, you progress through the
                      ranks so we suggest you relevant challenges.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="login__right">
              <div className="login__content">
                <div className="login1">
                  <GoogleButton onClick={signIn} className="login-button">
                    Login With Google
                  </GoogleButton>
                </div>
              </div>
            </div>
          </div>
        </Paper>
      </Container>
    </div>
  );
}

export default Login;
