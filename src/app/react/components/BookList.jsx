'use client'
import axios from 'axios'
import BookCard from './BookCard'
import { useEffect, useState } from 'react'
function BookList({ CardWidth, display ,img, more, moreVissible, language }) {
  const [data, setData] = useState(img)
  const [moree, setMore] = useState(more)
  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(10)
  useEffect(() => {
    setData(img)
    setMore(more)
  }, [img, more])
  function fetchMore() {
    axios.get("https://carefree-empathy-production.up.railway.app/getbook", { params: { offset: offset + 10, limit: limit, language: language, status: "true" } }).then((res) => {
      console.log(res.data.length);
      if (res.data.length != 0) {
        setData([...data, ...res.data])
        setMore(false)
        setOffset(offset + 10)
      } else {
        setMore(true)
      }

    })

  }

  return (
    <div className='grid justify-center items-center w-full '>
      <div className={`${display ? "grid grid-cols-3 max-sm:grid-cols-1 gap-4 max-maxmd:grid-cols-2 justify-center items-center p-8" : "flex overflow-x-scroll w-full gap-8 p-8"}`}>
        {data != 0 ? data.map((ele, i) => <BookCard key={i} status={false} cardWidth={CardWidth} read={ele.read_link} download={ele.download} view={ele.view} id={ele.id} img={ele.img} title={ele.Title} describ={ele.describetion} link={ele.link_download} img1={ele.img_content1} img2={ele.img_content2} img3={ele.img_content3} author={ele.autor} publish_date={ele.publish_date} publisher={ele.publisher} />) : <div className='w-[10rem] mx-auto '>no result</div>}

      </div>
      
      <button onClick={fetchMore} className={`${moree ? "hidden" : "block"} ${moreVissible ? "block" : "hidden"} font-[700] text-[20px] text-white bg-blue-700 hover:bg-pink-700 duration-100 hover:shadow-xl hover:shadow-pink-400 w-[10rem] mx-auto rounded-lg `}>More</button>
      <button className={`${moree ? "block" : "hidden"} ${moreVissible ? "block" : "hidden"} font-[700] text-[20px] text-white bg-blue-400 duration-100 hover:shadow-xl hover:shadow-pink-400 w-[10rem] mx-auto rounded-lg `}>No More</button>
    </div>
  )
}
export default BookList;