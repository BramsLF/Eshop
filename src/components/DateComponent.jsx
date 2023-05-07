import React from "react";

function DateComponent() {
  const date = new Date();
  const formattedDate = date.toLocaleDateString();

  return (
    <div>
      <p>{formattedDate}</p>
    </div>
  );
}

export default DateComponent;
