import { getAllProducts } from "@/http/apis";
import Link from "next/link";

const AllProducts = async () => {
  const { data: products } = await getAllProducts();
  return (
    <div>
      <p>All products page</p>

      <Link href="/products/create">Create new product</Link>

      {products ? (
        <ul>
          {" "}
          {products.map((e, i) => (
            <li key={i}>{e.name}</li>
          ))}
        </ul>
      ) : (
        <p>loading</p>
      )}
    </div>
  );
};

export default AllProducts;
