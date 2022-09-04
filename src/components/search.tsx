import { Input, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter, setQuery } from "store/filter-slice";
export const Search = () => {
  const dispatch = useDispatch();
  const { query } = useSelector(selectFilter);
  const handleChange = (event: any) => dispatch(setQuery(event.target.value));
  return (
    <>
      <Text color="#000000" mb="12px">
        SEARCH
      </Text>
      <Input
        bg="#FAFAFA"
        borderRadius="0"
        value={query}
        onChange={handleChange}
        variant="filled"
        w="337px"
        h="64px"
        placeholder="Search for a product"
        _placeholder={{
          fontSize: "14px",
          color: "#878787",
        }}
      />
    </>
  );
};
