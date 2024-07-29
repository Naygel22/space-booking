import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react';
import { Faq } from './Faq';
import { questionsAndAnswers } from './Faq.constants';



test('renders all FAQ questions', () => {
  render(<Faq />);
  questionsAndAnswers.forEach((qa) => {
    const question = screen.getByText(qa.question);
    expect(question).toBeTruthy();
  });
});

test('renders all FAQ answers', () => {
  render(<Faq />);
  questionsAndAnswers.forEach((qa) => {
    const answer = screen.getByText(qa.answer);
    expect(answer).toBeTruthy();
  });
});
