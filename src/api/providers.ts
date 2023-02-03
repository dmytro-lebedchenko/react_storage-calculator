import { Provider } from "../types/Provider"

export const providersList: Provider[] = [
  {
    id: 0,
    title: 'Backblaze',
    minPayment: 7,
    maxPayment: 1000,
    color: 'red',
    options: [{
      title: '',
      storagePrice: 0.005,
      transferPrice: 0.01,
      bonus: 0
    }]
  },
  {
    id: 1,
    title: 'Bunny',
    minPayment: 0,
    maxPayment: 10,
    color: 'yellow',
    options: [{
      title: 'HDD',
      storagePrice: 0.01,
      transferPrice: 0.01,
      bonus: 0
    }, {
      title: 'SSD',
      storagePrice: 0.02,
      transferPrice: 0.01,
      bonus: 0
    }]
  },
  {
    id: 2,
    title: 'Scaleway',
    minPayment: 0,
    maxPayment: 1000,
    color: 'purple',
    options: [{
      title: 'Multi',
      storagePrice: 0.06,
      transferPrice: 0.02,
      bonus: 75
    }, {
      title: 'Single',
      storagePrice: 0.03,
      transferPrice: 0.02,
      bonus: 75
    }]
  },
  {
    id: 3,
    title: 'Vultr',
    minPayment: 5,
    maxPayment: 1000,
    color: 'blue',
    options: [{
      title: '',
      storagePrice: 0.01,
      transferPrice: 0.01,
      bonus: 0
    }]
  }
]
