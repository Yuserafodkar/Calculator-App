This is a fully functional React-based Calculator that supports basic arithmetic operations. It is designed using Styled Components for custom styling and offers a sleek, modern UI with animations and hover effects for a user-friendly experience.

Basic Arithmetic Operations: The calculator supports addition, subtraction, multiplication, and division.
Input Handling: Users can input numbers, delete the last character, or clear all inputs using the "AC" (All Clear) button.
Operation Chaining: The calculator allows chaining operations by automatically computing the previous result when a new operation is selected.
Live Screen Display: As users input numbers and operations, the screen dynamically updates to show the current and previous values along with the selected operation.
Hover Effects: The buttons feature interactive hover effects, adding a polished look and feel.
Responsive Grid Layout: The layout is structured using a CSS grid, making it flexible and adaptive to different screen sizes.

Components which i have used:
Container: Wraps the calculator interface and defines the grid layout for the buttons and screen.
Screen: Displays the current and previous calculations, styled for clarity and ease of reading.
Button: Each button is styled individually, with different states for operations, numbers, and control buttons like "AC" and "DEL".
Event Handlers: Includes event handlers for appending numbers, choosing operations, deleting the last input, and clearing the screen.
Calculation Logic: Handles real-time calculation of expressions and evaluates the result using the selected operations.
