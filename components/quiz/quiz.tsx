import { ReactNode } from "react";

interface QuizState {
  currentState: {
    question: {
      title: string;
      text: string | ReactNode;
    };
  };
}

export const Quiz = () => {};
