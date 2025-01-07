import { CreateQuestionType } from '../model/CreateTaskType';

import { TaskType } from '../model/CreateTaskType';
import { CreateQuestionBase } from '../model/CreateTaskType';

export const BaseTask = (type: TaskType): CreateQuestionType => {
  const baseSkeleton: CreateQuestionBase = {
    questionId: Date.now(), // Генерация уникального ID
    type,
    title: 'Вопрос', // Пустой заголовок по умолчанию
    answers: [],
    // currentAnswer: [], // Пустая строка для текстового ответа
  };

  switch (type) {
    case 'one of':
      return {
        ...baseSkeleton,
        type: 'one of',
        answers: ['Вариант 1'], // Пустой массив ответов

        currentAnswer: '', // Пустой массив текущего ответа
      };
    case 'some of':
      return {
        ...baseSkeleton,
        type: 'some of',
        answers: ['Вариант 1'], // Пустой массив ответов
        currentAnswer: [], // Пустой массив текущих ответов
      };
    case 'text':
      return {
        ...baseSkeleton,
        answers: [],
        type: 'text',
        currentAnswer: '',
      };
    default:
      throw new Error(`Unknown task type: ${type}`);
  }
};
