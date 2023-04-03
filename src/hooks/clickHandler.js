import { useMemo, useRef } from "react";

export function useClickAndDoubleClickHandler(onSingleClick, onDoubleClick, latency = 250) {
  const clickCount = useRef(0);

  const clickHandler = useMemo(() => {
    return (event) => {
      clickCount.current += 1;
      setTimeout(function () {
        if (clickCount.current === 1) {
          onSingleClick(event);
        } else if (clickCount.current === 2) {
          onDoubleClick(event);
        }
        clickCount.current = 0;
      }, latency);
    };
  }, [onSingleClick, onDoubleClick, latency]);

  return clickHandler;
}
