import { useState } from "react";

export function usePagination(initialIndex: number, itemsLength: number) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const forward = () => {
    if (currentIndex < itemsLength - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const back = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return {
    currentIndex,
    forward,
    back
  };
}
