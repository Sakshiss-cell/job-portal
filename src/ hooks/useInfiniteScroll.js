import { useRef, useState, useEffect, useCallback } from "react";

const useInfiniteScroll = (callback) => {
  const [isFetching, setIsFetching] = useState(false);
  const observer = useRef(null);

  // Define `lastElementRef` using `useCallback` to ensure it doesn't recreate unless necessary
  const lastElementRef = useCallback(
    (node) => {
      if (isFetching) return; // Prevent ref callback if already fetching
      if (observer.current) observer.current.disconnect(); // Disconnect previous observer if exists

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setIsFetching(true);
        }
      });

      if (node) observer.current.observe(node); // Observe new node
    },
    [isFetching]
  );

  //   useEffect(() => {
  //     if (!isFetching) return;
  //     callback().then(() => {
  //       setIsFetching(false); // Reset fetching state after callback resolves
  //     });
  //   }, [isFetching, callback]);

  // Return both `lastElementRef` and `isFetching` to be used by the component
  return [lastElementRef, isFetching, setIsFetching];
};

export default useInfiniteScroll;
