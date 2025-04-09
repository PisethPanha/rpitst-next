'use client'
import React, { useState } from "react";
import it from '../assets/it.jpg'
import agreculture from '../assets/agreculture.jpg'
import constructor from '../assets/constructor.jpg'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Catalog() {
  const [catlog, setCatlog] = useState(false);
  return (
    <div className="grid p-4 grid-cols-1 max-md:items-center max-md:justify-center md:grid-cols-3 gap-4">
      <CatalogItem img={it} title="Information Technology" route="#" />
      <CatalogItem img={agreculture} title="Agreculture" route="/hoodies" />
      <CatalogItem img={constructor} title="Constructure" />
      <CatalogItem img={agreculture} title="Agreculture" route="/hoodies" />

    </div>
  );
}

export function CatalogItem({ img, title, route }) {
  const [catlog, setCatlog] = useState(false);
  const [dialog, setDialog] = useState(false)
  return (
    <div
      onMouseEnter={() => setCatlog(true)}
      onMouseLeave={() => setCatlog(false)}
      className="relative w-[20rem] h-[20rem] mx-auto"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ textShadow: "0 0 20px white" }}
        className={`${catlog ? "flex" : "hidden"
          } w-full h-full bg-black bg-opacity-40 flex items-center justify-center  absolute z-10`}
      >
        <div className="grid gap-4 items-center justify-center text-center z-20 text-white max-md:text-[20px] text-[30px] font-bold">
          <motion.p
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className=""
          >
            {title}
          </motion.p>

          {" "}
          <motion.button
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            onClick={() => setDialog(true)}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-blue-700 w-40 mx-auto p-2 font-[500] text-[20px] rounded-lg duration-100 hover:bg-pink-500 hover:shadow-[0px_0px_30px] hover:shadow-pink-500 "
          >
            Read Now
          </motion.button>

        </div>
      </motion.div>
      <img className="h-full border-4 border-blue-300 max-w-full rounded-lg" src={img} alt="" />

      <div id="default-modal" tabindex="-1" aria-hidden="true" className={`  overflow-y-auto overflow-x-hidden fixed top-0 bg-black right-0 z-50 justify-center items-center w-full md:inset-0 h-[100vh] max-h-full ${dialog ? "block" : "hidden"}`}>
        <div className="relative h-full mx-auto p-4">

          <div className="relative overflow-y-scroll border-2 border-gray-900 h-full bg-white rounded-lg shadow-sm ">
            <div className=" flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
                          <h3 className=" text-xl font-semibold text-gray-900 ">
                            {title}
                          </h3>
                          <button type="button" onClick={() => setDialog(!dialog)} className="text-gray-400  bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center " data-modal-hide="default-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                          </button>
                        </div>

          </div>
        </div>


      </div>
    </div>
  );
}

export default Catalog;
