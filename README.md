### My Mart - An online mini mart store.

<img src="https://user-images.githubusercontent.com/67682451/123089868-209e2880-d445-11eb-81f3-029793098613.png" alt="app-preview" width="100%">

#### :telescope: Overview <br/>

:small_blue_diamond: An online mini-mart store where the user can do shopping of daily essentials and grocery. <br/>
:small_blue_diamond: Stripe payment gateway as an online payment option. <br/>

#### :hammer: :construction: Tech Stack

- :ballot_box_with_check: Reactjs
- :ballot_box_with_check: Material UI
- :ballot_box_with_check: Styled-Components
- :ballot_box_with_check: Redux
- :ballot_box_with_check: Firebase

**React & Redux:**

- Used Redux for state management. <br/>
- Routing with **React Router.**<br/>
- Redux Thunk for asynchronous actions like bringing Data from Firestore to the App.<br/>
- Redux Persist to save user login.<br/>

</br>

**Firebase & Firestore**

- Used Firebase to build Fullstack application.<br/>
- Sign-In workflow with Firebase.<br/>
- Google Sign-in Authentification.<br/>
- Storing User Data In Firebase.<br/>

#### :file_folder: Get the Code

```
git clone https://github.com/rsinghcodes/mymart.git
```

```
cd mymart
```

```
npm install
```

Create a Firebase project by going to [Firebase Console](https://console.firebase.google.com/). Copy the configuration values and then create an `.env.local` file in the project's directory. Add environment-specific variables in the form of NAME=VALUE. For example:

```
REACT_APP_API_KEY=...
REACT_APP_AUTH_DOMAIN=...
REACT_APP_PROJECT_ID=...
REACT_APP_STORAGE_BUCKET=...
REACT_APP_MESSAGING_SENDER_ID=...
REACT_APP_APP_ID=...
```

```
npm start
```

For production environments...

```
npm run build
```

#### [Live site](https://mymartstore.netlify.app/)
