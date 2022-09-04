import { useState } from "react";
import { useSelector } from "react-redux";
import { selectFilter } from "store/filter-slice";

export const useSearch = (items: any[]) => {
  const adata = Object.values(items);
  const [searchParam] = useState(["name"]);
  const { query, choosedCategorie } = useSelector(selectFilter);
  const data = adata.filter((item) => {
    if (item.categories.includes(choosedCategorie)) {
      console.log("item", item);
      return searchParam.some((newItem) => {
        return (
          item[newItem].toString().toLowerCase().indexOf(query.toLowerCase()) >
          -1
        );
      });
    }
    if (choosedCategorie == "All") {
      return searchParam.some((newItem) => {
        return (
          item[newItem].toString().toLowerCase().indexOf(query.toLowerCase()) >
          -1
        );
      });
    }
  });

  return {
    data,
  };
};
