import React from 'react'
import {useConnect} from '../Utils/useConnect'
import {uploadDatabase} from '../../requests/Requests'

/*
 import './DatabaseLoader.css'
*/

interface Props {

}

export const DatabaseLoader: React.FC<Props> = useConnect(({state}) => {
    const {openTab} = state
    const [file, setFile] = React.useState<FormData>()

    React.useEffect(() => console.log(file), [file])
    console.log("a")

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
