import { Checkbox, FormControlLabel, Input, Radio, RadioGroup } from '@mui/material';
import { updateAnswers, updateCurrectAnswer } from 'features/createTask/model/CreateTaskSlice';

import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import { LabelForm } from './LabelForm';

export const OneOf = ({ questionId, type }: { questionId: string | number; type: string }) => {
  // ! store
  const { questions } = useAppSelector((state) => state.createTaskSlice);
  const dispatch = useAppDispatch();

  // ? task data
  const data = questions.find((el) => el.questionId === questionId);

  // * local states
  const [localAnswers, setLocalAnswers] = useState<string[]>(['Вариант 1']);

  const [currentAnswer, setCurrentAnswer] = useState<string | string[]>(
    data?.currentAnswer || (type === 'one of' ? '' : []),
  );

  const inputRefs = useRef<HTMLInputElement[]>([]);

  // Синхронизация локального состояния с Redux
  useEffect(() => {
    if (data) {
      setLocalAnswers(data.answers || []);
      setCurrentAnswer(data.currentAnswer || (type === 'one of' ? '' : []));
    }
  }, [data]);

  useEffect(() => {
    dispatch(updateAnswers({ questionId, answers: localAnswers }));
  }, [localAnswers, dispatch, questionId]);

  useEffect(() => {
    dispatch(updateCurrectAnswer({ questionId, currentAnswer }));
  }, [currentAnswer, dispatch, questionId]);

  // Добавление нового варианта
  const handleAddVariant = () => {
    const updatedAnswers = [...localAnswers, `Вариант ${localAnswers.length + 1}`];
    setLocalAnswers(updatedAnswers);
    setTimeout(() => {
      const inputElement = inputRefs.current[localAnswers.length];
      inputElement.focus();
      inputElement.select();
    }, 0);
  };

  // Удаление варианта
  const handleDeleteVariant = (id: number) => {
    const updatedAnswers = localAnswers.filter((_, index) => index !== id);
    setLocalAnswers(updatedAnswers);

    // Удаление из выбранных ответов
    if (type === 'some of') {
      setCurrentAnswer((prev) => (prev as string[]).filter((_, index) => index !== id));
    }
  };

  // Изменение текста варианта
  const handleChangeAnswerTitle = (answerTitle: string, id: number) => {
    const updatedAnswers = [...localAnswers];
    updatedAnswers[id] = answerTitle;
    setLocalAnswers(updatedAnswers);
  };

  // Обработка выбора ответа
  const handleChangeAnswer = (answer: string) => {
    if (type === 'one of') {
      setCurrentAnswer(answer);
    } else if (type === 'some of') {
      setCurrentAnswer(
        (prev) =>
          (prev as string[]).includes(answer)
            ? (prev as string[]).filter((a) => a !== answer) // Удаление
            : [...(prev as string[]), answer], // Добавление
      );
    }
  };

  if (!data || !('answers' in data)) {
    return <div>Данные отсутствуют или вопрос не поддерживает варианты ответа</div>;
  }

  return (
    <div>
      <RadioGroup
        sx={{
          '.MuiTypography-body1': {
            width: '100% !important',
          },
        }}
      >
        {localAnswers.map((el, id) => (
          <FormControlLabel
            className="answer"
            key={`${el}_${id}`}
            value={el}
            sx={{ marginRight: 0 }}
            control={
              type === 'one of' ? (
                <Radio
                  checked={currentAnswer === el}
                  onChange={() => handleChangeAnswer(el)}
                  sx={{
                    '&.Mui-checked': {
                      color: '#985ace',
                    },
                    margin: 0,
                  }}
                />
              ) : (
                <Checkbox
                  checked={(currentAnswer as string[]).includes(el)}
                  onChange={() => handleChangeAnswer(el)}
                  sx={{
                    '&.Mui-checked': {
                      color: '#985ace',
                    },
                    margin: 0,
                  }}
                />
              )
            }
            label={
              <LabelForm
                el={el}
                id={id}
                onChange={handleChangeAnswerTitle}
                inputRefs={inputRefs}
                handleDeleteVariant={handleDeleteVariant}
              />
            }
          />
        ))}
        <FormControlLabel
          onClick={handleAddVariant}
          className="radio"
          control={
            type === 'one of' ? (
              <Radio
                checked={false}
                disabled
                sx={{
                  '&.Mui-checked': {
                    color: '#985ace',
                  },
                  margin: 0,
                }}
              />
            ) : (
              <Checkbox
                checked={false}
                disabled
                sx={{
                  '&.Mui-checked': {
                    color: '#985ace',
                  },
                  margin: 0,
                }}
              />
            )
          }
          label={
            <Input
              placeholder="Добавить вариант"
              value=""
              sx={{
                fontSize: 16,
                '&:after': {
                  borderBottomColor: 'var(--purple) !important',
                },
                cursor: 'text',
              }}
            />
          }
        />
      </RadioGroup>
    </div>
  );
};
