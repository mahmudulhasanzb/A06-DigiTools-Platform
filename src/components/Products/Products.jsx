import React, { use } from 'react';
import ProductCards from './ProductCards/ProductCards';

const Products = ({ productDataPromise, cards, setCards }) => {
  const productData = use(productDataPromise);
  return (
    <div className="grid grid-cols-3 gap-5 mt-10 mb-20" id="product">
      {productData.map(data => {
        return (
          <ProductCards
            key={data.id}
            data={data}
            cards={cards}
            setCards={setCards}
          ></ProductCards>
        );
      })}
    </div>
  );
};

export default Products;
