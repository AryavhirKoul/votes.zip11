import React from "react";
import Layout from "./Layout";
import "./help.css"; // Import the CSS file

const Help = () => {
  return (
    <Layout>
      <div className="help-con">
        <h2>HELP AND SUPPORT</h2>
        <p>
          For assistance and any other app related queries contact us on :
          <br />
          Email: aryavhirkoul1@gmail.com
          <br />
          Phone: 7006636358
        </p>
        <div className="main">
          <div className="card">
            <svg
              className="instagram"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              width="30px"
              height="30px"
              fillRule="nonzero"
            >
              <g
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
                style={{ mixBlendMode: "normal" }}
              >
                <g transform="scale(8,8)">
                  <path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z"></path>
                </g>
              </g>
            </svg>
          </div>
          <div className="card">
            <svg
              className="twitter"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="30px"
              height="30px"
            >
              <path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path>
            </svg>
          </div>
          <div className="card">
            <svg
              className="dribble"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              width="30px"
              height="30px"
            >
              <path d="M20,38.5C9.799,38.5,1.5,30.201,1.5,20S9.799,1.5,20,1.5S38.5,9.799,38.5,20S30.201,38.5,20,38.5z"></path>
              <path fill="#ea4c89" d="M20,2c9.925,0,18,8.075,18,18s-8.075,18-18,18S2,29.925,2,20S10.075,2,20,2 M20,1 C9.507,1,1,9.507,1,20s8.507,19,19,19s19-8.507,19-19S30.493,1,20,1L20,1z"></path>
              <path fill="none" stroke="#ea4c89" strokeMiterlimit="10" d="M28.352 36.914c0 0-3.032-21.087-15.63-34.292M1.269 17.848c0 0 24.2 2.117 32.075-11.102M7.804 34.152c0 0 8.624-19.807 31.058-12.194"></path>
            </svg>
          </div>
          <div className="card">
            <svg
              className="codepen"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="30px"
              height="30px"
            >
              <path d="M 25 4 L 4 17.34375 L 4 32.652344 L 25 46 L 46 32.65625 L 46 17.34375 Z M 25 29.183594 L 19.066406 25.070313 L 25 21.023438 L 30.933594 25.070313 Z M 27 17.605469 L 27 9.949219 L 40.429688 18.484375 L 34.410156 22.65625 Z M 23 17.605469 L 15.589844 22.65625 L 9.570313 18.484375 L 23 9.949219 Z M 17.066406 25.070313 L 11 29.222656 L 11 20.777344 Z M 32.933594 25.070313 L 39 20.777344 L 39 29.222656 Z M 23 32.394531 L 23 40.046875 L 9.570313 31.515625 L 15.589844 27.34375 Z M 27 32.394531 L 34.410156 27.34375 L 40.429688 31.515625 L 27 40.046875 Z"></path>
            </svg>
          </div>
        </div>
        <div class="form-container">
      <form class="form">
        <div class="form-group">
          <label for="email">Your Email</label>
          <input required="" name="email" id="email" type="text"/>
        </div>
        <div class="form-group">
          <label for="textarea">How Can We Help You?</label>
          <textarea required="" cols="50" rows="10" id="textarea" name="textarea">          </textarea>
        </div>
        <button type="submit" class="form-submit-btn">Submit</button>
      </form>
    </div>
      </div>
    </Layout>
  );
};

export default Help;
