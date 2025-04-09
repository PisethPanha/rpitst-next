
'use client'
import React, { useEffect, useState } from 'react'

import Hero from '../react/components/Hero'
import BookList from '../react/components/BookList'
import axios from 'axios'
import CatagoriesPanel from '../react/components/CatagoriesPanel'

function Home({images, downloadss, datas}) {
  const [image, setImage] = useState(images || []);
  const [view, setView] = useState(false)
  const [loadResult, setLoadResult] = useState(false)
  const [loading1, setLoading1] = useState(true)
  const [loading2, setLoading2] = useState(false)
  const [loading3, setLoading3] = useState(false)
  const [downloads, setDownloads] = useState(false)
  const [data, setData] = useState(datas || []);
  const [download, setDownload] = useState(downloadss || []);
  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(10)
  const [result, setResult] = useState([]);
  const [keyword, setKeyword] = useState("")
  const [backBTN, setBackBTN] = useState(false)
  const [resultVisibility, setResultVisibility] = useState(false)
  
    
  function handleSearch(key) {
    key != "" ? setResultVisibility(true) : setResultVisibility(false)
    setLoadResult(true)
    axios.get("https://carefree-empathy-production.up.railway.app/search", { params: { keyword: key } }).then((res) => { setResult(res.data); setLoadResult(false) }
    )

  }
  function handleApplySearch(key) {
    setLoading1(true)
    axios.get("https://carefree-empathy-production.up.railway.app/keyword", { params: { keyword: key } }).then((res) => { setImage(res.data); setLoading1(false) })
    setBackBTN(true)
    setResultVisibility(false)

  }
  function handleSearchBTN() {
    if (keyword == "") {

    } else {
      setLoading1(true)
      axios.get("https://carefree-empathy-production.up.railway.app/search", { params: { keyword: keyword } }).then((res) => { setImage(res.data); setLoading1(false) })
      setBackBTN(true)
      setResultVisibility(false)
    }
  }
  function handleBackToDefaultData() {
    setLoading1(true)
    setImage(images)
    setLoading1(false)
    setBackBTN(false)
  }
  useEffect(() => {
    setLoading1(false)
    // setLoading2(true)
    // setLoading3(true)
    

  }, [])

  return (
    <div className='relative'>
      <Hero />
      <br />
      <h1 className='text-[30px] font-[700] border-b-8 border-blue-500 max-w-[30rem] mx-auto text-center uppercase'>Catagories</h1>
      <CatagoriesPanel />
      <br />
      <h1 className='text-[30px] font-[700] border-b-8 border-blue-500 max-w-[30rem] mx-auto text-center uppercase'>Most View</h1>
      <br />
      {loading2 ?
        <div role="status" className={`h-full w-full justify-center items-center flex`}>
          <svg aria-hidden="true" className="w-8 mx-auto h-8 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
        </div> :

        <BookList img={data} CardWidth="w-[15rem]" display={false} more={backBTN} moreVissible={false} language="" />
      }
      <br />
      <h1 className='text-[30px] font-[700] border-b-8 border-blue-500 max-w-[30rem] mx-auto text-center uppercase'>Most Download</h1>
      <br />
      {loading3 ?
        <div role="status" className={`h-full w-full justify-center items-center flex`}>
          <svg aria-hidden="true" className="w-8 mx-auto h-8 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
        </div> :
        <BookList img={download} display={false} CardWidth="w-[15rem]" more={backBTN} moreVissible={false} language="" />
      }
      <br />
      <h1 id='all_book' className='text-[30px] font-[700] border-b-8 border-blue-500 max-w-[30rem] mx-auto text-center uppercase'>All book</h1>
      <br />

      <div onClick={() => setResultVisibility(!resultVisibility)} className={`w-full h-full absolute bg-transparent top-0 z-10 ${resultVisibility ? "block" : "hidden"}`}></div>
      <div className="px-8 relative max-w-md mx-auto">
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input onChange={(event) => {
            handleSearch(event.target.value); setKeyword(event.target.value);
          }} onKeyDown={(event) => {
            if (event.key == 'Enter') {
              handleSearchBTN(event.target.data);
            }
          }}
            autoComplete='off'
            id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none " placeholder="Search" required />
          <button onClick={handleSearchBTN} className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
        </div>

        <div className={` ${resultVisibility ? "block" : "hidden"} absolute bg-white p-4 border-2 border-gray-700 rounded-lg z-50 w-full  `}>
          <ul>
            {loadResult ? <ul>
              <div role="status" className={`h-full w-full justify-center items-center flex`}>
                <svg aria-hidden="true" className="w-8 mx-auto h-8 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
              </div>
            </ul>
              :
              result.length != 0 ?
                result.map((ele, i) =>
                  <li key={i} onClick={() => { handleApplySearch(ele.Title); setBackBTN(true) }} className='cursor-pointer justify-between items-center flex hover:text-blue-400 duration-100 hover:font-[700]'><span>{ele.Title}</span> <span>{"ប្រភេទ: "}{ele.type}</span> </li>)
                :
                <li>no result</li>}
          </ul>
        </div>
        <div className={`${backBTN ? "block" : "hidden"} w-full justify-center items-center flex p-4`}>
          <button onClick={handleBackToDefaultData} className='bg-blue-600 p-2 rounded-lg text-white font-[700] '>Back</button>
        </div>
      </div>

      <br />
      {loading1 ?
        <div role="status" className={`h-full w-full justify-center items-center flex`}>
          <svg aria-hidden="true" className="w-8 mx-auto h-8 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
        </div> :
        <BookList img={image} display={true} more={backBTN} CardWidth="w-[15rem]" moreVissible={true} language="" />
      }

    </div>
  )
}

export default Home