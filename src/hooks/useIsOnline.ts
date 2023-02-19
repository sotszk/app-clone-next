import { useDebugValue, useSyncExternalStore } from "react";

const subscribe = () => () => navigator.onLine;

const useIsOnline = () => {
  const isOnline = useSyncExternalStore(
    subscribe,
    () => navigator.onLine,
    () => true,
  );
  useDebugValue(isOnline ? "Online" : "Offline");
  return isOnline;
};

export default useIsOnline;
