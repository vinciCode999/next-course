"use client";
import { usePathname } from "next/navigation";

export default function NotFound() {
  //"/products/123/reviews/5".split("/") → ["", "products", "123", "reviews", "5"]
  const pathname = usePathname();
  const productId = pathname.split("/")[2];
  const productReviewId = pathname.split("/")[4];
  return (
    <h2>Review {productReviewId} not found for product {productId}.</h2>
  )
}
