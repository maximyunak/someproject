import { FC } from 'react';
import { QuestionType } from '../../model/TaskType';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';

import './Task.scss';
import { Title } from 'shared/ui/title';
import { Checkbox, FormControlLabel, FormGroup, Radio, RadioGroup, TextField } from '@mui/material';
import { setAnswer } from 'features/completeTask/model/answerSlice';

interface TaskProps {
  data: QuestionType;
}

export const Task: FC<TaskProps> = ({ data }) => {
  const dispatch = useAppDispatch();
  const questionId = data.questionId;
  const { answers } = useAppSelector((state) => state.answerSlice);

  const currentAnswer = answers.find((answer) => answer.questionId === questionId)?.answer;

  const handleRadioChange = (value: string | number) => {
    dispatch(
      setAnswer({
        questionId,
        answer: value,
      }),
    );
  };

  const handleCheckboxChange = (value: string | number) => {
    const currentValues = Array.isArray(currentAnswer) ? currentAnswer : [];

    const newValues = currentValues.includes(value)
      ? currentValues.filter((v) => v !== value)
      : [...currentValues, value];

    dispatch(
      setAnswer({
        questionId,
        answer: newValues,
      }),
    );
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setAnswer({
        questionId,
        answer: event.target.value,
      }),
    );
  };

  return (
    <div className="task shadow">
      <Title size={20}>{data.title}</Title>
      {data.description && <p className="task__desc">{data.description}</p>}
      <div className="task__answers">
        {data.type === 'one of' && (
          <RadioGroup value={currentAnswer || ''}>
            {data.answers.map((el, id) => (
              <FormControlLabel
                key={`${el}_${id}`}
                value={el}
                control={
                  <Radio
                    onChange={() => handleRadioChange(el)}
                    checked={currentAnswer === el}
                    sx={{
                      '&.Mui-checked': {
                        color: '#985ace',
                      },
                    }}
                  />
                }
                label={
                  <Title size={16} weight={500}>
                    {el}
                  </Title>
                }
              />
            ))}
          </RadioGroup>
        )}

        {data.type === 'some of' && (
          <FormGroup>
            {data.answers.map((el, id) => (
              <FormControlLabel
                key={`${el}_${id}`}
                control={
                  <Checkbox
                    checked={Array.isArray(currentAnswer) && currentAnswer.includes(el)}
                    onChange={() => handleCheckboxChange(el)}
                    value={el}
                    sx={{
                      '&.Mui-checked': {
                        color: '#985ace',
                      },
                    }}
                  />
                }
                label={
                  <Title size={16} weight={500}>
                    {el}
                  </Title>
                }
              />
            ))}
          </FormGroup>
        )}

        {data.type === 'text' && (
          <TextField
            value={currentAnswer || ''}
            onChange={handleTextChange}
            id="standard-basic"
            label="Мой ответ"
            variant="standard"
            sx={{
              '& .MuiInput-underline:after': {
                borderBottomColor: '#985ace',
              },
              '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                borderBottomColor: '#985ace',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#985ace',
              },
            }}
          />
        )}
      </div>
    </div>
  );
};
