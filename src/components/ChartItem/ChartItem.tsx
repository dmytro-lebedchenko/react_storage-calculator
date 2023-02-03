import {
  useEffect,
  useMemo,
  useState,
} from 'react';
import classNames from 'classnames';
import {
  useAppDispatch,
  useAppSelector,
  useWindowSize,
} from '../../app/hooks';
import { setSelectedBar } from '../../features/chartSlice';
import { Provider } from '../../types/Provider';
import './ChartItem.scss';

type Props = {
  provider: Provider,
}

export const ChartItem: React.FC<Props> = ({ provider }) => {
  const {
    id,
    title,
    color,
    minPayment,
    options,
   } = provider;

  const dispatch = useAppDispatch();
  const {
    storageSlider,
    transferSlider,
    selectedBar,
  } = useAppSelector(state => state.chart);

  const [option, setOption] = useState(options[0]);

  const { width } = useWindowSize();

  const price = useMemo(() => {
    const storage = (storageSlider > option.bonus)
      ? storageSlider - option.bonus
      : 0;

    const transfer = (transferSlider > option.bonus)
      ? transferSlider - option.bonus
      : 0;

    const storagePrice = storage * option.storagePrice;
    const transferPrice = transfer * option.transferPrice;

    const totalPrice = Math.round(
      ((storagePrice + transferPrice) * 100),
    ) / 100;

    return (totalPrice > minPayment)
      ? totalPrice
      : minPayment;
  }, [storageSlider, transferSlider, selectedBar, option]);

  const barWidthCondition = (width < 1024)
    ? 'auto'
    : `${price}%`;

  const barHeightCondition = (width > 1024)
    ? '100%'
    : `${price}%`;

  const titleSizeCondition = (width > 480)
    ? '16px'
    : '10px';

  const optionTitleSizeCondition = (width > 480)
    ? '14px'
    : '8px';

  const handleChange = () => {
    dispatch(setSelectedBar({ id, price }));
  }

  useEffect(() => {
    handleChange();
  }, [price]);

  return (
    <div className="charts__item chart">
      <div className="chart__bar bar">
        <div className="bar__price">
          {`${price} $`}
        </div>

        <div
          className={classNames(
            'bar__item',
             { 'bar__item--blue': selectedBar[id] && color === 'blue'},
             { 'bar__item--red': selectedBar[id] && color === 'red'},
             { 'bar__item--yellow': selectedBar[id] && color === 'yellow'},
             { 'bar__item--purple': selectedBar[id] && color === 'purple'},
          )}
          style={{
            height: barHeightCondition,
            width: barWidthCondition,
          }}
        />
      </div>

      <div className="chart-item">
        <h3
          className="chart-item__title"
          style={{
            fontSize: titleSizeCondition,
          }}
        >
          {title}
        </h3>

        {options.length > 1 && (
          <div className="chart-item__options options">
            {options.map(item => (
              <div
                key={item.title}
                className="options__option option"
                style={{
                  fontSize: optionTitleSizeCondition,
                }}
              >
                <label
                  className="option__title"
                  htmlFor={item.title}
                >
                  {item.title}
                </label>
                
                <input
                  id={item.title}
                  checked={item.title === option.title}
                  type="radio"
                  onChange={() => setOption(item)}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
