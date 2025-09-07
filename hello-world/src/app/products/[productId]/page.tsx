// export default async function ProductDetails(arg: { params: Promise<{ productId: string }> }) {
//   const params = await arg.params;  // wait for promise
//   const productId = params.productId;
//   return <h1>Details about product #: {productId}</h1>;
// }


export default async function ProductDetails({params}:{params: Promise<{productId: string}>}){
  const {productId} = await params;
  return<h1>Details about product #: {`${productId}`}</h1>;
}