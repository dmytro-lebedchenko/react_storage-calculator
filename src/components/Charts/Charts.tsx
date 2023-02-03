import { ChartItem } from '../ChartItem';
import { providersList } from '../../api/providers';
import './Charts.scss';

export const Charts: React.FC = () => (
  <div className="charts">
    {providersList.map(provider => (
      <ChartItem
        key={provider.id}
        provider={provider}
      />
    ))}
  </div>
);
