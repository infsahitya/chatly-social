function __handleConsumers(
  e: React.MouseEvent,
  action: 'previous' | 'next',
  count: {
    state: number;
    stateHandler: React.Dispatch<React.SetStateAction<number>>;
  },
) {
  e.preventDefault();
  switch (action) {
    case 'next': {
      return count.stateHandler((curr) => curr + 1);
    }
    case 'previous': {
      if (count.state === 0) return alert('Reached Starting');
      return count.stateHandler((curr) => curr - 1);
    }
  }
}

export default __handleConsumers;
