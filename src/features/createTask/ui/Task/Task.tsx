import { Input, FormControl, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { updateTitle, updateType } from 'features/createTask/model/CreateTaskSlice';
import { CreateQuestionType, TaskType } from 'features/createTask/model/CreateTaskType';
import { ChangeEvent, FC, useState } from 'react';
import { useAppDispatch } from 'shared/lib/store';

import './Task.scss';
import { OneOf } from '../Answers/Test';
import { Text } from '../Answers/Text';

interface TaskProps {
  data: CreateQuestionType;
}

const selectValues = [
  { title: 'Один из списка', value: 'one of' },
  { title: 'Несколько из списка', value: 'some of' },
  { title: 'Текст', value: 'text' },
];

export const Task: FC<TaskProps> = ({ data }) => {
  // ? store
  const dispatch = useAppDispatch();

  // ! local data
  const [localTitle, setLocalTitle] = useState(data.title);

  // * fuctions

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocalTitle(e.target.value);
  };

  const handleBlur = () => {
    dispatch(updateTitle({ questionId: data.questionId, title: localTitle }));
  };

  const handleChangeType = (event: SelectChangeEvent<string>) => {
    const type = event.target.value as TaskType;

    dispatch(updateType({ questionId: data.questionId, type: type }));
  };

  return (
    <div className="task shadow">
      <div className="task__title">
        <Input
          value={localTitle}
          sx={{
            fontSize: 20,
            '&:after': {
              borderBottomColor: 'var(--purple)',
            },
            width: 0.9,
          }}
          onChange={handleTitleChange}
          onBlur={handleBlur}
        />
        <FormControl>
          <Select
            defaultValue={data?.type}
            onChange={handleChangeType}
            value={data?.type}
            sx={{
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'var(--purple)',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'var(--add-text)',
              },
            }}
          >
            {selectValues.map((el) => (
              <MenuItem key={el.value} value={el.value}>
                {el.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div className="mt-5">
        {(data?.type === 'one of' || data?.type === 'some of') && (
          <OneOf questionId={data.questionId} type={data.type} />
        )}

        {data?.type === 'text' && data && <Text data={data} />}
      </div>
    </div>
  );
};
