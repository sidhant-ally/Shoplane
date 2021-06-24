import React from "react";
import ProdcutCard from "../ProductCard";

class ProductGrid extends React.Component {
    render() {
        const { loading, products } = this.props;
        return (
            <div className="App m-4">
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <h2 className="section-heading">Products</h2>
                )}
                {!loading && products.length === 0 ? (
                    <div> No Products Found</div>
                ) : (
                    <div className="d-flex flex-wrap">
                        {products.map((item) => (
                            <ProdcutCard product={item} key={item.id} />
                        ))}
                    </div>
                )}
            </div>
        );
    }
}

export default ProductGrid;
