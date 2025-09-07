import { Metadata } from "next";
import { resolve } from "path";
// export default async function ProductDetails(arg: { params: Promise<{ productId: string }> }) {
//   const params = await arg.params;  // wait for promise
//   const productId = params.productId;
//   return <h1>Details about product #: {productId}</h1>;
// }

type Props = {
  params: Promise<{productId: string}>;
}

export const generateMetadata = async({params}: Props):Promise<Metadata> =>{
  const id = (await params).productId;
  const title = await new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(`iphone ${id}`)
    },2000)
  })
  return{
    title: `Product ${title}`,
  }
}

export default async function ProductDetails({params}:Props){
  const {productId} = await params;
  return<h1>Details about product #: {`${productId}`}</h1>;
}