'use client'
import React, { useEffect, useState } from 'react'
import BookList from '../react/components/BookList';
import axios from 'axios';


function ForiegnBook({datas}) {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(datas || []);
    const [dropdown, setDropdown] = useState(false);
    const [catagory, setGatagory] = useState("")
    const [keyword, setKeyword] = useState("")
    const [loadResult, setLoadResult] = useState(false)
    const [result, setResult] = useState([])
    const [backBTN, setBackBTN] = useState(false)
    const [resultVisibility, setResultVisibility] = useState(false)

    function handleSearch(key) {


        setKeyword(key);
        if(key != ""){
            setLoadResult(true)
            axios.get("https://carefree-empathy-production.up.railway.app/admin_search", { params: { keyword: key, catagory: catagory, language: "foriegn" } }).then((res) => { setResult(res.data); console.log(res.data); setLoadResult(false) });
        }else if(key == ""){
            setResultVisibility(false)
        }



    }
    function handleSearchButton(key) {
        if (key == "" && catagory == "") {
            setBackBTN(false)
            setLoading(true)
            axios.get("https://carefree-empathy-production.up.railway.app/admin_search", { params: { keyword: "", catagory: "", language: "foriegn" } }).then((res) => { setData(res.data); setLoading(false) }
            )
        } else {
            setResultVisibility(false)
            setBackBTN(true)
            setLoading(true)
            axios.get("https://carefree-empathy-production.up.railway.app/admin_search", { params: { keyword: key, catagory: catagory, language: "foriegn" } }).then((res) => { setData(res.data); setLoading(false) }
            )
        }


    }
    function handleBackToDefaultData() {
        setBackBTN(false)
        setLoading(true)
        axios.get("https://carefree-empathy-production.up.railway.app/getbookastype", { params: { leng: "foriegn" } }).then((res) => { setData(res.data); setLoading(false) }
        )
    }
    function handleApplySearch(key) {
        setResultVisibility(false)
        setLoading(true)
        axios.get("https://carefree-empathy-production.up.railway.app/keyword", { params: { keyword: key } }).then((res) => { setData(res.data); setLoading(false) })
        setBackBTN(true)

    }
    return (
        <div className='relative'>
            <div className=''>
                <br />
                <h1 className='text-[30px] font-[700] border-b-8 border-blue-500 max-w-[30rem] mx-auto text-center uppercase'>Foriegn Book</h1>
                <br />
                <div className="max-w-lg mx-auto  ">
                    <div className="px-8 flex relative">
                        <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Your Email</label>
                        <button onClick={() => setDropdown(!dropdown)} id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 outline-none" type="button"> {catagory == "" ? "All Catagory" : catagory} <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg></button>
                        <div id="dropdown" className={`z-10 ${dropdown ? "block" : "hidden"} bg-white divide-y absolute mt-11 divide-gray-100 rounded-lg shadow w-auto`}>
                            <ul className="py-2 shadow-lg shadow-black overflow-y-scroll h-[40vh] text-sm text-gray-700 " >
                                <li>
                                    <button type="button" onClick={() => { setGatagory(""); setDropdown(false) }} className="inline-flex w-full px-4 py-2 hover:bg-gray-100 ">All</button>
                                </li>
                                <li>
                                    <button type="button" onClick={() => { setGatagory("IT"); setDropdown(false) }} className="inline-flex w-full px-4 py-2 hover:bg-gray-100 ">Information Technology</button>
                                </li>
                                <li>
                                    <button type="button" onClick={() => { setGatagory("constructor"); setDropdown(false) }} className="inline-flex w-full px-4 py-2 hover:bg-gray-100 ">Constructor</button>
                                </li>
                                <li>
                                    <button type="button" onClick={() => { setGatagory("agreculture"); setDropdown(false) }} className="inline-flex w-full px-4 py-2 hover:bg-gray-100 ">Agreculture</button>
                                </li>
                                <li>
                                    <button type="button" onClick={() => { setGatagory("accounting"); setDropdown(false) }} className="inline-flex w-full px-4 py-2 hover:bg-gray-100 ">Accounting</button>
                                </li>
                                <li>
                                    <button type="button" onClick={() => { setGatagory("law"); setDropdown(false) }} className="inline-flex w-full px-4 py-2 hover:bg-gray-100 ">Law</button>
                                </li>
                                <li>
                                    <button type="button" onClick={() => { setGatagory("chinese"); setDropdown(false) }} className="inline-flex w-full px-4 py-2 hover:bg-gray-100 ">Chinese</button>
                                </li>
                                <li>
                                    <button type="button" onClick={() => { setGatagory("english"); setDropdown(false) }} className="inline-flex w-full px-4 py-2 hover:bg-gray-100 ">English</button>
                                </li>
                                <li>
                                    <button type="button" onClick={() => { setGatagory("ganeral"); setDropdown(false) }} className="inline-flex w-full px-4 py-2 hover:bg-gray-100 ">Ganeral Knowledg</button>
                                </li>
                                <li>
                                    <button type="button" onClick={() => { setGatagory("electric"); setDropdown(false) }} className="inline-flex w-full px-4 py-2 hover:bg-gray-100 ">Electric</button>
                                </li>
                                <li>
                                    <button type="button" onClick={() => { setGatagory("electronic"); setDropdown(false) }} className="inline-flex w-full px-4 py-2 hover:bg-gray-100 ">Electronic</button>
                                </li>
                                <li>
                                    <button type="button" onClick={() => { setGatagory("animal"); setDropdown(false) }} className="inline-flex w-full px-4 py-2 hover:bg-gray-100 ">Animal husbandry</button>
                                </li>
                                <li>
                                    <button type="button" onClick={() => { setGatagory("other"); setDropdown(false) }} className="inline-flex w-full px-4 py-2 hover:bg-gray-100 ">Other</button>
                                </li>
                            </ul>
                        </div>
                        <div onClick={() => setResultVisibility(!resultVisibility)} className={`w-full h-full fixed left-0 bg-transparent top-0 z-10 ${resultVisibility ? "block" : "hidden"}`}></div>
                        <div className="relative w-full">
                            <input
                                autoComplete='off'
                                onKeyDown={(event) => {
                                    if (event.key == 'Enter') {
                                        handleSearchButton(event.target.data);
                                    }
                                }} onChange={(event) => { handleSearch(event.target.value); setResultVisibility(true) }} id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300  outline-none" placeholder="Search ..." required />
                            <button onClick={() => handleSearchButton(keyword)} className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span className="sr-only">Search</span>
                            </button>
                            <div className={` ${resultVisibility ? "block" : "hidden"} absolute bg-white p-4 border-2 border-gray-700 rounded-lg z-50 w-full  `}>
                                <ul>
                                    {
                                        loadResult ?
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


                                                result.map((ele, i) => <li onClick={() => handleApplySearch(ele.Title)} key={i} className='cursor-pointer justify-between items-center flex hover:text-blue-400 duration-100 hover:font-[700]'><span>{ele.Title}</span> <span>{"ប្រភេទ: ​"}{ele.type}</span> </li>)
                                            :
                                            <li>no result</li>


                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${backBTN ? "block" : "hidden"} w-full justify-center items-center flex p-4`}>
                    <button onClick={handleBackToDefaultData} className='bg-blue-600 p-2 rounded-lg text-white font-[700] '>Back</button>
                </div>
                <br />
                <div className={`w-full h-full bg-transparent fixed top-0 ${dropdown ? "block" : "hidden"}`} onClick={() => setDropdown(!dropdown)}></div>
                <br />
            </div>
            {loading ?
                <div role="status" className={`h-full w-full justify-center items-center flex`}>
                    <svg aria-hidden="true" className="w-8 mx-auto h-8 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                </div>
                :
                <BookList img={data} CardWidth="w-[16rem]" moreVissible={true} display={true} more={backBTN} language="foriegn" />
            }
        </div>
    )
}

export default ForiegnBook