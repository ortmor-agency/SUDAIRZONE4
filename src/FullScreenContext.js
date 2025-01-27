// FullScreenContext.js
import React, { createContext, useContext, useState, useCallback } from "react";
import screenfull from "screenfull";

const FullScreenContext = createContext();

export const FullScreenProvider = ({ children }) => {
 // eslint-disable-next-line no-warning-comments
  const [isFullScreen, setIsFullScreen] = useState(false);
// eslint-disable-next-line no-warning-comments
  const toggleFullScreen = useCallback(() => {
    if (screenfull.isEnabled) {
      screenfull.toggle();
      setIsFullScreen(screenfull.isFullscreen);
    }
  }, []);

  const enterFullScreen = useCallback(() => {
    if (screenfull.isEnabled) {
      screenfull.request();
      setIsFullScreen(true);
    }
  }, []);

  const exitFullScreen = useCallback(() => {
    if (screenfull.isEnabled) {
      screenfull.exit();
      setIsFullScreen(false);
    }
  }, []);

  return (
    <FullScreenContext.Provider value={{ isFullScreen, toggleFullScreen, enterFullScreen, exitFullScreen }}>
      {children}
    </FullScreenContext.Provider>
  );
};

export const useFullScreen = () => useContext(FullScreenContext);
