function __handleConsumers(
  action: 'previous' | 'next',
  totalConsumer: number,
  count: {
    state: number;
    stateHandler: React.Dispatch<React.SetStateAction<number>>;
  },
) {
  switch (action) {
    case 'next': {
      if (count.state === totalConsumer - 1) return alert('Reached End');
      return count.stateHandler((curr) => curr + 1);
    }
    case 'previous': {
      if (count.state === 0) return alert('Reached Starting');
      return count.stateHandler((curr) => curr - 1);
    }
  }
}

export default __handleConsumers;
