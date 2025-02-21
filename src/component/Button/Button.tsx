import style from './Button.module.css'
import clsx from 'clsx'
import {ReactNode} from 'react'

export const Button = ({
  icon,
  href,
  target,
  type = 'contained',
  className,
  children,
  ...rest
}: {
  icon?: string
  href?: string
  target?: string
  type?: 'contained' | 'inline'
  className?: string
  children?: ReactNode
  onClick?: () => void
}) => {
  const processedProps = {
    className: clsx(style.root, type === 'inline' ? style.inline : style.contained),
    children: (
      <>
        {icon && <span className={clsx('material-icons', style.icon)}>{icon}</span>}
        {children}
      </>
    ),
    ...rest,
  }
  if (href) {
    return (
      <a href={href} target={target} {...processedProps} />
    )
  }
  return (
    <button {...processedProps} />
  )
}