# Meet Or Not .io

Visit the live website at [meetornot.io](https://meetornot.io)!

## What is it?
A tool to help you create productive meetings

Technically: a web app that uses react state logic to decide if a meeting is necessary, and if it is, call a custom OpenAI prompt to generate an agenda for you

### Code setup:
- App.jsx manages the overall form state and routing.
- Steps.jsx manages the step-by-step process and step-specific titles.
- Individual step components (StepOne, StepTwo, etc.) handle their specific UI and logic.
- /functions/index.jsx communicates with Cloud Run Function API for database storage and OpenAI API handling
- Frontend deployed on Firebase Hosting
- Backend setup using Firebase BAAS Cloud APIs & Firestore Database

## Roadmap
must do
- get url DNS working properly with www. certification
- figure out why there's two google analytics data streams

should do
- play around with some cool UI libraries to make websiter cooler + learn new libraries

maybe do
- advanced features (export/share, allow user to upload supporting material to create agenda, accounts with agenda history, agendas by user types, etc etc etc )