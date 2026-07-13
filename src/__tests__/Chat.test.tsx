import { render, screen } from '@testing-library/react';
import Chat from '@/app/components/Chat/Chat';

// Mock scrollIntoView
Element.prototype.scrollIntoView = jest.fn();

describe('Chat Component', () => {
  it('should render chat header', () => {
    render(<Chat />);
    expect(screen.getByText('Chat with us')).toBeInTheDocument();
    expect(screen.getByText("We're here to help")).toBeInTheDocument();
  });

  it('should render initial messages', () => {
    render(<Chat />);
    expect(screen.getByText('Hi! How can I help you today?')).toBeInTheDocument();
    expect(
      screen.getByText("I'm interested in your portfolio projects")
    ).toBeInTheDocument();
  });

  it('should render input field and send button', () => {
    render(<Chat />);
    const input = screen.getByPlaceholderText('Type your message...');
    const sendButton = screen.getByRole('button', { name: 'Send' });

    expect(input).toBeInTheDocument();
    expect(sendButton).toBeInTheDocument();
  });

  it('should have disabled send button initially', () => {
    render(<Chat />);
    const sendButton = screen.getByRole('button', { name: 'Send' });
    expect(sendButton).toBeDisabled();
  });
});
