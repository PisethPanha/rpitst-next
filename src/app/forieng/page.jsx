import React from 'react'
import ForiegnBook from './ForiegnBook'
import { fetchbook } from './FetchBookk'

async function page() {
  const data = await fetchbook();
  return (
    <div><ForiegnBook datas={data} /></div>
  )
}

export default page