import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";

const Shareline = () => {
  const shareButtons = [
    {
      id: 1,
      name: "Facebook",
      icon: FacebookIcon,
      component: FacebookShareButton,
    },
    {
      id: 2,
      name: "Instagram",
      icon: TwitterIcon,
      component: TwitterShareButton,
    },
    {
      id: 3,
      name: "Whatsapp",
      icon: WhatsappIcon,
      component: WhatsappShareButton,
    },
    {
      id: 4,
      name: "Telegram",
      icon: TelegramIcon,
      component: TelegramShareButton,
    },
  ];

  return (
    <div className="flex items-center gap-2">
      {shareButtons.map(({ icon: Icon, component: Component, name, id }) => {
        return (
          <Component
            className="hover:shadow-lg rounded-md duration-200 overflow-hidden"
            key={id}
            url={window.location.href}
            title={name}
          >
            <Icon size={50} />
          </Component>
        );
      })}
    </div>
  );
};

export default Shareline;
