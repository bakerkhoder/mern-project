import axios from "axios"
const url ="http://localhost:500-/posts"

export const fetchposts=()=>axios.get(url)