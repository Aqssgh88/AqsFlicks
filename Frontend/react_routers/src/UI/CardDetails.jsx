import { useParams } from "react-router-dom"

export const CardDetails=()=>{
    const params=useParams();
    console.log(params);
    return <h1>Hello Movie {params.movieID}</h1>
}