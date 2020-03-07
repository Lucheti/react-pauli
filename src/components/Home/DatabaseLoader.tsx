import React from 'react'
import { useConnect } from '../Utils/useConnect'
import { uploadDatabase } from '../../requests/Requests'
// import './DatabaseLoader.css'

interface Props {

}

export const DatabaseLoader: React.FC<Props> = useConnect(({state}) => {
    const { openTab } = state
    const [file, setFile] = React.useState<FormData>()

    React.useEffect(() => console.log(file), [file])

    const handleChange = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        const formData = new FormData( evt.currentTarget )
        uploadDatabase(formData)
    }


    if(openTab.identifier !== DatabasesPageId) return null
    return (
      <form onSubmit={ handleChange } >
          <input type={'file'} accept=".csv,.xls,.xlsx"/>
          <input type="submit" value={'Upload'}/>
      </form>
    )
})

export const DatabasesPageId = 'databases-page'