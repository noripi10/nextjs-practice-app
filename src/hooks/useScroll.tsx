import { useEffect, useState, useCallback } from 'react'

export const useScroll = () => {
  const [displayScrollReset, setDisplayScrollReset] = useState(false)

  const onScrollTop = useCallback(() => {
    window.scrollTo(0, 0)
  }, [])

  const scrollEventHandler = useCallback((event: Event) => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    // requestAnimationFrame(() => {
    // headerの高さ100pxよりスクロール位置が下がったらコントロールを表示する
    if (scrollTop > 100) {
      setDisplayScrollReset(true)
    } else {
      setDisplayScrollReset(false)
    }
    // });
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', scrollEventHandler)

    return () => {
      window.removeEventListener('scroll', scrollEventHandler)
    }
  }, [scrollEventHandler])

  return {
    displayScrollReset,
    onScrollTop,
  }
}
