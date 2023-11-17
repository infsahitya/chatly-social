function __handleConsumer(
  e: React.MouseEvent,
  action: 'previous' | 'next',
  totalConsumer: number,
  count: {
    state: number;
    stateHandler: React.Dispatch<React.SetStateAction<number>>;
  },
) {
  e.preventDefault();
  switch (action) {
    case 'next': {
      if (count.state < totalConsumer - 1)
        return count.stateHandler((curr) => curr + 1);
      break;
    }
    case 'previous': {
      if (count.state > 0) return count.stateHandler((curr) => curr - 1);
      break;
    }
  }
}

export default __handleConsumer;
