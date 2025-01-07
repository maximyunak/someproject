import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Answer {
  questionId: string | number;
  answer: string | number | (string | number)[];
}

export interface AnswerState {
  answers: Answer[];
}

const initialState: AnswerState = {
  answers: [],
};

const answerSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    setAnswer: (state, action: PayloadAction<Answer>) => {
      const index = state.answers.findIndex(
        (answer) => answer.questionId === action.payload.questionId,
      );
      if (index !== -1) {
        state.answers[index] = action.payload;
      } else {
        state.answers.push(action.payload);
      }
    },
  },
});

export const { setAnswer } = answerSlice.actions;

export default answerSlice.reducer;
