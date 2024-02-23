"use client"
import Image from "next/image";
import PocketBase from 'pocketbase';

const pb = new PocketBase("https://pocketbase.rock-climbing-leaderboard.k8shomelab.online");
export default async function Home() {
  console.log(
    "jooooooooooooooooooooooooooooooohn cena CANT SEE JOHN CENA"
  )
  
  fetch("http://localhost:3000/api/hello2")
    .then((response) => response.json())
    .then((data) => console.log("Your data: ", data))
  return ( <div></div>
  
  );
}
