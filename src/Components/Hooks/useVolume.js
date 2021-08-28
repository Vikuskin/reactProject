import { useState } from 'react'

export const useVolume = () => {
  const [volume, setVolume] = useState()
  const changeVolume = e => {
    setVolume(e.target.value)
  }
  return {volume, changeVolume}
} 