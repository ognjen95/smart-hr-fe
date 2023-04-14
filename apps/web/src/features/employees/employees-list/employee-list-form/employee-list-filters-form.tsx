import { FC } from "react";
import { SubmitHandler, UseFormReturn } from "react-hook-form";
import { Dropdown } from 'ui-components'

import Form from '~components/form'
import CheckboxField from '~components/form/fields/checkbox-field'

import { FIELD_STATUS_ARCHIVED, FIELD_STATUS_EMPLOYED, FIELD_STATUS_INTERVIEWING } from "../constants";
import { EmployeeFormModel } from '../types'


export type EmployeeListFormProps = {
  form: UseFormReturn<EmployeeFormModel>;
  // eslint-disable-next-line react/no-unused-prop-types
  onSubmit?: SubmitHandler<EmployeeFormModel>;
  // eslint-disable-next-line react/no-unused-prop-types
  isLoading?: boolean;
}
const EmployeeListForm: FC<EmployeeListFormProps> = ({ form }) => (
  <Form<EmployeeFormModel> form={form} formName="employees-filter-form">
    {({ control }) => (
      <>
        <Dropdown label='Filter' items={[
          {
            component: (
              <div className='flex flex-col items-start'>
                <h1 className='text-sm font-bold'>Filter by employment status</h1>
                <div className='flex items-align gap-2'>
                  <CheckboxField control={control} fieldName={FIELD_STATUS_EMPLOYED} label='Employed' />
                  <CheckboxField control={control} fieldName={FIELD_STATUS_INTERVIEWING} label='Interviewing' />
                  <CheckboxField control={control} fieldName={FIELD_STATUS_ARCHIVED} label='Archived' />
                </div>
              </div>
            )
          },
        ]}
        />
        <Dropdown label='Sort' items={[
          {
            title: 'Ascending',
            onClick: () => { form.setValue('sortBy', 'asc') },
            selected: !!(form.watch('sortBy') === 'asc')
          },
          {
            title: 'Descending',
            onClick: () => { form.setValue('sortBy', 'desc') },
            selected: !!(form.watch('sortBy') === 'desc')
          },
        ]} />
      </>
    )}

  </Form>
)

export default EmployeeListForm