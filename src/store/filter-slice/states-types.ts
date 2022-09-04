interface filterState {
  choosedCategorie: string;
  query: string;
  sorting: string;
  priceRange: {
    min: number;
    max: number;
  };
  quantity: number;
  currentImage: string;
}

export const initialState: filterState = {
  choosedCategorie: "All",
  query: "",
  sorting: "default",
  priceRange: {
    min: 0,
    max: 180,
  },
  quantity: 1,
  currentImage: "",
};
