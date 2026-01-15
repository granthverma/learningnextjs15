 export default async function ProductsDetails ({
    params,
 }: {params:Promise <{productid:string}>;
}) {
    const productId = (await params).productid;

    return (
      <h1> Details about Product {productId} </h1>
    );
  
}

  
