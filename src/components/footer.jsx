import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  faBehance,
  faDribbble,
  faLinkedin,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="border-t-[1px] py-5 lg:flex lg:flex-row-reverse lg:justify-between lg:px-10">
        <div className="flex items-center justify-center gap-7 py-5">
          <div>
            <a href="https://web.whatsapp.com">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
          <div>
            <a href="https://dribbble.com">
              <FontAwesomeIcon icon={faDribbble} />
            </a>
          </div>
          <div>
            <a href="https://linkedin.com">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
          <div>
            <a href="https://twitter.com">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
          <div>
            <a href="https://behance.net">
              <FontAwesomeIcon icon={faBehance} />
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          Made with <FontAwesomeIcon icon={faHeart} /> by Bimo Prabowo.
        </div>
      </div>
    </>
  );
};

export default Footer;
