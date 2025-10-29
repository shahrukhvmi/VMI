import React from "react";

function GlowButton() {
  return (
    <div className="mt-10">
      <div className="flex flex-wrap items-center justify-center gap-4">
        <a href="#plans" className="main-button-n w-inline-block">
          <div className="overflow-hidden button-bg">
            <div className="button-inside">Book A Discovery Call</div>
          </div>
          <div className="border-gradient"></div>
          <div className="w-embed"></div>
        </a>
      </div>
    </div>
  );
}

export default GlowButton;
