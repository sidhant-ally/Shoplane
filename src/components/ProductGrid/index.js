import React from "react";
import ProdcutCard from "../ProductCard";

const ProductGrid = ({ loading, products }) => {
    return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : products.length === 0 ? (
                <div> No Products Found</div>
            ) : (
                <div className="d-flex flex-wrap">
                    {products.map((item) => (
                        <ProdcutCard product={item} key={item.id} />
                    ))}
                </div>
            )}
        </>
    );
}

export default ProductGrid;
