import React from "react";

// styles
import "../../../styles/dashboard/common/intro-banner-styles.css";

function IntroBanner({title, description}) {
  return (
    <section className="introbanner-main-container d-flex flex-column">
      <div className="p-5">
        <h1 className="white-color">{title}</h1>
        <h3 className="white-color weight-400">
          {description || ""}
        </h3>
      </div>
    </section>
  );
}

export default IntroBanner;
