export type TaskType = 'one of' | 'some of' | 'text';

export interface ITask {
  id: string;
  taskListId: number;
  title: string;
  description?: string;
  questions: QuestionType[];
}

export interface QuestionBase {
  questionId: string | number;
  type: TaskType;
  title: string;
  description?: string;
}

export interface OneOfType extends QuestionBase {
  type: 'one of';
  answers: string[] | number[];
}

export interface SomeOfType extends QuestionBase {
  type: 'some of';
  answers: string[] | number[];
}

export interface QTextType extends QuestionBase {
  type: 'text';
}

export type QuestionType = OneOfType | SomeOfType | QTextType;
