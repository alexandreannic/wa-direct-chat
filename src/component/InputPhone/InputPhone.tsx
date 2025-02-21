import PhoneInput from 'react-phone-number-input'
import {ComponentProps} from 'react'
import {ButtonIcon} from '@/component/ButtonIcon/ButtonIcon'
import style from './InputPhone.module.css'

export const InputPhone = ({onClear, ...props}: { onClear?: () => void } & ComponentProps<typeof PhoneInput>) => {
  return (
    <div className={style.root}>
      <PhoneInput
        style={{flex: 1}}
        {...props}
      />
      <ButtonIcon onClick={onClear}>clear</ButtonIcon>
    </div>
  )
}