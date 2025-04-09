'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import BookCard from "../react/components/BookCard";



function Login() {
    const [book, setBook] = useState([])
    const [bookExist, setBookExist] = useState(false)
    const bookRequest = JSON.parse(localStorage.getItem("BookRequest")) || []

    useEffect(() => {
        const bookRequest = JSON.parse(localStorage.getItem("BookRequest")) || []
        console.log(bookRequest);
        

        
            
                axios.get("https://carefree-empathy-production.up.railway.app/get-user-book-request", { params: { items: bookRequest } })
                    .then((res) =>  setBook(res.data))
          
        // console.log(localStorage.getItem("BookRequest"));
        
        

    }, [])

    function setTonull(){
       
        localStorage.setItem("BookRequest", null )
    }

    useEffect(() => {
        console.log(book.length);
        // setTonull()
        
    },[book])
    return (

        <div>
            <br />
                <h1 className='text-[30px] font-[700] border-b-8 border-blue-500 max-w-[30rem] mx-auto text-center uppercase'>Your Book</h1>
                <br />
                <p className={`text-center ${book.length == 0 ? "hidden" : "block"}`}>ការស្នើរសុំបោះផ្សាយសៀវភៅរបស់នឹងត្រូវពិនិត្យមើលឡើងវិញយ៉ាងយូរ ៣​ថ្ងៃ មុនអនុញ្ញាតិបោះផ្សាយ</p>
            <div className={`grid ${bookExist ? "" : "grid-cols-3"} gap-4 max-md:grid-cols-1 justify-center items-center p-8`}>
                {
                book.length != 0 &&
                book.map((ele, i) =>
                    
                        <BookCard key={i} status={true} cardWidth={"w-[18rem]"} acception={ele.status == "false" ? "reviewing" : "published" } read={ele.read_link} download={ele.download} view={ele.view} id={ele.id} img={ele.img} title={ele.Title} describ={ele.describetion} link={ele.link_download} img1={ele.img_content1} img2={ele.img_content2} img3={ele.img_content3} author={ele.autor} publish_date={ele.publish_date} publisher={ele.publisher} />
                   
                )
            }
            {
                book.length == 0 &&
                <div className=" w-full absolute ">
                <p className="text-center mx-auto font-khmer ">អ្នកមិនមានសៀវភៅដែលបានដាក់ស្នើរទេ</p>
                </div>
            }

            </div>
        </div>


    );
}

export default Login;
