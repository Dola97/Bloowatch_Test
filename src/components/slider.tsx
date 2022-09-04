import React, { useState } from "react";
import {
  Box,
  Container,
  Text,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter, setPriceRange } from "store/filter-slice";

export const SliderRange = () => {
  const { priceRange } = useSelector(selectFilter);
  const dispatch = useDispatch();
  const { max, min } = priceRange;

  const _handlePriceChange = (value: any) => {
    console.log("min", value[0]);

    dispatch(
      setPriceRange({
        min: value[0],
        max: value[1],
      })
    );
  };
  console.log("min", min, max);
  return (
    <>
      <Text pt={10} color="#000000" mb="12px">
        PRICE
      </Text>
      <RangeSlider
        w="313px"
        aria-label={["min", "max"]}
        step={10}
        max={180}
        min={0}
        onChangeEnd={(val) => _handlePriceChange(val)}
      >
        <RangeSliderTrack bg="gray">
          <RangeSliderFilledTrack bg="#0B0EB5" />
        </RangeSliderTrack>
        <RangeSliderThumb boxSize={3} bg="#0C0EB6" index={0} />
        <RangeSliderThumb boxSize={3} bg="#0C0EB6" index={1} />
      </RangeSlider>
      <Text py={10} color="#000000" fontSize="14px">
        PRICE: $${min} — $${max}
      </Text>
    </>
  );
};
