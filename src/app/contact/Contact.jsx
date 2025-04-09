'use client'

import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function Contact() {
  const [BookTitle, setBookTitle] = useState("")
  const [BookID, setBookID] = useState(0)
  const [BookType, setBookType] = useState("")
  const [BookFile, setBookFile] = useState(null)
  const [BookDescrib, setBookDescrib] = useState("")
  const [BookLink, setBookLink] = useState(null)
  const [BookAuthor, setBookAuthor] = useState("")
  const [BookPublisher, setBookPublisher] = useState("")
  const [BookImage1, setBookImage1] = useState("")
  const [BookImage2, setBookImage2] = useState("")
  const [BookImage3, setBookImage3] = useState("")
  const [BookNameImage1, setBookNameImage1] = useState("")
  const [BookNameImage2, setBookNameImage2] = useState("")
  const [BookNameImage3, setBookNameImage3] = useState("")
  const [BookLanguage, setBookLanguage] = useState("")
  const [isUpload1, setIsUpload1] = useState("ADD")
  const [isUpload2, setIsUpload2] = useState("ADD")
  const [isUpload3, setIsUpload3] = useState("ADD")
  const [uploadProgress1, setUploadProgress1] = useState(0)
  const [uploadProgress2, setUploadProgress2] = useState(0)
  const [uploadProgress3, setUploadProgress3] = useState(0)
  const [uploadProgress4, setUploadProgress4] = useState(0)
  const [uploadProgress5, setUploadProgress5] = useState(0)
  const [uploadProgress6, setUploadProgress6] = useState(0)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [fileReady1, setFileReady1] = useState(0)
  const [fileReady2, setFileReady2] = useState(0)
  const [fileReady3, setFileReady3] = useState(0)
  const [fileReady4, setFileReady4] = useState(0)
  const [fileReady5, setFileReady5] = useState(0)
  const [style1, setStyle1] = useState(null)
  const [style2, setStyle2] = useState(null)
  const [style3, setStyle3] = useState(null)
  const [loading, setLoading] = useState(false)
  let images = [BookImage1, BookImage2, BookImage3]
  let upStatus = [setIsUpload1, setIsUpload2, setIsUpload3]
  const tokenTMP = "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AA"
  const GitToken = tokenTMP.slice(0, -2);
  const navigate = useRouter();


  useEffect(() => {
    const sumFileReady1 = fileReady1 + fileReady2 + fileReady3 + fileReady4 + fileReady5
    if (sumFileReady1 == 5) {

      const bookRequested = localStorage.getItem("BookRequest")
      const bookIDRequested = [BookID,]

      if (localStorage.getItem("BookRequest") == null || localStorage.getItem("BookRequest") == undefined) {
        localStorage.setItem("BookRequest", JSON.stringify(bookIDRequested))
        console.log(localStorage.getItem("BookRequest"));

      } else {
        const getBook = JSON.parse(localStorage.getItem("BookRequest")) || [];
        const pushBook = [...getBook, BookID]

        localStorage.setItem("BookRequest", JSON.stringify(pushBook))
        console.log(localStorage.getItem("BookRequest"));
      }

      alert("ស្នើរសុំរួចរាល់")
      alert("សូមទៅទំព័រតាមដានការស្នើរសុំ")
      navigate.push("/login")
      setLoading(false)
    }


    console.log("file ready1:", sumFileReady1);
  }, [fileReady1, fileReady2, fileReady3, fileReady4, fileReady5])

  // useEffect(() => {
  //   localStorage.removeItem("BookRequest")
  // },[])

  useEffect(() => {
    const sum = uploadProgress1 + uploadProgress2 + uploadProgress3 + uploadProgress4 + uploadProgress5 + uploadProgress6
    const percent = sum * 100
    setUploadProgress(percent / 600)
    console.log(uploadProgress);


  }, [uploadProgress1, uploadProgress2, uploadProgress3, uploadProgress4, uploadProgress5, uploadProgress6])

  async function handleSubmit() {
    if (
      BookTitle == "" ||
      BookDescrib == "" ||
      BookFile == "" ||
      BookAuthor == "" ||
      BookPublisher == "" ||
      BookImage1 == null ||
      BookImage2 == null ||
      BookImage3 == null ||
      BookLanguage == "" ||
      BookType == ""
    ) {
      alert("All field can not empty !!!")

    } else if (BookDescrib.length > 8000) {
      alert("អត្ថបទពិពណ៌នាអំពីសៀវភៅត្រូវមានចំនួនអក្សរតិចជាង 8000 តួរ")
    } else if (BookTitle.length > 1000) {
      alert("ចំណងជើងសៀវភៅត្រូវមានចំនួនអក្សរតិចជាង 1000 តួរ")
    } else {

      setLoading(true)
      const today = new Date();
      const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
      const dd = String(today.getDate()).padStart(2, '0');
      const yyyy = today.getFullYear();
      const formattedDate = `${mm}/${dd}/${yyyy}`;
      await axios.post("https://carefree-empathy-production.up.railway.app/add", {
        title: BookTitle,
        description: BookDescrib,
        link: BookFile.name,
        author: BookAuthor,
        publisher: BookPublisher,
        image1: BookImage1.name,
        image2: BookImage2.name,
        image3: BookImage3.name,
        language: BookLanguage,
        date: formattedDate,
        type: BookType,
        status: "false"
      },
        {
          onUploadProgress: (progressEvent) => {
            const percent = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress4(percent); // Update progress state
          },
        }).then((res) => {
          setBookID(res.data.id + 1)
          console.log(res.data.id);
          setFileReady1(1)
          for (let y = 0; y < 3; y++) {
            uploadToGitHub(images[y], upStatus[y], res.data.id + 1, y)
          }
          uploadPDFToGitHub(BookFile, (link) => {
            console.log(link);
          }, res.data.id + 1)



        })
    }
  }

  const handleImageChange = (file, setStyle) => {

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setStyle(`url(${imageUrl}) no-repeat center/contain `);
    }
  };

  const uploadToGitHub = async (file, img, id, increment) => {

    if (!file) {
      alert("Please select a file first.");
      return;
    }


    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const base64String = reader.result.split(",")[1];

      const githubUsername = "PisethPanha";
      const repoName = "ebook_photos";
      const filePath = `${id + file.name}`; // Upload directly to the root directory
      const branch = "main"; // Change branch if needed
      const token = GitToken;

      const url = `https://api.github.com/repos/${githubUsername}/${repoName}/contents/${filePath}`;

      const data = {
        message: `Upload ${filePath}`,
        content: base64String,
        branch: branch,
      };

      try {
        const response = await axios.put(url, data, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/vnd.github.v3+json",
          },
          onUploadProgress: (progressEvent) => {
            const percent = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            if (increment == 0) {
              setUploadProgress1(percent); // Update progress state
            } else if (increment == 1) {
              setUploadProgress2(percent);
            } else if (increment == 2) {
              setUploadProgress3(percent);
            }
          },
        });

        console.log("File uploaded:", response.data);

        if (increment == 0) {
          setFileReady2(1)
          console.log(fileReady1 + fileReady2 + fileReady3 + fileReady4 + fileReady5);
        } else if (increment == 1) {
          setFileReady3(1)
          console.log(fileReady1 + fileReady2 + fileReady3 + fileReady4 + fileReady5);
        } else if (increment == 2) {
          setFileReady4(1)
          console.log(fileReady1 + fileReady2 + fileReady3 + fileReady4 + fileReady5);
        }
        img("uploaded")
        console.log(filePath);


      } catch (error) {
        console.error("Error uploading file:", error.response?.data || error);

        img("fail upload, we'll upload again !!!")
        uploadToGitHub(file, img, id, increment);

      }
    };
  };

  const uploadPDFToGitHub = async (file, img, id) => {
    if (!file) {
      alert("Please select a file first.");
      return;
    }

    // Ensure only PDF files are uploaded
    if (file.type !== "application/pdf") {
      alert("Only PDF files are allowed.");
      return;
    }
    // setLoading(true)
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const base64String = reader.result.split(",")[1];

      const githubUsername = "PisethPanha";
      const repoName = "ebook_photos";
      const filePath = `${id + file.name}`; // Store PDFs in a separate folder
      const branch = "main"; // Change branch if needed
      const token = GitToken;

      const url = `https://api.github.com/repos/${githubUsername}/${repoName}/contents/${filePath}`;

      const data = {
        message: `Upload ${file.name}`,
        content: base64String,
        branch: branch,
      };

      try {
        console.log("uploading please wait....");

        const response = await axios.put(url, data, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/vnd.github.v3+json",
          },
          onUploadProgress: (progressEvent) => {
            const percent = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress5(percent); // Update progress state
          },
        });

        console.log("File uploaded:", response.data);
        const downloadUrl = `https://raw.githubusercontent.com/${githubUsername}/${repoName}/${branch}/${filePath}`;


        img(downloadUrl);

        console.log("Download Link:", downloadUrl);
        axios.get("https://carefree-empathy-production.up.railway.app/changeDownloadLink", { params: { id: id, link: downloadUrl } }).then((res) => {
          console.log(res.data);
          if (res.data.message == "updated") {
            setUploadProgress6(100);
            setFileReady5(1);
          }
        })

      } catch (error) {
        console.error("Error uploading file:", error.response?.data || error);

        img("Failed to upload. Retrying...");

        uploadPDFToGitHub(file, img, id);


      }
    };
  };

  return (
    <div className='p-4'>
      <h1 className='text-[30px] font-[700] font-khmer text-center'>ស្នើរផ្សាយសៀវភៅ</h1>
      <div className={`  overflow-y-auto overflow-x-hidden justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full block`}>
        <div role="status" className={` ${loading ? "block" : "hidden"} h-full fixed w-full justify-center items-center flex`}>
          <svg aria-hidden="true" className="w-8 mx-auto h-8 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
        <div className="relative h-full mx-auto p-4">
          <div className="relative h-full  bg-white rounded-lg shadow-sm ">

            <div role="status" className={`w-full fixed z-50 h-[100vh] top-0 left-0 backdrop-blur-md justify-center grid items-center ${loading ? "block" : "hidden"} `}>


              <div className="w-[10rem] bg-violet-700 h-[1.5rem] relative rounded-full overflow-hidden  ">
                <div className={`bg-blue-600 h-[1.5rem] rounded-full w-full absolute right-full`} style={{
                  transform: `translateX(${uploadProgress}%)`
                }} >

                </div>
                <div className='absolute z-40 flex items-center justify-center w-full'>
                  <h1 className='text-center text-white font-[800]'>{Math.round(uploadProgress)}%</h1>
                </div>
              </div>


            </div>

            <div className=" grid items-center justify-center p-4 md:p-5">
              <h3 className="uppercase mx-auto text-xl font-semibold text-gray-900 ">
                Book Title
              </h3>
              <br />
              <div className='mb-6'>
                <input
                  placeholder='ចំណងជើង (មិនត្រូវលើសពី ១០០០​ តួរអក្សរ)'
                  onChange={(event) => setBookTitle(event.target.value)}
                  type="text"
                  className=" relative font-[700] text-[20px] text-gray-700 outline-none mx-auto  border-2 border-gray-300  text-sm rounded-lg block  max-md:w-auto  w-[30rem] p-4 " />
                <p className={` ${BookTitle.length > 1000 && "text-red-600"} text-center`}>{BookTitle.length}/1000</p>
              </div>

              <h3 className="uppercase mx-auto text-xl font-semibold text-gray-900 ">
                ឯកសារ (ប្រភេទជា .pdf)
              </h3>
              <br />
              <input

                onChange={(event) => setBookFile(event.target.files[0])}
                type="file" accept='.pdf' className="mb-6 font-[700] text-[20px] text-gray-700 outline-none mx-auto  border-2 border-gray-300  text-sm rounded-lg block max-md:w-auto w-[30rem] p-4 " />
              <h3 className="uppercase mx-auto text-xl font-semibold text-gray-900 ">
                Author
              </h3>
              <br />
              <input
                placeholder='ឈ្មោះអ្នកនិពន្ធ (មិនត្រូវលើសពី ១០០០​ តួរអក្សរ)'
                onChange={(event) => setBookAuthor(event.target.value)}
                type="text" className=" font-[700] text-[20px] text-gray-700 outline-none mx-auto  border-2 border-gray-300  text-sm rounded-lg block max-md:w-auto w-[30rem] p-4 " />
              <p className={` ${BookAuthor.length > 1000 && "text-red-600 "} mb-6 text-center`}>{BookAuthor.length}/1000</p>
              
              <h3 className="uppercase mx-auto text-xl  font-semibold text-gray-900 ">
                Publisher
              </h3>
              <br />
              <input
                placeholder='ឈ្មោះអ្នកបោះផ្សាយ (មិនត្រូវលើសពី ១០០០​ តួរអក្សរ)'
                onChange={(event) => setBookPublisher(event.target.value)}
                type="text" className=" font-[700] text-[20px] text-gray-700 outline-none mx-auto  border-2 border-gray-300  text-sm rounded-lg block max-md:w-auto w-[30rem] p-4 " />
              <p className={` ${BookPublisher.length > 1000 && "text-red-600 "} mb-6 text-center`}>{BookPublisher.length}/1000</p>
              <br />

              <form className="max-w-sm grid items-center justify-center mx-auto">
                <label htmlFor="type" className="block font-khmer text-center mb-2 text-sm font-medium text-gray-900 ">ប្រភេទសៀវភៅ</label>
                <select
                  onChange={(event) => setBookType(event.target.value)}
                  id="type" className="mb-6 font-[700] text-[20px] text-gray-700 outline-none mx-auto  border-2 border-gray-300  text-sm rounded-lg block max-md:w-auto w-[30rem] p-4 " >
                  <option defaultValue="">Choose a book type</option>
                  <option value="IT">Information Technology</option>
                  <option value="constructor">Constructor</option>
                  <option value="accounting">Accounting</option>
                  <option value="agreculture">Agreculture</option>
                  <option value="law">Law</option>
                  <option value="chinese">Chinese</option>
                  <option value="english">English</option>
                  <option value="ganeral">General Knowledg</option>
                  <option value="electric">Electric</option>
                  <option value="electronic">Electronic</option>
                  <option value="animal">Animal husbandry</option>
                  <option value="other">Other</option>

                </select>
              </form>
              <form className="max-w-sm grid items-center justify-center mx-auto">
                <label htmlFor="countries" className="block mb-2 text-center text-sm font-medium text-gray-900 font-khmer ">ភាសា</label>
                <select
                  onChange={(event) => setBookLanguage(event.target.value)}
                  id="countries" className="mb-6 font-[700] text-[20px] text-gray-700 outline-none mx-auto  border-2 border-gray-300  text-sm rounded-lg block max-md:w-auto w-[30rem] p-4 " >
                  <option defaultValue="">Choose a book language</option>
                  <option value="foriegn">Foriegn</option>
                  <option value="khmer">Khmer</option>

                </select>
              </form>


              <h3 className="uppercase mx-auto text-xl font-semibold text-gray-900 ">
                ការពិព័ណ៌នា
              </h3>
              <textarea
                onChange={(event) => { setBookDescrib(event.target.value) }}
                rows="4" className="block font-[700] text-[20px] p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  " placeholder="Write your thoughts here..." ></textarea>
               <p className={` ${BookDescrib.length > 1000 && "text-red-600 "} mb-6 text-center`}>{BookDescrib.length}/8000</p>
              <br />
              <h3 className="uppercase font-khmer mx-auto text-xl font-semibold text-gray-900 ">
                រូបក្រប​ (១) និង​ រូបមាតិកា (២)
              </h3>
              <br />
              <div className="grid md:grid-cols-3 gap-4 items-center justify-center">

                <label
                  htmlFor="file-upload"
                  className=" relative flex items-center justify-center w-64 h-64 cursor-pointer rounded-xl bg-cover bg-center shadow-md"
                  style={{
                    background: style1, // Replace with your image URL


                  }}
                >
                  <input
                    id="file-upload"
                    type="file" accept=".jpg, .png"
                    onChange={(event) => { setBookImage1(event.target.files[0]); handleImageChange(event.target.files[0], setStyle1) }}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <span className="text-white font-bold bg-black bg-opacity-50 px-4 py-2 rounded-md">
                    {isUpload1}
                  </span>
                </label>
                <label
                  htmlFor="file-upload"
                  className="relative flex items-center justify-center w-64 h-64 cursor-pointer rounded-xl bg-cover bg-center shadow-md"
                  style={{
                    background: style2, // Replace with your image URL

                  }}
                >
                  <input
                    id="file-upload"
                    type="file" accept=".jpg, .png"
                    onChange={(event) => { setBookImage2(event.target.files[0]); handleImageChange(event.target.files[0], setStyle2) }}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <span className="text-white font-bold bg-black bg-opacity-50 px-4 py-2 rounded-md">
                    {isUpload2}
                  </span>
                </label>
                <label
                  htmlFor="file-upload"
                  className="relative flex items-center justify-center w-64 h-64 cursor-pointer rounded-xl bg-cover bg-center shadow-md"
                  style={{
                    background: style3, // Replace with your image URL

                  }}
                >
                  <input
                    id="file-upload"
                    type="file" accept=".jpg, .png"
                    onChange={(event) => { setBookImage3(event.target.files[0]); handleImageChange(event.target.files[0], setStyle3) }}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <span className="text-white font-bold bg-black bg-opacity-50 px-4 py-2 rounded-md">
                    {isUpload3}
                  </span>
                </label>
              </div>
            </div>
            <div className='flex justify-center items-center p-4'>
              <button onClick={handleSubmit} type="button" className="duration-200 font-khmer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">ដាក់ស្នើរ</button>
              {/* <button type="button" className="duration-200 text-white bg-gray-400 hover:bg-blue-300 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Discard</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Contact