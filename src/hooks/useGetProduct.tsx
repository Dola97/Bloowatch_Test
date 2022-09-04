import { DATA } from "src/mocks";

export const useGetProduct = (id: any) => {
  console.log("id", id);
  const product = DATA.find((item) => {
    return item.id == id;
  });
  console.log("pr", product);
  return {
    product,
  };
};
