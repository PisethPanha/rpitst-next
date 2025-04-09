'use client'
import React from 'react'
import Link from 'next/link'

function Footer() {
    return (


        <footer className="bg-white rounded-lg shadow-sm m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="max-md:grid flex justify-between items-center max-md:justify-center max-md:items-center">
                    <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="https://raw.githubusercontent.com/PisethPanha/ebook_photos/refs/heads/main/download.png" className="h-16" alt="Flowbite Logo" />
                        <span style={{
                textShadow:
                  '-2px -1px 0 pink'
              }}
                className="self-center text-[30px] font-[800] whitespace-nowrap">RPITST ELIB</span>
                    </a>
                    <ul className="flex max-md:translate-x-8 flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 ">
                        <Link href="./about" ><li>
                            <p className="hover:underline me-4 md:me-6">About</p>
                        </li></Link>
                        <Link href="/about">
                            <li>
                                <p className="hover:underline me-4 md:me-6">Privacy Policy</p>
                            </li>
                        </Link>
                        <Link href="./contact">
                            <li>
                                <p className="hover:underline">Contact</p>
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sm:flex py-4 sm:items-center sm:justify-between">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.6453575020205!2d104.77576300767258!3d10.990118555176583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109763d1d600b89%3A0xbb68b88428ba4cc5!2z4Z6c4Z634Z6R4Z-S4Z6Z4Z624Z6f4Z-S4Z6Q4Z624Z6T4Z6W4Z6g4Z674Z6U4Z6F4Z-S4Z6F4Z-B4Z6A4Z6R4Z-B4Z6f4Z6X4Z684Z6Y4Z634Z6X4Z624Z6C4Z6P4Z-B4Z6H4Z-E4Z6f4Z-C4Z6T4Z6P4Z624Z6A4Z-C4Z6c!5e0!3m2!1skm!2skh!4v1740633790712!5m2!1skm!2skh"
                        width="100%"
                        height="350px"
                        className='border-0'
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-autolg:my-8" />
                <span className="block text-sm text-gray-500 text-center">© 2025 <a href="https://flowbite.com/" className="hover:underline">pisethpanha™</a>. All Rights Reserved.</span><br />
                <h1 className='text-center font-[700]'>មានសេវាកម្ម បង្កើតវេបសាយគ្រប់ប្រភេទ បង្កើតប្រព័ន្ធគ្រប់គ្រងហាង និង ឌីសាញ poster  </h1>
            </div>
        </footer>


    )
}

export default Footer