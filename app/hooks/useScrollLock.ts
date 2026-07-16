"use client";

import { useEffect, useRef } from "react";

/**
 * Manages body scroll locking to prevent background scrolling.
 * Multiple components can use this hook concurrently — body scroll
 * is only restored when ALL callers have unlocked.
 *
 * Returns lock() and unlock() functions for imperative use.
 */
export function useScrollLock() {
  const lockCount = useRef(0);

  const lock = () => {
    lockCount.current++;
    document.body.style.overflow = "hidden";
  };

  const unlock = () => {
    lockCount.current = Math.max(0, lockCount.current - 1);
    if (lockCount.current === 0) {
      document.body.style.overflow = "";
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      lockCount.current = 0;
      document.body.style.overflow = "";
    };
  }, []);

  return { lock, unlock };
}
