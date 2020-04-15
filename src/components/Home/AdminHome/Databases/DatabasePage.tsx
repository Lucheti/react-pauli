import React, {Suspense} from 'react'
import {useConnect} from '../../../Utils/useConnect'
import { getDatabases, uploadDatabase } from '../../../../requests/Requests'
import { DatabaseList } from '../../../Lists/Database/DatabaseList/DatabaseList'
import { useGetResource } from '../../../Utils/CustomHooks'
import { Spinner } from '../../../Spinner/Spinner'
import { Title } from '../../../Title/Title'
import './DatabasePage.scss'

interface Props {

}

export const DatabasePage: React.FC<Props> = useConnect(({state}) => {
    const {openTab} = state

    const handleChange = (evt: React.FormEvent<HTMLInputElement>) => {
        evt.preventDefault()
        const formData = new FormData()
        // @ts-ignore
        formData.append('file', evt.target.files[0])
        uploadDatabase(formData)
    }

    if (openTab.identifier !== DatabasesPageId) return null

    const resource = useGetResource( getDatabases )

    return (
        <div className={'databases'}>
            <Title title={'Bases Telefonicas'}>
                <input type={'file'} accept=".csv,.xls,.xlsx" onChange={handleChange}/>
                <input type="submit" value={'Upload'}/>
            </Title>
            <Suspense fallback={<Spinner/>}>
              <DatabaseList resource={resource}/>
            </Suspense>
        </div>
    )
})

export const DatabasesPageId = 'databases-page'
