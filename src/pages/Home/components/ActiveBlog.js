import React from "react";

function ActiveBlog() {
  return (
    <div className="active-post mt-[100px]">
      <div className="image-box flex items-end gap-5 relative">
        <div
          className="image w-[100%] h-[300px] md:h-[500px] rounded-lg overflow-hidden relative"
          style={{
            background:
              "url(https://demo.smartaddons.com/templates/joomla3/sj-smarthome/cache/resized/c205b9d4bda02bc5a4f53847ac66781a.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="hidden navigation md:flex gap-1">
          <div className="prev">
            <i className="fas fa-chevron-left"></i>
          </div>
          <div className="next">
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
        <div className="image-border w-[110%] h-full absolute right-0 top-[-100px] bg-[#f5f5f5] z-[-10]"></div>
      </div>
    </div>
  );
}

export default ActiveBlog;
