import Image from "next/image";
import React from "react";
import { assets } from "../../../assets/assets";

const Footer = () => {
  return (
    <div className="mt-20 ">
      <div className="text-center ">
        <Image src={assets.logo} alt="" className="w-36 mx-auto mb-2 " />
        <div className="w-max flex items-center mx-auto gap-2">
          <Image src={assets.mail_icon} alt="" className="w-6" />
          dnraj2001@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mt-12 mx-[10%] py-6">
        <p>© 2025 Nikhilraj Dumpeti. All rights reserved.</p>
        <ul className="flex items-center justify-center gap-10 mt-4 sm:mt-0">
          <li>
            <a href="" target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="" target="_blank"></a>GitHub
          </li>
          <li>
            <a href="" target="_blank"></a>Twitter
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
