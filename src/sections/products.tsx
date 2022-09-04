import React, { useCallback } from "react";
import { Heading, SimpleGrid } from "@chakra-ui/react";
import { ProductCard } from "components";
import { DATA } from "src/mocks";
import { useDispatch } from "react-redux";
import { addToCart } from "store/cart-slice";
import { useSearch } from "hooks/useSearch";
import { usePrice } from "hooks/useprice";

export const ProductsSection = () => {
  const dispatch = useDispatch();
  const { data } = useSearch(DATA);
  const { filtreddata } = usePrice(data);
  const _addToCart = useCallback(
    (item: any) => {
      dispatch(addToCart(item));
    },
    [dispatch]
  );
  console.log("dataaa", filtreddata);

  if (filtreddata.length === 0) {
    return <Heading width="45%">No DATA</Heading>;
  }
  return (
    <SimpleGrid
      as="section"
      spacing={10}
      justifyItems="center"
      columns={[1, 2, 3]}
      mr={[null, null, null, "37px"]}
    >
      {filtreddata.map((item, key) => (
        <React.Fragment key={`priducts_List_keys${key}`}>
          <ProductCard
            canBuy={item.canBuy}
            productid={item.id}
            name={item.name}
            clickButton={() => _addToCart(item)}
            categoires={item.categories}
            price={item.price}
            salePrice={item.salePrice}
            image={item.image}
            alt={item.name}
          />
        </React.Fragment>
      ))}
    </SimpleGrid>
  );
};
