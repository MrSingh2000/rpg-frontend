import Link from "next/link";
import React, { useRef } from "react";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

type Props = {};

export default function Navbar({}: Props) {
  const toggleRef: any = useRef(null);

  const toggleNavbar = (): void => {
    toggleRef?.current?.classList?.toggle("hidden");
  };

  return (
    <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 ">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
          >
            Royal Punjab Group
          </a>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => toggleNavbar()}
          >
            <i className="text-white fas fa-bars"></i>
          </button>
        </div>
        <div
          ref={toggleRef}
          className="lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none hidden"
          id="example-collapse-navbar"
        >
          <ul className="flex flex-col lg:flex-row list-none mr-auto">
            <li className="flex items-center">
              <Link href="/members">
                <a
                  className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/landing"
                >
                  <i className="lg:text-gray-300 text-gray-500 far fa-file-alt text-lg leading-lg mr-2"></i>
                  Members
                </a>
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="flex items-center">
              <a
                className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                href="https://www.instagram.com/royal_punjab_group"
                target="_blank"
              >
                <FaInstagram size={25} />
                <span className="lg:hidden inline-block ml-2">instagram</span>
              </a>
            </li>
            <li className="flex items-center">
              <a
                className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                href="https://www.youtube.com/c/RPGDcrust"
                target="_blank"
              >
                <FaYoutube size={25} />
                <span className="lg:hidden inline-block ml-2">youtube</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}