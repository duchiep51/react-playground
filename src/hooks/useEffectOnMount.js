import { useEffect, useRef } from "react";

export default function useEffectOnMount(cb, dependencies = []) {
  const ref = useRef(true);

  useEffect(() => {
    console.log("effect on mount");
    if (!ref.current) {
      return cb();
    }

    ref.current = false;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
}
