import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-sm p-4 text-center text-white">
      Copyright © 2023 Olive Ade.All Rights reserved.

      <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow me</h2>
                <ul className="text-gray-600 dark:text-gray-400">
                    <li>
                        <a href="https://github.com/oliveade" className="hover:underline ">Github</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/olive-ade-593238207/" className="hover:underline">LinkedIn</a>
                    </li>
                </ul>
            </div>
    </div>
  );
};

export default Footer;