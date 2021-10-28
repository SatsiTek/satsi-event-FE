import React from "react";
import "./style.css";

const Home = React.forwardRef((props, ref) => {
  const [time, setTime] = React.useState({
    days: undefined,
    hours: undefined,
    mins: undefined,
    secs: undefined,
  });
  React.useEffect(() => {
    const { timeTillDate } = props;
    const compareDate = new Date(timeTillDate);
    const a = setInterval(() => {
      const totalSeconds = (compareDate - new Date()) / 1000;
      const days = Math.floor(totalSeconds / 3600 / 24);
      const hours = Math.floor(totalSeconds / 3600) % 24;
      const mins = Math.floor(totalSeconds / 60) % 60;
      const secs = Math.floor(totalSeconds) % 60;
      console.log(totalSeconds);
      if (totalSeconds < 0) {
        clearInterval(a);
        alert("Het thoi gian su kien");
      } else {
        setTime({ days, hours, mins, secs });
      }
    }, 1000);
    return () => {
      clearInterval(a);
    };
  }, [props]);
  const { id } = props;
  return (
    <div className="home" ref={ref} id={id}>
      <div class="clock-wrapper">
        <div class="clock-hms clearfix">
          <div class="tile tile-days">
            <span class="days digit">{time.days}</span>
            <span class="txt">days</span>
          </div>

          <div class="secondary">
            <div class="tile tile-hours">
              <span class="hours digit">{time.hours}</span>
              <span class="txt">hours</span>
            </div>
            <div class="tile tile-minutes">
              <span class="minutes digit">{time.mins}</span>
              <span class="txt">mins</span>
            </div>
            <div class="tile tile-seconds">
              <span class="seconds digit">{time.secs}</span>
              <span class="txt">secs</span>
            </div>
          </div>
        </div>

        <div class="title">
          <span class="anim-wrapper">
            <p>New Website available soon in 2019</p>
          </span>
        </div>
        <div className="icon-section">
          <ion-icon name="logo-angular"></ion-icon>
        </div>
      </div>
      <div className="main-content">
        <div className="content-wrapper">
          <div class="title-desc">
            <div class="t-wrapper">
              <header class="title">
                <span class="anim-wrapper">
                  <h2>
                    <strong>Coming soon</strong>
                  </h2>
                </span>
                <span class="anim-wrapper">
                  <h3>Are you ready?</h3>
                </span>
              </header>
              <div class="desc">
                <span class="anim-wrapper">
                  <p>
                    Ever wanted to impress your audience at first view? Use this
                    unique and beautiful website template.
                  </p>
                </span>
              </div>
            </div>
          </div>

          <div class="cta-btns">
            <span class="anim-wrapper">
              <a class="btn arrow-circ-btn" href="#about-us">
                <span class="txt">About us</span>
                <span class="arrow-icon"></span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Home;
