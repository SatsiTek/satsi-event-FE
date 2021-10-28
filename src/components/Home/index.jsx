import React from "react";
import "./style.css";
import moment from "moment";
const Home = React.forwardRef((props, ref) => {
  const [count, setCount] = React.useState(100);
  const [time, setTime] = React.useState({
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined,
  });
  React.useEffect(() => {
    const a = setInterval(() => {
      const { timeTillDate, timeFormat } = props;
      const then = moment(timeTillDate, timeFormat);
      const now = moment();

      const countdown = moment(then - now);
      const days = countdown.format("D");
      const hours = countdown.format("HH");
      const minutes = countdown.format("mm");
      const seconds = countdown.format("ss");

      setTime({ days, hours, minutes, seconds });
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
              <span class="minutes digit">{time.minutes}</span>
              <span class="txt">mins</span>
            </div>
            <div class="tile tile-seconds">
              <span class="seconds digit">{time.seconds}</span>
              <span class="txt">secs</span>
            </div>
          </div>
        </div>

        <div class="title">
          <span class="anim-wrapper">
            <h3>New Website available soon in 2019</h3>
          </span>
        </div>
      </div>
      <div className="main-content"></div>
    </div>
  );
});

export default Home;
