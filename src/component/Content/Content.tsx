import {Button} from '@/component/Button/Button'
import {useEffect, useState} from 'react'
import {getCountryFromBrowserLang, getCountryFromIP} from '@/component/Content/getCurrentCountry'
import style from './Content.module.css'
import {InputPhone} from '@/component/InputPhone/InputPhone'

export const Content = () => {
  const [value, setValue] = useState<string>('')
  const [defaultCountry, setDefaultCountry] = useState<string | undefined>()

  useEffect(() => {
    getCountryFromIP().catch(getCountryFromBrowserLang).then(setDefaultCountry)
  }, [])

  useEffect(() => {
    navigator.clipboard.readText().then(setValue)
  }, [])

  return (
    <div>
      <img src="/wa-logo.png" alt="Logo" width={100} height={100} className={style.img}/>

      <InputPhone
        onClear={() => setValue('')}
        defaultCountry={defaultCountry as any}
        placeholder="Enter phone number"
        value={value}
        onChange={_ => setValue(_ as string)}
      />
      <div className={style.hint}>&nbsp;{value}</div>
      <div className={style.actions}>
        <Button icon="content_paste" type="inline" onClick={() => {
          navigator.clipboard.readText().then(setValue)
        }}>
          Paste Clipboard
        </Button>
        <Button icon="send" href={`https://wa.me/${value}`} target="_blank">
          Send Message
        </Button>
      </div>
    </div>
  )
}