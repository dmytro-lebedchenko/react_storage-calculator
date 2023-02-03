import { SliderType } from '../../types/SliderType';
import { SliderItem } from '../SliderItem';
import './Sliders.scss';

export const Sliders: React.FC= () => {
  const sliders: SliderType[] = ['storage', 'transfer'];

  return (
    <div className="sliders">
      {sliders.map(item => (
        <SliderItem
          key={item}
          type={item}
        />
      ))}
    </div>
  );
}
