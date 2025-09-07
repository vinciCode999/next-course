export default async function ProductReview(
  arg: {params: Promise<{productId:string, productReviewId:string}>}
){

  const params = await arg.params;
  const {productId, productReviewId} = params;

  return(
    <h1>Review {productReviewId} for product {`${productId}`}</h1>
  )
}