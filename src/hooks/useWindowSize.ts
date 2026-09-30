import React, { useState, useEffect } from 'react'

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowSize
}
