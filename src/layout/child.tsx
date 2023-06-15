import React, { forwardRef,useImperativeHandle } from 'react'

interface ChildProps {
  count: number
}

export  interface childRef {
  getFocus: () => void
}

export const Child = forwardRef<childRef, ChildProps>((props, ref) => {
  const { count } = props
  const inputRef = React.useRef<HTMLInputElement>(null)

  useImperativeHandle(ref, () => ({
    getFocus: () => {
      inputRef.current?.focus()
    },
  }))

  return (
    <div>
      <input ref={inputRef} />
      <p>count: {count}</p>
    </div>
  )
})
