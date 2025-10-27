import Link from "next/link";
import React from "react";

export default function Assistance() {
  return (
    <div className="w-6xl mx-auto max-container-width relative z-10 mb-30 contact-bottom-margin">
      <div className="contact-card-wrap flex relative z-10">
        <div className="contact-card-inner bg-white/5 backdrop-blur-md rounded-xl p-10 card-inner-glow">
          <h2 className="olivera-font">Help-related Queries</h2>
          <p className="poppins-font">
            Speak to our representative for detailed queries.
          </p>

          <div className="nav-btn example-2 form-assist-btn">
            <Link
              href="tel:+923452646481"
              className="inner flex justify-center gap-2 poppins-font text-2xl items-center"
              style={{
                background:
                  "linear-gradient(90deg,rgb(84, 47, 140),rgb(132, 72, 187))",
                boxShadow: `
      0 0 100px #9561c540,
      0 0 40px #9561c550,
      0 0 80px #9561c570,
      0 0 120px #9561c530
    `,
              }}
            >
              Speak with Us
            </Link>
          </div>
        </div>

        <div className="contact-card-inner bg-white/5 backdrop-blur-md rounded-xl p-10 card-inner-glow">
          <h2 className="olivera-font">On-site Meeting</h2>
          <p className="poppins-font">
            Visit our office located at: <br />
            Vibrant Media Inc. 3rd Floor, Plot # 1-A 1/6, Block 1 Nazimabad,
            74600 Karachi, Pakistan
          </p>

          <div className="nav-btn example-2 form-assist-btn">
            <Link
              href="https://maps.app.goo.gl/NywMa5KeaJBnTiy48"
              target="_blank"
              className="inner flex justify-center gap-2 poppins-font text-2xl items-center"
              style={{
                background:
                  "linear-gradient(90deg,rgb(84, 47, 140),rgb(132, 72, 187))",
                boxShadow: `
      0 0 100px #9561c540,
      0 0 40px #9561c550,
      0 0 80px #9561c570,
      0 0 120px #9561c530
    `,
              }}
            >
              Get Directions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
