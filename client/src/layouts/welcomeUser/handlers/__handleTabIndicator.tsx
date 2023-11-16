function __handleTabIndicator(
  e: React.MouseEvent,
  indicatorRef: React.MutableRefObject<HTMLSpanElement>,
) {
  const indicator: HTMLSpanElement = indicatorRef.current;
  const el = e.target as HTMLElement;

  indicator.style.left = `${el.offsetLeft}px`;
  indicator.style.width = `${el.offsetWidth}px`;
}

export default __handleTabIndicator;
