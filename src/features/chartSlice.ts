import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { providersList } from '../api/providers';
import { getMinIndex } from '../utils/getMinIndex';

type State = {
  storageSlider: number;
  transferSlider: number;
  selectedBar: boolean[];
  priceList: number[];
};

type BarType = {
  id: number,
  price: number,
}

const initialState: State = {
  storageSlider: 0,
  transferSlider: 0,
  selectedBar: Array(providersList.length).fill(false),
  priceList: Array(providersList.length).fill(0),
};

const chartSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {
    setStorage: (state, action: PayloadAction<number>) => ({
      ...state,
      storageSlider: action.payload,
    }),
    setTransfer: (state, action: PayloadAction<number>) => ({
      ...state,
      transferSlider: action.payload,
    }),
    setSelectedBar: (state, action: PayloadAction<BarType>) => {
      state.priceList[action.payload.id] = action.payload.price;

      state.selectedBar = Array(providersList.length).fill(false);
      state.selectedBar[getMinIndex(state.priceList)] = true;
    },
  },
});

export default chartSlice.reducer;
export const {
  setStorage,
  setTransfer,
  setSelectedBar,
} = chartSlice.actions;
