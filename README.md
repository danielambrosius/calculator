Assignment
=========

1. Your calculator is going to contain funtions for all of the basic math operators you typycally find on simple calculators, so start by creating functions for following items and testing them in your browser's console.

	1. add
	1. subtract
	1. multiply
	1. divide

1. Create a new function **operate** that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

1. Create basic HTML calculator with buttons for each digit, each of the above functions and an "equals" key.

	1. Do not worry about wiring ip th JS just yet.
	1. There should also be a display for the calculator, go agead and fill it with some dummy numbers so you can get it looking right.
	1. Add a "clear button.

1. Create the functions that populate the display when you click the number buttons... you should be storing the 'display valoue' in a variable somewhere for use in the next step.

1. Make the calcuylator work! You'll need to store the first number that is input into the calculator when a user presses an operator, and also save which operation has been chosen and the **operate()** on them when the user presses the "=" key.

	1. your should already have the code that can populate the display, so once **operate()Æ** has been called, update the display with the 'solution' to the operation. 
	1. This is the hardest part of the project. You need to figure out how to store all the values and call the operate function with them. Don't fel bad if it takes you a while to figure aout the logic.

1. Gotchas: whatch out for and fix these bugs if they show up in your code:
	1. Users should be able to string together several operations, so the order of evaluation must be in order.
	1. Andswers should be rounded so they dont flow out of the screen.
	1. Pressing "clear" should wipe out any existing data.. make sure the user is really starting fresh after pressing "clear"
	1. Display a snarky error message if the userd tries to divide by 0.. don't let it crash your calculator!

1. EXTRA CREDIT: Users can get floating point numbers it the do the math required to get one, but they can't type them in yet. Add a . button and let users input decimals! Make sure you don't let them type in more than one. (or just by typing?? Eval "," and "." the same.

1. EXTRA CREDIT: CSS IT UP!!

1. EXTRA CREDIT: ADD BACKSPACE BUTTON.

1. EXTRA CREDIT: ADD KEYBORD SUPPORT.
