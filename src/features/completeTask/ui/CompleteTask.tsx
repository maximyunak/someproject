import React from 'react';
import { Title } from 'shared/ui/title';
import { ITask } from '../model/TaskType';
import { Task } from './Task/Task';

import './CompleteTask.scss';
import { useAppSelector } from 'shared/lib/store';

const task: ITask = {
  id: 'task1',
  taskListId: 1,
  title: 'Основы JavaScript',
  description: 'Тест на знание основ JavaScript',
  questions: [
    {
      questionId: '1',
      type: 'one of',
      title: 'Какой оператор используется для строгого сравнения в JavaScript?',
      description: 'Выберите один правильный вариант',
      answers: ['==', '===', '=', '!='],
    },
    {
      questionId: '2',
      type: 'some of',
      title: 'Выберите все встроенные типы данных в JavaScript',
      description: 'Может быть несколько правильных ответов',
      answers: ['string', 'number', 'boolean', 'undefined', 'null', 'symbol'],
    },
    {
      questionId: '3',
      type: 'text',
      title: 'Что такое замыкание (closure) в JavaScript?',
    },
  ],
};

export const CompleteTask = () => {
  const { answers } = useAppSelector((state) => state.answerSlice);
  console.log('🚀 ~ CompleteTask ~ answers:', answers);

  return (
    <div className="complete">
      <Title color="white" size={34} weight={700}>
        {task.title}
      </Title>
      <p>{task?.description}</p>

      <div className="tasks">
        {task.questions.map((data, id) => (
          <Task data={data} key={`${data.title}_${id}`} />
        ))}
      </div>
    </div>
  );
};
