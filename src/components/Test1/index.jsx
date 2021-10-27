import React from "react";
import "./Test1.css";

const Test1 = React.forwardRef((props, ref) => {
  const { id } = props;

  return (
    <React.Fragment>
      <div className="Test1" ref={ref}>
        {id}
      </div>
    </React.Fragment>
  );
});
export default Test1;
