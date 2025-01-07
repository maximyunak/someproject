import React, { ChangeEvent, MouseEvent } from 'react';

import './CreateTask.scss';
import { Button, ButtonGroup, Input } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import { addQuestion, setDescription, setTaskListName } from '../model/CreateTaskSlice';
import { BaseTask } from '../lib/BaseTask';
import { TaskType } from '../model/CreateTaskType';
import { Task } from './Task/Task';

export const CreateTask = () => {
  const data = useAppSelector((state) => state.createTaskSlice);
  console.log('🚀 ~ CreateTask ~ data:', data);

  const dispatch = useAppDispatch();

  const ChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setTaskListName(e.target.value));
  };

  const ChangeDescription = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setDescription(e.target.value));
  };

  const onCreateTask = (e: MouseEvent<HTMLButtonElement>) => {
    const type = e.currentTarget.value as TaskType;
    const task = BaseTask(type);
    dispatch(addQuestion(task));
  };

  return (
    <div className="createtask">
      <div className="createtask__bg">
        <Input
          id="standard-basic"
          placeholder="Название задания"
          value={data.taskListName}
          onChange={ChangeTitle}
          fullWidth
          sx={{
            fontSize: 34,
            fontWeight: 700,
            color: 'var(--acent-text)',
            '&:after': {
              borderBottomColor: 'var(--purple)', // Цвет линии после фокуса
            },
          }}
        />
        <Input
          id="standard-basic"
          placeholder="Описание"
          fullWidth
          onChange={ChangeDescription}
          value={data.description}
          sx={{
            marginTop: '10px',
            color: 'var(--acent-text)',
            '&:after': {
              borderBottomColor: 'var(--purple)', // Цвет линии после фокуса
            },
          }}
        />
      </div>
      {data.questions && (
        <div className="createtask__tasks mt-20">
          {data.questions.map((el, id) => (
            <Task data={el} key={`${el.title}_${id}`} />
          ))}
        </div>
      )}
      <div className="createtask__buttons mt-20">
        <ButtonGroup color="inherit" aria-label="Medium-sized button group">
          <Button onClick={onCreateTask} value="one of">
            один из списка
          </Button>
          <Button onClick={onCreateTask} value="some of">
            несколько из списка
          </Button>
          <Button onClick={onCreateTask} value="text">
            Текст
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};
