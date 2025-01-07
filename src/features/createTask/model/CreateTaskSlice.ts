import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CreateITask, CreateQuestionType } from './CreateTaskType';

// Define the initial state
const initialState: CreateITask = {
  taskListName: 'Название задания',
  description: '',
  questions: [],
};

const createTaskSlice = createSlice({
  name: 'createTask',
  initialState,
  reducers: {
    // Set the task list name
    setTaskListName(state, action: PayloadAction<string>) {
      state.taskListName = action.payload;
    },
    // Set the task description
    setDescription(state, action: PayloadAction<string | undefined>) {
      state.description = action.payload;
    },
    // Add a new question
    addQuestion(state, action: PayloadAction<CreateQuestionType>) {
      state.questions.push(action.payload);
    },

    updateTitle(state, action) {
      const { questionId, title } = action.payload;
      const index = state.questions.findIndex((q) => q.questionId === questionId);

      state.questions[index].title = title;
    },
    updateType(state, action) {
      const { questionId, type } = action.payload;
      const index = state.questions.findIndex((q) => q.questionId === questionId);
      const question = state.questions[index];

      question.type = type;
      question.currentAnswer = [];
    },

    updateAnswers(state, action) {
      const { questionId, answers } = action.payload;
      const index = state.questions.findIndex((q) => q.questionId === questionId);

      if (index !== -1) {
        const question = state.questions[index];

        if (question.type === 'one of' || question.type === 'some of') {
          question.answers = answers;
        }
      }
    },

    updateCurrectAnswer(state, action) {
      const { questionId, currentAnswer } = action.payload;
      const index = state.questions.findIndex((q) => q.questionId === questionId);

      if (index !== -1) {
        const question = state.questions[index];

        question.currentAnswer = currentAnswer;
      }
    },

    removeQuestion(state, action: PayloadAction<string | number>) {
      state.questions = state.questions.filter((q) => q.questionId !== action.payload);
    },
  },
});

export const {
  setTaskListName,
  setDescription,
  addQuestion,
  removeQuestion,
  updateTitle,
  updateType,
  updateAnswers,
  updateCurrectAnswer,
} = createTaskSlice.actions;

export default createTaskSlice.reducer;
