'use client'
import React, { useEffect, useState } from "react";
import BookList from "./BookList";
import axios from "axios";

function CatagoriesPanel() {
  return (
    <div className="mb-4 mx-auto mt-4 p-8 rounded-md w-[80%] flex shadow-[0px_0px_20px] shadow-gray-500 items-center justify-center ">
      <div className="grid max-md:grid-cols-3 grid-cols-5 gap-8">
        <CatagItems type='' img={"https://raw.githubusercontent.com/PisethPanha/ebook_photos/refs/heads/main/all.png"} title="ALL" />
        <CatagItems type='IT' img={"https://raw.githubusercontent.com/PisethPanha/ebook_photos/refs/heads/main/pngwing.com%20(17).png"} title="IT" />
        <CatagItems type='constructor' img={"https://raw.githubusercontent.com/PisethPanha/ebook_photos/refs/heads/main/pngwing.com%20(6).png"} title="Constructor" />
        <CatagItems type='accounting' img={"https://raw.githubusercontent.com/PisethPanha/ebook_photos/refs/heads/main/accounting.png"} title="Accounting" />
        <CatagItems type='agreculture' img={"https://raw.githubusercontent.com/PisethPanha/ebook_photos/refs/heads/main/agriculture.png"} title="Agreculture" />
        <CatagItems type='law' img={"https://raw.githubusercontent.com/PisethPanha/ebook_photos/refs/heads/main/pngwing.com%20(13).png"} title="Law" />
        <CatagItems type='chinese' img={"https://raw.githubusercontent.com/PisethPanha/ebook_photos/refs/heads/main/fkmfdlmbm54354543_167_167.png"} title="Chinese" />
        <CatagItems type='English' img={"https://raw.githubusercontent.com/PisethPanha/ebook_photos/refs/heads/main/pngwing.com%20(14).png"} title="English" />
        <CatagItems type='ganeral' img={"https://raw.githubusercontent.com/PisethPanha/ebook_photos/refs/heads/main/pngwing.com%20(12).png"} title="General Knowledg" />
        <CatagItems type='history' img={"https://raw.githubusercontent.com/PisethPanha/ebook_photos/refs/heads/main/pngwing.com%20(8).png"} title="History" />
        <CatagItems type='electric' img={"https://raw.githubusercontent.com/PisethPanha/ebook_photos/refs/heads/main/pngwing.com%20(9).png"} title="Electric" />
        <CatagItems type='electronic' img={"https://raw.githubusercontent.com/PisethPanha/ebook_photos/refs/heads/main/pngwing.com%20(11).png"} title="Electronic" />
        <CatagItems type='animal' img={"https://raw.githubusercontent.com/PisethPanha/ebook_photos/refs/heads/main/pngwing.com%20(10).png"} title="Animal husbandry" />
        <CatagItems type='other' img={"https://raw.githubusercontent.com/PisethPanha/ebook_photos/refs/heads/main/all.png"} title="Other" />

      </div>
    </div>
  );
}

export default CatagoriesPanel;

