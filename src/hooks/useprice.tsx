import { useSelector } from "react-redux";
import { selectFilter } from "store/filter-slice";

export const usePrice = (items: any[]) => {
  const { priceRange } = useSelector(selectFilter);
  const filtreddata = items.filter((item) => {
    if (priceRange.min === 0 && priceRange.max === 180) {
      return items;
    } else {
      return item.price >= priceRange.min && item.price <= priceRange.max;
    }
  });

  return {
    filtreddata,
  };
};
