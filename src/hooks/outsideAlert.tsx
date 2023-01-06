import { useEffect, useRef, useState } from 'react'

export const useOutsideAlert = (initialValue: boolean) => {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState<boolean>(initialValue)

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setVisible(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [ref])

  return { visible, setVisible, ref }
}