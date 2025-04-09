'use client'
import axios from 'axios';
import React, { useState } from 'react'


function BookType({ routeName, childData }) {
    const [dropdown, setDropdown] = useState(false);
    const [catagory, setGatagory] = useState("")
    const [keyword, setKeyword] = useState("")
    const [result, setResult] = useState([])
    const [resultVisibility, setResultVisibility] = useState(false)
    
    function handleSearch(key) {
        axios.get("http://localhost:3000/type", { params: { keyword: key, catagory: catagory } }).then((res) => {setResult(res.data); console.log(res.data);})
        
        
    }
    function handleSearchButton(key) {
        axios.get("http://localhost:3000/type", { params: { keyword: key, catagory: catagory } }).then((res) => console.log(typeof(childData))
        )
        
        
    }

    return (
        <div className=''>
            <br />
            <h1 className='text-[30px] font-[700] border-b-8 border-blue-500 max-w-[30rem] mx-auto text-center uppercase'>{routeName}</h1>
            <br />


            <div className="max-w-lg mx-auto  ">
                <div className="flex relative">
                    <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Your Email</label>
                    <button onClick={() => setDropdown(!dropdown)} id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 outline-none" type="button"> {catagory == "" ? "All Catagory" : catagory} <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg></button>
                    <div id="dropdown" className={`z-10 ${dropdown ? "block" : "hidden"} bg-white divide-y absolute mt-11 divide-gray-100 rounded-lg shadow w-auto `}>
                        <ul className="py-2 text-sm text-gray-700 " >
                            <li>
                                <button type="button" onClick={() => { setGatagory("IT"); setDropdown(false) }} className="inline-flex w-full px-4 py-2 hover:bg-gray-100">Information Technology</button>
                            </li>
                            <li>
                                <button type="button" onClick={() => { setGatagory("constructor"); setDropdown(false) }} className="inline-flex w-full px-4 py-2 hover:bg-gray-100">Constructor</button>
                            </li>
                            <li>
                                <button type="button" onClick={() => { setGatagory("agreculture"); setDropdown(false) }} className="inline-flex w-full px-4 py-2 hover:bg-gray-100">Agreculture</button>
                            </li>
                            <li>
                                <button type="button" onClick={() => { setGatagory("accounting"); setDropdown(false) }} className="inline-flex w-full px-4 py-2 hover:bg-gray-100">Accounting</button>
                            </li>
                            <li>
                                    <button type="button" onClick={() => { setGatagory("law"); setDropdown(false) }} className="inline-flex w-full px-4 py-2 hover:bg-gray-100">Law</button>
                                </li>
                                <li>
                                    <button type="button" onClick={() => { setGatagory("chinese"); setDropdown(false) }} className="inline-flex w-full px-4 py-2 hover:bg-gray-100">Chinese</button>
                                </li>
                                <li>
                                    <button type="button" onClick={() => { setGatagory("english"); setDropdown(false) }} className="inline-flex w-full px-4 py-2 hover:bg-gray-100">English</button>
                                </li>
                                <li>
                                    <button type="button" onClick={() => { setGatagory("ganeral"); setDropdown(false) }} className="inline-flex w-full px-4 py-2 hover:bg-gray-100">Ganeral Knowledg</button>
                                </li>
                                <li>
                                    <button type="button" onClick={() => { setGatagory("electric"); setDropdown(false) }} className="inline-flex w-full px-4 py-2 hover:bg-gray-100">Electric</button>
                                </li>
                                <li>
                                    <button type="button" onClick={() => { setGatagory("electronic"); setDropdown(false) }} className="inline-flex w-full px-4 py-2 hover:bg-gray-100">Electronic</button>
                                </li>
                                <li>
                                    <button type="button" onClick={() => { setGatagory("animal"); setDropdown(false) }} className="inline-flex w-full px-4 py-2 hover:bg-gray-100">Animal husbandry</button>
                                </li>
                                <li>
                                    <button type="button" onClick={() => { setGatagory("other"); setDropdown(false) }} className="inline-flex w-full px-4 py-2 hover:bg-gray-100">Other</button>
                                </li>
                        </ul>
                    </div>
                    <div onClick={() => setResultVisibility(!resultVisibility)} className={`w-full h-full fixed left-0 bg-transparent top-0 z-10 ${resultVisibility ? "block" : "hidden"}`}></div>
                    <div className="relative w-full">
                        <input onChange={(event) => {handleSearch(event.target.value); setResultVisibility(true)}} id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300  outline-none" placeholder="Search ..." required />
                        <button onClick={() => handleSearchButton(keyword)} className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                        <div className={` ${resultVisibility ? "block" : "hidden"} absolute bg-white p-4 border-2 border-gray-700 rounded-lg z-50 w-full  `}>
                            <ul>
                            {result.length != 0 ? result.map((ele, i) => <li key={i}  className='cursor-pointer justify-between items-center flex hover:text-blue-400 duration-100 hover:font-[700]'><span>{ele.Title}</span> <span>{"ប្រភេទ: ​"}{ele.type}</span> </li>) : <li>no result</li>}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`w-full h-full bg-transparent fixed top-0 ${dropdown ? "block" : "hidden"}`} onClick={() => setDropdown(!dropdown)}></div>
            <br />


        </div>
    )
}

export default BookType