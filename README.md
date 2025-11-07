# Introduction

Teacher said that hooks were introduced in React on React 16.8 and are linked to **useState**, normally imported in the following format:

```
import React, { useState } from 'react';
```

Teacher said that we have to remember to import from React and not from React Native.

Teacher said that we also have the hook Use Effect.

Teacher also said that the code in React Native and in the React web is the same when we are talking about hooks.

Teacher said that the hook always return to us a function and a variable.

See the teacher analogy:

![analoy](images/analogy.png)

And please see the teacher explanation:

![explanation](images/explanation.png)

Teacher passed an example in in this simple example of an incrementer and decrementer, the hook worked similar a session in a "PHP world".

I created a test app (maybe more text apps in future) in "test/01/basic-hooks" directory.

I used the following command to create the app:

```
npx create-expo-app basic-hooks -t
```

And I entered in the created directory and executed this commmand:

```
npm run android
```

Please see in this example that we have to call a handler function and is this function that call the function you declared in the line that you declare the use of **useState**.

![useState - example 01](images/useState-example-01.png)


# Test app

Please see the test app I developed. Pay attention to things like:

- The use of use state (react hook);
- The non declaration of the function indicated on declare the use of useState.


# useEffect

Teacher said that that useEffect can be use to deal with side effects.

Here is an example of useEffect use:

![example of useEffect use](images/example-of-use-effect-use.png)

Teacher also showed us that we do not need to monitor a variable.

![useEffect - we do not have to monitor a variable](images/useEffect--we-do-not-have-to-monitor-a-variable.png)


# useReducer

How to import:

```
import {useReducer} from 'react'
```

Declaring for the use:

![useReducer - declaring the use](images/useReducer-declaring-the-use.png)

Please see the line with the string "useReducer(reducer, {counter: 0})".

You also can see the function "reducer" in the image.

Please see these example images:

![useReducer - example 01](images/useReducer-example-01.png)

![useReducer - example 01 - part 02](images/useReducer-example-01-part-02.png)

Comments:

- The onPress declaration on the different buttons ("Remover" or "Adcionar" in the images);
- These methods of the above item call the method dispatch indicated in the line that you declared the use of useReducer;



# Official documentation

Teacher said that the official documentation is a great plave to study more abou React hooks:

![official documentation](images/official-documentation.png)

[official documentation](https://reactjs.org/docs/hooks-intro.html)


# Repository related to the classes

[link](https://github.com/digitalinnovationone/trilha-react-native-hooks)