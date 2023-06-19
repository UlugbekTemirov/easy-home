import React from "react";
import Translate from "../../../utils/Translate";

function ContactCard({
  title = {},
  iconClassname = "",
  children,
  className = "",
  iconBg = "",
}) {
  return (
    <div className={`py-[50px] rounded-md ${className}`}>
      <div className="flex items-center flex-col gap-5">
        <div
          className={`icon-round-box  flex items-center justify-center p-[20px] rounded-full ${iconBg}`}
        >
          <span className={"icon " + iconClassname}></span>
        </div>
        <h3 className="text-xl font-semibold">
          <Translate dictionary={title} />
        </h3>
        <p className="footer-text text-center text-[#7a7a7a]">{children}</p>
      </div>
    </div>
  );
}

export default ContactCard;
