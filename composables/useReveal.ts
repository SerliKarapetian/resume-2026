export function useReveal(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    visibleOnce: {
      opacity: 1,
      y: 0,
      transition: { delay, duration: 600, ease: [0.22, 1, 0.36, 1] },
    },
  }
}