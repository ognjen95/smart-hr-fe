import { ReactNode, useCallback, useMemo } from 'react'
import { Control, FieldArrayWithId, FieldValues, useFieldArray } from 'react-hook-form'
import { Loader, Paper, } from 'ui-components'

import CheckboxCard from '~components/form/fields/checkbox-field/checkbox-card-field'
import InputField from '~components/form/fields/input-field'
import { QuestionModel } from '~features/tests/preview-test/types'
import { UseFormControllerOptions } from '~hooks/use-form-controller'

export type TestQuestionProps<
  TFormValues extends FieldValues = FieldValues
> = {
  isLoading?: boolean,
  control: Control<QuestionModel>;
  text: string,
  buttons?: ReactNode[]
  index: number
  answerType?: 'text' | 'multiple' | 'single' | null | string
  onSubmit: (answerId: string) => void
} & UseFormControllerOptions<TFormValues>;

const TestQuestion = ({
  buttons,
  answerType = 'single',
  control,
  text,
  index,
  onSubmit,
  isLoading,
}: TestQuestionProps<QuestionModel>) => {
  const fieldArrayAnswers = useFieldArray({
    control,
    name: `questions.${index}.answers`,
  });

  const handleUpdateForm = useCallback((
    answer: FieldArrayWithId<QuestionModel, `questions.${number}.answers`, "id">,
    idx: number
  ) => {
    if ((answerType === 'single' && answer.answered) || isLoading) return
    onSubmit(answer.answerId)
    fieldArrayAnswers.update(idx, {
      ...answer,
      answered: !answer.answered,
    })
  }, [answerType, fieldArrayAnswers, isLoading, onSubmit])

  const answersFactory = useMemo(() => (
    <>
      {fieldArrayAnswers.fields.map((answer, idx) => {
        if (answerType === 'text') return (
          <InputField
            fieldName={`questions.${index}.answers.${idx}.answered`}
            control={control}
            key={answer.id}
          />
        )
        return (
          <CheckboxCard
            fieldName={`questions.${index}.answers.${idx}.answered`}
            control={control}
            key={answer.id}
            name={`questions.${index}.answers.${idx}.answerId`}
            text={answer.text}
            checked={answer.answered}
            onClick={() => handleUpdateForm(answer, idx)}
          />
        )
      })}
    </>
  ), [answerType, control, fieldArrayAnswers.fields, handleUpdateForm, index])

  return (
    <Paper>
      <div className="p-5 relative">
        <div className="mb-7 flex justify-between gap-2 items-center">
          <div>
            <h1 className="text-4xl">
              {text}
            </h1>
            {answerType === 'multiple' &&
              (
                <p>( Multiple correct answers )</p>
              )}
          </div>
          <div>
            <Loader isLoading={isLoading} />
          </div>
        </div>
        {answersFactory}
        {buttons && (
          <div className="mt-5 flex justify-end gap-4">
            {buttons}
          </div>
        )}
      </div>
    </Paper >
  )
}

export default TestQuestion