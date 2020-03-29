import React from 'react'
import {useConnect} from '../Utils/useConnect'
import {uploadDatabase} from '../../requests/Requests'

interface Props {

}

export const DatabaseLoader: React.FC<Props> = useConnect(({state}) => {
    const {openTab} = state

    const handleChange = (evt: React.FormEvent<HTMLInputElement>) => {
        evt.preventDefault()
        const formData = new FormData()
        // @ts-ignore
        formData.append('file', evt.target.files[0])
        uploadDatabase(formData)
    }

    if (openTab.identifier !== DatabasesPageId) return null
    return (
        <div>
            <input type={'file'} accept=".csv,.xls,.xlsx" onChange={handleChange}/>
            <input type="submit" value={'Upload'}/>
        </div>
    )
})

export const DatabasesPageId = 'databases-page'
