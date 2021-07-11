/* eslint-disable no-unused-vars */
import { useEffect, useContext, useState } from 'react'
import { io } from 'socket.io-client'
import { DeckContext } from 'spectacle'

const socket = io(
  process.env.NODE_ENV === 'development'
    ? 'ws://localhost:5000'
    : 'https://mhj9w.sse.codesandbox.io/'
)

export default function useSocket() {
  const [key, setKey] = useState()
  const [connected, setConnected] = useState(false)
  const context = useContext(DeckContext)

  useEffect(() => {
    socket.on('connect', () => {
      setConnected(true)
    })
    socket.on('disconnect', () => {
      setConnected(false)
    })
    socket.on('sync', (newPath) => {
      const url = new URLSearchParams(window.location.search)
      const newUrl = new URLSearchParams(newPath)
      const slideIndex = newUrl.get('slideIndex')
      const stepIndex = newUrl.get('stepIndex')
      const following = url.get('following') === 'true'

      if (following && context.skipTo) {
        context.skipTo({ slideIndex, stepIndex })
      }
    })
  }, [])

  useEffect(function triggerWhenKeyDown() {
    window.addEventListener('keydown', () => {
      setKey({})
    })
  }, [])

  useEffect(
    function handleTrigger() {
      const { pathname, search } = window.location
      const path = `${pathname}${search}`
      const url = new URLSearchParams(search)
      const following = url.get('following') === 'true'
      if (!following) socket.emit('sync', search)
    },
    [key]
  )
}
