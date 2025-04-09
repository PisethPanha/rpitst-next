'use client'
import React, { useState } from 'react'

function Dialog({showDialog}) {
    const [dialog, setDialog] = useState(showDialog)
  return (
    <div className={`${dialog ? "block" : "hidden"} absolute top-0 w-[90%] h-[90%] border-gray-700 border-2 flex justify-center item-ce`}>
       <div> this is dialog </div>
    </div>
  )
}

export default Dialog