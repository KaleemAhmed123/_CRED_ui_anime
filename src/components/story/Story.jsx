import React from "react";
import "./style.css";

const CredStory = () => {
  return (
    <div className="story flex center">
      {/* wrapper for max-width*/}
      <div className="max-width flex story-wrapper">
        <div className="flex story-heading-wrapper">
          <h2 className="story-heading">
            the story of CRED begins with trust.
          </h2>
        </div>
        {/* three paras */}
        <div className="story-detail">
          <p className="story-para">
            trust as a virtue has consistently played an essential role in every
            great human achievement. and consistently, its importance has been
            overlooked. not just by individuals, but by entire societies. we
            felt it was time someone gave it the spotlight it deserves.
            especially for the ones who live by this virtue: the trustworthy.
          </p>
          <p className="story-para">
            so we thought of creating a system that rewards its members for
            doing good and being trustworthy. this way, trust as a virtue
            becomes something to aspire to, just the way it should be. then we
            went one step ahead: we built it. we know we are on the right track
            because here you are.
          </p>
          <p className="story-para">
            if you make it to CRED, congratulations and welcome. we have a lot
            of things planned for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CredStory;