export function CatagItems({ img, title, type }) {
  const [dialog, setDialog] = useState()
  const [resultVisibility, setResultVisibility] = useState(false)
  const [keyword, setKeyword] = useState("")
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false)
  const [loadingResult, setLoadingResult] = useState(false)
  const [backBTN, setBackBTN] = useState(false)
  const [data, setData] = useState([])

  function handleSearch(key) {

    setLoadingResult(true)
    setResultVisibility(true)
    axios.get("https://carefree-empathy-production.up.railway.app/admin_search", { params: { keyword: key, catagory: type, language: "" } }).then((res) => { setResult(res.data); setLoadingResult(false) }
    )
    if (key == "") {
      setResultVisibility(false)
    }


  }
  function handleApplySearch(key) {
    setLoading(true)
    axios.get("https://carefree-empathy-production.up.railway.app/keyword", { params: { keyword: key } }).then((res) => { setData(res.data); setLoading(false) })
    setBackBTN(true)

  }
  function handleSearchBTN() {
    if (keyword == "") {

    } else {
      setLoading(true)
      axios.get("https://carefree-empathy-production.up.railway.app/admin_search", { params: { keyword: keyword, catagory: type, language: "" } }).then((res) => { setData(res.data); setLoading(false) })
      setBackBTN(true)
    }
  }
  function handleBackToDefaultData() {
    setLoading(true)
    axios.get("https://carefree-empathy-production.up.railway.app/type", { params: { keyword: '', catagory: type, language: '' } }).then((res) => { setData(res.data); setLoading(false) }
    ) 
    setBackBTN(false)
  }
  useEffect(() => {
    setLoading(true)
    axios.get("https://carefree-empathy-production.up.railway.app/type", { params: { keyword: '', catagory: type, language: '' } }).then((res) => { setData(res.data); setLoading(false) }
    )
  }, [dialog])
  return (
    <div className="grid items-center justify-center text-center">
      <img
        className="w-[75px] h-[70px] mx-auto hover:scale-105 hover:-translate-y-2 duration-75"
        src={img}
        id='icon'
        onClick={() => setDialog(!dialog)}
        alt=""
      />
      <label htmlFor="#icon">{title}</label>

      <div id="default-modal" className={`  overflow-y-auto overflow-x-hidden fixed top-0  right-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full ${dialog ? "block" : "hidden"}`}>
        <div className="relative h-full mx-auto p-4">

          <div className="relative overflow-y-scroll border-2 border-gray-900 h-full bg-white rounded-lg shadow-sm ">

            <div className=" flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
              <h3 className=" text-xl font-semibold text-gray-900 ">
                {title}
              </h3>


              <button type="button" onClick={() => setDialog(!dialog)} className="text-gray-400  bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center " data-modal-hide="default-modal">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div onClick={() => setResultVisibility(!resultVisibility)} className={`w-full h-full absolute bg-transparent top-0 z-10 ${resultVisibility ? "block" : "hidden"}`}></div>
            <div className="px-8 relative max-w-md mx-auto mt-2">
              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input
                  autoComplete='off'
                  onChange={(event) => {
                    handleSearch(event.target.value); setKeyword(event.target.value);
                  }} id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none " placeholder="Search" required />
                <button onClick={handleSearchBTN} className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
              </div>

              <div className={` ${resultVisibility ? "block" : "hidden"} absolute bg-white p-4 border-2 border-gray-700 rounded-lg z-50 w-full  `}>
                <ul>
                  {
                    loadingResult ?

                      <li>
                        <div role="status" className={`h-full w-full justify-center items-center flex`}>
                          <svg aria-hidden="true" className="w-8 mx-auto h-8 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                          </svg>
                        </div>
                      </li>

                      :
                      result.length != 0 ?
                        result.map((ele, i) =>
                          <li key={i} onClick={() => { handleApplySearch(ele.Title); setBackBTN(true) }} className='cursor-pointer justify-between items-center flex hover:text-blue-400 duration-100 hover:font-[700]'><span>{ele.Title}</span> <span>{"ប្រភេទ: ​"}{ele.type}</span> </li>)
                        :
                        <li>no result</li>}
                </ul>
              </div>
              <div className={`${backBTN ? "block" : "hidden"} w-full justify-center items-center flex p-4`}>
                <button onClick={handleBackToDefaultData} className='bg-blue-600 p-2 rounded-lg text-white font-[700] '>Back</button>
              </div>
            </div>
            {loading ?
              <div role="status" className={`h-full w-full justify-center items-center flex`}>
                <svg aria-hidden="true" className="w-8 mx-auto h-8 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
              </div> :
              <BookList img={data} more={true} language="" CardWidth="w-[16rem]" moreVissible={true} display={true} />
            }


          </div>
        </div>


      </div>
    </div>
  );
}
