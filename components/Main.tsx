import Image from "next/image";
import React from "react";
import sample from "../assets/sample.jpg";
import {BsTrophy} from "react-icons/bs";
import {GiBowTieRibbon} from 'react-icons/gi';
import {IoIosRibbon} from 'react-icons/io';
import {GrGroup} from 'react-icons/gr';

type Props = {};

export default function Main({}: Props) {
  return (
    <>
      <div
        className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{ minHeight: "75vh" }}
      >
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            // https://drive.google.com/file/d/1oIBXQTik4Xovt_7TupFw2DakVnYIBJ78/view?usp=sharing
            backgroundImage:
              'url("https://drive.google.com/uc?export=view&id=1oIBXQTik4Xovt_7TupFw2DakVnYIBJ78")',
            backgroundSize: 'cover',
            backgroundPosition: '0% 25%'
          }}
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
              <div className="pr-12">
                <h1 className="effect3 text-white font-semibold text-5xl">
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, in esse eveniet, quibusdam odio adipisci nobis enim
                  exercitationem dolorum eius mollitia!
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
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1666161922647-ad32c06f910b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80')",
                backgroundSize: "contain",
              }}
               className="effect2 relative flex flex-col min-w-0 break-words w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <GiBowTieRibbon size={25}/>
                  </div>
                  <h6 className="text-xl text-white font-semibold">NIT Jalandhar</h6>
                  <p className="mt-2 mb-4 text-white text-gray-600">
                    1st position at NIT Jalander annual fest under Music Category.
                  </p>
                </div>
              </div>
            </div>
            {/* 2nd block */}
            <div className="w-full md:w-4/12 px-4 text-center">
              <div
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1666161922647-ad32c06f910b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80')",
                backgroundSize: "contain",
              }} className="effect2 relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                    <BsTrophy size={25}/>
                  </div>
                  <h6 className="text-xl text-white font-semibold">Rythem Winners</h6>
                  <p className="mt-2 mb-4 text-white text-gray-600">
                    9 times Rythem winners. <br /> <i>(cultural fest organised by DCRUST, Murthal)</i>
                  </p>
                </div>
              </div>
            </div>
            {/* 3rd block */}
            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div 
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1666161922647-ad32c06f910b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80')",
                backgroundSize: "contain",
              }} className="effect2 relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                    <IoIosRibbon size={25}/>
                  </div>
                  <h6 className="text-xl text-white font-semibold">PEC Fest</h6>
                  <p className="mt-2 mb-4 text-white text-gray-600">
                    Secured 2nd position at PEC Fest, Chandigarh.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center mt-32">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                <GrGroup size={25} />
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Less like a Group, More like a Family
              </h3>
            </div>
            <div className="effect2 w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block"
                    style={{ height: "95px", top: "-94px" }}
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-pink-600 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Top Notch Services
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens.
                  </p>
                </blockquote>
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
                src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80"
              />
            </div>
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div className="md:pr-12">
                <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                  <i className="fas fa-rocket text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">A growing company</h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  The extension comes with three pre-built pages to help you get
                  started faster. You can change the text and images and you're
                  good to go.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                          <i className="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">
                          Carefully crafted components
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                          <i className="fab fa-html5"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">Amazing page examples</h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                          <i className="far fa-paper-plane"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">Dynamic components</h4>
                      </div>
                    </div>
                  </li>
                </ul>
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
              <h2 className="text-4xl font-semibold">
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
              <p className="text-lg leading-relaxed m-4 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam soluta laboriosam ullam alias commodi, repudiandae, architecto deserunt inventore, vero libero id!
              </p>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="effect1 w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1666161922647-ad32c06f910b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
                  className="shadow-lg rounded-full max-w-full mx-auto"
                  style={{ maxWidth: "120px" }}
                />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">NIT Jalandhar</h5>
                  <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    1st Position
                  </p>
                </div>
              </div>
            </div>
            <div className="effect1 w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1666161922647-ad32c06f910b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
                  className="shadow-lg rounded-full max-w-full mx-auto"
                  style={{ maxWidth: "120px" }}
                />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">Rhythm</h5>
                  <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    9 Times Winner
                  </p>
                </div>
              </div>
            </div>
            <div className="effect1 w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1666161922647-ad32c06f910b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
                  className="shadow-lg rounded-full max-w-full mx-auto"
                  style={{ maxWidth: "120px" }}
                />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">DGC Mohali</h5>
                  <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    2nd Position
                  </p>
                </div>
              </div>
            </div>
            <div className="effect1 w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1666161922647-ad32c06f910b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
                  className="shadow-lg rounded-full max-w-full mx-auto"
                  style={{ maxWidth: "120px" }}
                />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">NIT Kurukshetra</h5>
                  <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    2nd Position
                  </p>
                </div>
              </div>
            </div>
            <div className="effect1 w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-4">
              <div className="px-6">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1666161922647-ad32c06f910b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
                  className="shadow-lg rounded-full max-w-full mx-auto"
                  style={{ maxWidth: "120px" }}
                />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">PEC Chandigarh</h5>
                  <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    2nd Position
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
  );
}