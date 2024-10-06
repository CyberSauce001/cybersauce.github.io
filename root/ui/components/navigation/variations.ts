export const variants = {
  open: {
    width: '100%',
    height: '100vh',
    top: 0,
    right: 0,
    borderRadius: 0,
    transition: {duration: 0.85, ease: [0.76, 0, 0.24, 1]}
  },
  close: {
    width: 60,
    height: 60,
    top: '1.5rem',
    right: '2rem',
    borderRadius: '40px',
    transition: {duration: 0.85, delay: 0.35, ease: [0.76, 0, 0.24, 1]}
  },
}

export const variantsMenu = {
  open: {
    border: 'solid 2px #000305'
  },
  close: {
    border: 'none'
  },
}

export const variantsPerspective = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateX: -20,
    translateY: 80,
  },
  animate: (i: number) => ({
    opacity: 1,
    rotateX: 0,
    translateX: 0,
    translateY: 0,
    transition: {
      duration: 0.25,
      delay: 0.5 + (i * 0.1),
    },
  }),
  exit: {
    opacity: 0,
  }
}