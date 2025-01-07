export type TaskType = 'one of' | 'some of' | 'text';

export interface CreateITask {
  taskListName: string;
  // title: string;
  description?: string;
  questions: CreateQuestionType[];
}

export interface CreateQuestionBase {
  questionId: string | number;
  type: TaskType;
  title: string;
  answers: string[];
}

export interface CreateOneOfType extends CreateQuestionBase {
  type: 'one of';
  currentAnswer: string;
}

export interface CreateSomeOfType extends CreateQuestionBase {
  type: 'some of';
  currentAnswer: string[];
}

export interface CreateQTextType extends CreateQuestionBase {
  type: 'text';
  currentAnswer: string;
}

export type CreateQuestionType = CreateOneOfType | CreateSomeOfType | CreateQTextType;
