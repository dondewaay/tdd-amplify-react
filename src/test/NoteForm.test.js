import { render, screen, fireEvent } from '@testing-library/react';
import NoteForm from "../NoteForm";

const setNotesCallback = jest.fn();
const formData = {name: '', description: ''}

beforeEach(() => {
    render(<NoteForm notes={[]} 
            setNotesCallback={setNotesCallback}
            formData={formData}/>)
});

test('should display a create note button', () => {
    const button = screen.getByTestId('note-form-submit')
  
    expect(button).toHaveTextContent('Create Note')
});

test('should display the name placeholder', () => {
    const input = screen.getByTestId('note-name-field');

    expect(input).toHaveAttribute('placeholder', 'Note Name');
});

test('should display the description placeholder', () => {
    const input = screen.getByTestId('note-description-field');

    expect(input).toHaveAttribute('placeholder', 'Note Description');
});

test('should require name and description', () => {
    const button = screen.getByTestId('note-form-submit');

    fireEvent.click(button)

    expect(setNotesCallback.mock.calls.length).toBe(0);
});