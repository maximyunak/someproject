import { Input } from '@mui/material';
import { updateCurrectAnswer } from 'features/createTask/model/CreateTaskSlice';
import { CreateQuestionType } from 'features/createTask/model/CreateTaskType';
import { ChangeEvent, useState } from 'react';
import { useAppDispatch } from 'shared/lib/store';

export const Text = ({ data }: { data: CreateQuestionType }) => {
  const dispatch = useAppDispatch();

  const [localValue, setLocalValue] = useState(data.currentAnswer);

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocalValue(e.target.value);
  };

  const handleBlur = () => {
    dispatch(updateCurrectAnswer({ questionId: data.questionId, currentAnswer: localValue }));
  };
  return (
    <div>
      <Input
        placeholder="Ответ"
        value={localValue}
        onChange={handleValueChange}
        onBlur={handleBlur}
        fullWidth
        sx={{
          '&:after': {
            borderBottomColor: 'var(--purple) !important',
          },
        }}
      />
    </div>
  );
};
