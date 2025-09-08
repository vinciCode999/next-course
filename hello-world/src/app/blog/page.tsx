import { Metadata } from "next"

export const metadata:Metadata = {
  //title.absolute overwrites the parent layout title
  title: {
    absolute: "Blog"
  }
}
export default function Blog(){
  return <h1>Blog page</h1>
}