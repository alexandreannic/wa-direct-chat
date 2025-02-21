import {ReactNode} from 'react'
import style from './ButtonIcon.module.css'

export const ButtonIcon = ({
  children,
  ...props
}: {
  children: ReactNode
  onClick?: () => void
}) => {
  return (
    <button className={style.root} style={{fontSize: 28, width: 48, height: 48}} {...props}>
      <span className="material-icons">{children}</span>
    </button>
  )
}