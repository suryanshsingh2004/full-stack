import { useEffect } from "react";
export const Home=()=>{
    const getData=async()=>{
        const response=await fetch("http://127.0.0.1:5000/home")
        const data=await response.json();
    };
    useEffect(()=>{
        getData();
    },[]);
    return(
        <>
        <h1>{title}</h1>
        <nav>

        </nav>
        </>
    );
}