import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { CATEGORIES } from "constants/index";
import { useDispatch, useSelector } from "react-redux";
import { setChoosedCategorie, selectFilter } from "store/filter-slice";
export const Categories = () => {
  const { choosedCategorie } = useSelector(selectFilter);
  const dispatch = useDispatch();
  const _setCategoire = (item: any) => {
    dispatch(setChoosedCategorie(item.name));
  };
  return (
    <>
      <Text color="#000000" mb="12px">
        CATEGORIES
      </Text>
      {CATEGORIES.map((item, key) => {
        const isSelected = choosedCategorie == item.name;
        return (
          <Flex
            onClick={() => _setCategoire(item)}
            key={`categories_filter_Home${key}`}
            flexDirection="column"
          >
            <Text
              py="10px"
              textAlign="left"
              fontSize="18px"
              cursor={"pointer"}
              color={isSelected ? "#0B0EB5" : "#848484"}
            >
              {item.name}
            </Text>
          </Flex>
        );
      })}
    </>
  );
};
