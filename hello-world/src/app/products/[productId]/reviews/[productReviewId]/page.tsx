import { notFound } from "next/navigation";

export default async function ProductReview(
  arg: {params: Promise<{productId:string, productReviewId:string}>}
){
  const params = await arg.params;
  const {productId, productReviewId} = params;

  if(parseInt(productReviewId) > 1000){
    notFound();
  }

  return(
    <h1>Review {productReviewId} for product {`${productId}`}</h1>
  )
}