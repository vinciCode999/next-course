export default function ProductReviewList(){
  type productObj = {
    id:number;
    name: string;
    stats:string;
  }

  const reviewArray = [
    {
      id: 1,
      name: "iphone 16",
      stats: "🎈🎈🎈🎈"
    },
    {
      id: 2,
      name: "samsung smart Tv",
      stats: "🎈🎈🎈"
    },
    {
      id: 3,
      name: "samsung S24 ultra",
      stats: "🎈🎈🎈🎈🎈"
    }
  ]

  return(
    <div>
      <h1>Product review list</h1>
      <ul>
        {
          reviewArray.map((product:productObj)=>(
            <li key={product.id}
              className="h-8 p-2 bg-gray-500 text-white rounded-lg max-w-md"
            >
              {product.name}, reviews: {product.stats}

            </li>
          ))
        }
      </ul>
    </div>
  )
}