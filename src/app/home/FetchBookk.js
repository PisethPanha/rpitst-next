'use server'
import axios from "axios"

export async function fetchbook(){
    const res = await axios.get("https://carefree-empathy-production.up.railway.app/getbook", { params: { offset: 0, limit: 10, language: "", status: "true" } })
    return res.data
    // .then((res) => { setImage(res.data); setLoading1(false) }
    
}
export async function fetchMostView(){
    const res = await axios.get("https://carefree-empathy-production.up.railway.app/most-view")
    return res.data
    // .then((res) => { setImage(res.data); setLoading1(false) }
    
}
export async function fetchMostDownload(){
    const res = await axios.get("https://carefree-empathy-production.up.railway.app/most-download")
    return res.data
    // .then((res) => { setImage(res.data); setLoading1(false) }
    
}