import Image from "next/image";
import React from "react";
import sample from "../assets/sample.jpg";
import pec from "../public/pec.jpg";
import rythem from "../public/rythem.jpg";
import { BsTrophy } from "react-icons/bs";
import { GiBowTieRibbon } from 'react-icons/gi';
import { IoIosRibbon } from 'react-icons/io';
import logo from "../public/logo.png";
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpeg";
import dgc_small from "../public/logos/dgc.png";
import nit_kuk_small from "../public/logos/nit_kuk.png";
import pec_small from "../public/logos/pec.png";
import rythm_small from "../public/logos/rythm.png";
import jalandhar_small from "../public/logos/jalandhar.jpg";
import cult_small from "../public/logos/cult.png";

type StaticImageData = {
  src: string
  height: number
  width: number
  blurDataURL?: string
};

type Props = {};

export default function Main({ }: Props) {

  let achievements: { title: string, position: string, image: StaticImageData }[] = [
    {
      title: "CULT WUD",
      position: "1st Postition",
      image: cult_small
    },
    {
      title: "NIT Jalandhar",
      position: "1st Postition",
      image: jalandhar_small
    },
    {
      title: "Rythm",
      position: "9 times Winner",
      image: rythm_small
    },
    {
      title: "DGC Mohali",
      position: "2nd Postition",
      image: dgc_small
    },
    {
      title: "NIT Kurukshetra",
      position: "2nd Postition",
      image: nit_kuk_small
    },
    {
      title: "PEC Chandigarh",
      position: "2nd Postition",
      image: pec_small
    },
  ]

  return (
    <>
      <div
        className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{ minHeight: "75vh" }}
      >
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover main-bg"
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        {/* Head section */}
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div>
                <h1 className="effect3 text-white font-semibold lg:text-5xl text-2xl">
                  <span className="effect3">
                    R
                  </span>
                  <span className="effect3">
                    o
                  </span>
                  <span className="effect3">
                    y
                  </span>
                  <span className="effect3">
                    a
                  </span>
                  <span className="effect3">
                    l&nbsp;
                  </span>
                  <span className="effect3">
                    P
                  </span>
                  <span className="effect3">
                    u
                  </span>
                  <span className="effect3">
                    n
                  </span>
                  <span className="effect3">
                    j
                  </span>
                  <span className="effect3">
                    a
                  </span>
                  <span className="effect3">
                    b&nbsp;
                  </span>
                  <span className="effect3">
                    G
                  </span>
                  <span className="effect3">
                    r
                  </span>
                  <span className="effect3">
                    o
                  </span>
                  <span className="effect3">
                    u
                  </span>
                  <span className="effect3">
                    p
                  </span>
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                  A bunch of people gathered by our seniors converted into a huge group of nice and talented people. <i>(since 2007)</i>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style={{ height: "70px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
      {/* 3 blocks */}
      <section className="pb-20 bg-gray-300 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            {/* First block */}
            <div
              className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center"
            >
              <div
                className="effect2 relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <GiBowTieRibbon size={25} />
                  </div>
                  <h6 className="text-xl text-black font-semibold drop-shadow">NIT Jalandhar</h6>
                  <p className="mt-2 mb-4 text-black text-gray-600 drop-shadow">
                    1st position at NIT Jalander annual fest under Music Category.
                  </p>
                </div>

                <div className="jalandhar-bg">
                  <p className="invisible">none</p>
                </div>
              </div>
            </div>
            {/* 2nd block */}
            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="effect2 relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                    <BsTrophy size={25} />
                  </div>
                  <h6 className="text-xl text-black font-semibold drop-shadow">Rythem Winners</h6>
                  <p className="mt-2 mb-4 text-black text-gray-600 drop-shadow">
                    9 times Rythem winners. <br /> <i>(cultural fest organised by DCRUST, Murthal)</i>
                  </p>
                </div>
                <div className="rythm-bg">
                  <p className="invisible">none</p>
                </div>
              </div>
            </div>
            {/* 3rd block */}
            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="effect2 relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                    <IoIosRibbon size={25} />
                  </div>
                  <h6 className="text-xl text-black font-semibold drop-shadow">PEC Fest</h6>
                  <p className="mt-2 mb-4 text-black text-gray-600 drop-shadow">
                    Secured 2nd position at PEC Fest, Chandigarh.
                  </p>
                </div>

                <div className="pec-bg">
                  <p className="invisible">none</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center mt-32">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div className="text-gray-600 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                <Image
                  src={logo}
                  alt="Picture of the author"
                  width={50}
                  height={50}
                />
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Less like a Group, More like a Family
              </h3>
            </div>
            <div className="effect2 w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                <img
                  alt="..."
                  src="https://drive.google.com/uc?export=view&id=1xx0YwkieDTRgptckmvo8O0HNe-WV-nby"
                  className="w-full align-middle rounded-t-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-20">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="items-center flex flex-wrap">
            <div className="effect2 w-full md:w-4/12 ml-auto mr-auto px-4">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-lg"
                src="https://drive.google.com/uc?export=view&id=1jmEOgEPKVkPzQ3-invo0LlAIk2F2ThJk"
              />
            </div>
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div className="md:pr-12">
                <div className="text-pink-600 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-100">
                  <Image
                    src={logo}
                    alt="Picture of the author"
                    width={50}
                    height={50}
                  />
                </div>
                <h3 className="text-3xl font-semibold">A Growing Family</h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  Not only learn bhangra but many aspects of life too. Enhances one's qualities, make one learn to work as a team, build confidence, and teaches the importance of disiplene.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ACHIEVEMENT SECTION */}
      <section className="pt-20 pb-48">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="lg:text-4xl text-3xl font-semibold">
                <span className="effect4">O</span>
                <span className="effect4">u</span>
                <span className="effect4">r&nbsp;</span>
                <span className="effect4">A</span>
                <span className="effect4">c</span>
                <span className="effect4">h</span>
                <span className="effect4">i</span>
                <span className="effect4">e</span>
                <span className="effect4">v</span>
                <span className="effect4">e</span>
                <span className="effect4">m</span>
                <span className="effect4">e</span>
                <span className="effect4">n</span>
                <span className="effect4">t</span>
                <span className="effect4">s</span>
              </h2>
            </div>
          </div>
          <div className="flex flex-wrap">
            {achievements.map((item) => {
              return (
                <div className="effect5 w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-2">
                  <div className="px-6 text-center">
                    <Image
                      src={item.image}
                      alt="Picture of the author"
                      className="shadow-lg rounded-full max-w-[50%] w-[120px] mx-auto"
                      width={150}
                      height={150}
                    />
                    <div className="pt-6 text-center">
                      <h5 className="text-xl font-bold">{item.title}</h5>
                      <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                        {item.position}
                      </p>
                    </div>
                  </div>
                </div>)
            })}
          </div>
        </div>
      </section>
    </>
  );
}
