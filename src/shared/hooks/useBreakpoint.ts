import { useState, useEffect } from 'react'

export function useBreakpoint(breakpoint: number): boolean {
  const [matches, setMatches] = useState(window.innerWidth <= breakpoint)

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`)
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [breakpoint])

  return matches
}
