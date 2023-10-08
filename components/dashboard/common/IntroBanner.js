import React from "react";

// styles
import "../../../styles/dashboard/common/intro-banner-styles.css";

function IntroBanner({title}) {
  return (
    <section className="introbanner-main-container d-flex flex-column">
      <div className="p-5">
        <h1 className="white-color">{title}</h1>
        <h6 className="white-color">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus
          rhoncus aliquet aliquam in mattis at.
        </h6>
      </div>
    </section>
  );
}

export default IntroBanner;
