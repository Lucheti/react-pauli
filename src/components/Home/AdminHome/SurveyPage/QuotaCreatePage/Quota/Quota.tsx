import React from 'react'
import './Quota.scss'
import { Input } from '../../../../../Forms/Input/Input'
import { Select } from '../../../../../Forms/Select/Select'
import { QuotaSegments } from '../Constants'
import { changeInput } from '../../../../../../Actions/FormActions'
import { QuotasField, SurveyFormId } from '../../Constants'
import { useConnect } from '../../../../../Utils/useConnect'
import { NewCuota } from '../../../../../../types/Cuota'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons/faMinusCircle'

interface Props {
  index: number
  newQuota: NewCuota
}

export const Quota: React.FC<Props> = useConnect(({index, newQuota, dispatch, state}) => {

  const { forms } = state
  const surveyForm = forms[SurveyFormId]
  const { quotas } = surveyForm

  const [quota, setQuota] = React.useState<NewCuota>(newQuota);
  const towns = [{ label: "ciudad", value: "1" }]

  React.useEffect(() => updateQuota(),[quota])

  const updateQuota = () => {
    const newQuotas: NewCuota[] = [...quotas]
    newQuotas[index] = quota
    dispatch(changeInput(SurveyFormId, QuotasField, newQuotas))
  }

  const changeTotalValue = (_: string, newTotalValue: string) => setQuota( {...quota, totalValue: newTotalValue})
  const changeTownId = (_: string, newTownId: string) => setQuota({...quota, townId: newTownId})
  const changeSegment = (segment: string, minPercent: string) =>
    setQuota({
      ...quota,
      values: quota.values.filter( value => value.segment !== segment).concat({segment, minimumPercentage: minPercent})
    })
  const deleteQuota = () => dispatch(changeInput(SurveyFormId, QuotasField, [...quotas.filter( (_, i) => i !== index)]))

    return (
    <div className={"cuota-container"}>
      <div className={"cuota"}>
        <div className={"values"}>
          <Input
            className={"total-value"}
            errorMessage={""}
            isValid={true}
            handleChange={ changeTotalValue }
            name={"total"}
            placeholder={"Valor total"}
            value={newQuota.totalValue}
          />
          <Select
            className={"town"}
            errorMessage={""}
            isValid={true}
            handleChange={ changeTownId }
            name={"town"}
            data={towns}
            placeholder={"Ciudad"}
            value={ towns.find( town => town.value === newQuota.townId)?.label }
          />
        </div>
        <div className={"segments"}>
          {QuotaSegments.map(segment => (
            <div className={"segment"}>
              <p className={"gender"}>{segment.gender}</p>
              <div className={"input-wrapper"}>
                {segment.segments.map(segment => (
                  <div className={'segment-section'}>
                    <p>{segment.age}</p>
                    <Input
                      className={"segment-input"}
                      errorMessage={""}
                      isValid={true}
                      handleChange={ changeSegment }
                      name={segment.value}
                      placeholder={"Porcentaje minimo"}
                      value={newQuota.values.find( value => value.segment === segment.value)?.minimumPercentage}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <FontAwesomeIcon className={'icon'} icon={faMinusCircle} size={'2x'} onClick={ deleteQuota }/>
      </div>
    </div>
  );
});
