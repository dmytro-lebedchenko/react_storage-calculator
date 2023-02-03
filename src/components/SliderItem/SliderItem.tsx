import { useEffect, useState } from 'react';
import {
  useAppDispatch,
  useAppSelector,
  useDebounce,
} from '../../app/hooks';
import { setStorage, setTransfer } from '../../features/chartSlice';
import { SliderType } from '../../types/SliderType';
import './SliderItem.scss';

type Props = {
  type: SliderType,
}

export const SliderItem: React.FC<Props> = ({ type }) => {
  const dispatch = useAppDispatch();
  const {
    storageSlider,
    transferSlider,
  } = useAppSelector(state => state.chart);

  const initialValue = (type === 'storage')
    ? storageSlider
    : transferSlider;

  const [value, setValue] = useState(initialValue);

  const title = (type === 'storage')
    ? 'Storage'
    : 'Transfer';

  const debouncedValue: number = useDebounce(value, 100);

  const handleSlide = () => {
    return (type === 'storage')
      ? dispatch(setStorage(debouncedValue))
      : dispatch(setTransfer(debouncedValue));
  };

  useEffect(() => {
    handleSlide();
  }, [debouncedValue]);

  return (
    <div className="sliders__slider slider">
      <label
        className="slider__label label"
        htmlFor={type}
      >
        {`${title}: ${value} GB`}
      </label>

      <input
        id={type}
        className="slider__input"
        type="range"
        min="0"
        max="1000"
        step={1}
        value={value}
        onChange={(event) => setValue(+event.target.value)}
      />
    </div>
  );
}
