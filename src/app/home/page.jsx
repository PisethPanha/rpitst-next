import React from 'react'
import Home from './Home'
import { fetchbook, fetchMostDownload, fetchMostView } from './FetchBookk'

async function Page() {
  const image = await fetchbook();
  const data = await fetchMostView();
  const downloadss = await fetchMostDownload();
  console.log(data);

  return (
    <div>
        <Home images={image} datas={data} downloadss={downloadss} />
    </div>
  )
}

export default Page