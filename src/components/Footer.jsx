import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-zinc-50 text-center text-surface text-black">
      <div className="container p-6">
        <div className="flex">
          <div className="mb-6 lg:mb-0">
            <img
              src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp"
              className="w-full rounded-md shadow-lg"
              alt="City 113"
            />
          </div>
          <div className="mb-6 lg:mb-0">
            <img
              src="https://tecdn.b-cdn.net/img/new/fluid/city/111.webp"
              className="w-full rounded-md shadow-lg"
              alt="City 111"
            />
          </div>
          <div className="mb-6 lg:mb-0">
            <img
              src="https://tecdn.b-cdn.net/img/new/fluid/city/112.webp"
              className="w-full rounded-md shadow-lg"
              alt="City 112"
            />
          </div>
          <div className="mb-6 lg:mb-0">
            <img
              src="https://tecdn.b-cdn.net/img/new/fluid/city/114.webp"
              className="w-full rounded-md shadow-lg"
              alt="City 114"
            />
          </div>
          <div className="mb-6 lg:mb-0">
            <img
              src="https://tecdn.b-cdn.net/img/new/fluid/city/115.webp"
              className="w-full rounded-md shadow-lg"
              alt="City 115"
            />
          </div>
          <div className="mb-6 lg:mb-0">
            <img
              src="https://tecdn.b-cdn.net/img/new/fluid/city/116.webp"
              className="w-full rounded-md shadow-lg"
              alt="City 116"
            />
          </div>
        </div>
      </div>

      {/* Copyright section */}
      <div className="w-full bg-black/5 p-4 text-center">
        © 2024 Copyright:
        <a href="https://tw-elements.com/" className="text-black text-bold">
          Karma Tours
        </a>
      </div>
    </footer>
  );
};

export default Footer;
