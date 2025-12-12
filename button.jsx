import React from 'react'

export default function Button({ children, className = '', variant = 'solid', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-md transition'
  const solid = 'bg-[#C9A962] text-[#1A1A1A] hover:bg-[#B89952]'
  const outline = 'border border-white/30 text-white hover:bg-white/10'
  const classes = [base, className, variant === 'outline' ? outline : solid].join(' ')
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
