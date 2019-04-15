This is a challenge project from freeCodeCamp (FCC) which consists in building an App from scratch. The App is a drum simulator a.k.a. drum machine.

Here's my working version (including the testing suite from FCC):
https://drum-machine-diego.firebaseapp.com/

I've included the original text below with instructions on what they want students to accomplish (copied from: https://learn.freecodecamp.org/front-end-libraries/front-end-libraries-projects/build-a-drum-machine/).

### What I did
* Solved the problem using React following the specs from FCC.

### What I'm probably going to be doing after this
* It'd be nice to put CSS images that actually look like drum pads.
* One of my daughters is learning how to play drums. It'd be nice if music sheets could be implemented and the drums play on their own, as a visual guide to those learning how to play.
* Nice to have also would be a way to record your own music.
* It'd be nice to expand to other instruments, like piano, guitar, etc, etc.

##  Contributing
The main purpose of this repository was to solve the challenge and share my solution.

I thought this project was really difficult. Just by looking at it you wouldn't think so but the internet has little info on how to make sounds play at the press of a button. What little is written is for vanilla JavaScript; and for React it seems the way is to add a event listener via the componentDidMount lifecycle method.

Moreover, the project required the link inside the audio element (itself a child element of a clickable element) to be triggered, and using an event listener via the componentDidMount wouldn't allow you to get the correct target location (i.e. the target was the "body" element, not the element containing the sound clip).

Suffice to say, I settled with using a few lines of vanilla JS, for a less Reactish feel. I still can't sleep at night because of this :smile:

Again, I'm not expecting contributions at all but if you want to contribute I'm 100% behind you. Also, as always, if you have comments on the code I wrote I'd love to hear from you as well. I'll take all criticism as constructive (but try to be nice!).  

### Code of Conduct
Please keep it professionally clean and friendly. That includes, but is not limited to:
* Being patient. If you get frustrated, step away from the keyboard for a few minutes or hours before you do something you might regret later (if you need a few days, maybe you're in the wrong business?).
* Being all inclusive. We are all people of different age, sex, religion, race, nationality, etc, etc. But, we're all people. Treat people like people and that'll be a good start.

### Time is always in short supply
* Time is always precious. There's always another project in the pipeline that needs (or would be nice) to be done and applying improvements to past projects is always a challenge. Still, I'll do my best to come back to this if there are any improvements (obviously, there's always room for styling improvements...). If you contribute and I don't reply right away please accept my apologies in advance but know your contribution is important and I will reply as soon as possible.

## Installation, Available Scripts, and other React related stuff

Please visit Create React App's page (https://github.com/facebook/create-react-app).   

# Front End Libraries Projects - Build a Drum Machine

Objective: Build a CodePen.io app that is functionally similar to this: https://codepen.io/freeCodeCamp/full/MJyNMd.

Fulfill the below user stories and get all of the tests to pass. Give it your own personal style.

You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!

User Story #1: I should be able to see an outer container with a corresponding id="drum-machine" that contains all other elements.

User Story #2: Within #drum-machine I can see an element with a corresponding id="display".

User Story #3: Within #drum-machine I can see 9 clickable drum pad elements, each with a class name of drum-pad, a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: Q, W, E, A, S, D, Z, X, C. The drum pads MUST be in this order.

User Story #4: Within each .drum-pad, there should be an HTML5 audio element which has a src attribute pointing to an audio clip, a class name of clip, and an id corresponding to the inner text of its parent .drum-pad (e.g. id="Q", id="W", id="E" etc.).

User Story #5: When I click on a .drum-pad element, the audio clip contained in its child audio element should be triggered.

User Story #6: When I press the trigger key associated with each .drum-pad, the audio clip contained in its child audio element should be triggered (e.g. pressing the Q key should trigger the drum pad which contains the string "Q", pressing the W key should trigger the drum pad which contains the string "W", etc.).

User Story #7: When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element (each string must be unique).

You can build your project by forking this CodePen pen. Or you can use this CDN link to run the tests in any environment you like: https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js

Once you're done, submit the URL to your working project with all its tests passing.

Remember to use the Read-Search-Ask method if you get stuck.
