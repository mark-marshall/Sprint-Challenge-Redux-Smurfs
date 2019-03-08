1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Concat, Map, Filter. We can use the spread operator or Object.assign to create a new object  while extending the properties of another.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are objects that contain a type and optionally a payload. They are delivered to the reducer when the user interfaces with our site in a certain way. Reducers affect slices of the application-level state, taking in actions to make changes or setting the state to defaults. The store holds our application-level state and listens for any changes in the  reducer or combined reducer.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state wraps our entire application, all components can access it if connected. Component state lives inside of Components and can be distributed to descendents of that Component only (unless state is pushed uphill). Component state makes sense on small, light applications, and in situations where the rest of the  application has no need to share that state e.g. inputs on forms. Application state is useful with larger applications to discourage prop drilling but in reality some combination of both can often be used and yu can choose to invest in  Redux as much or as little as you want while your application progresses.

4.  What is middleware?

In Redux, Middleware sits between our Components and our Reducers and intercepts actions. It can then go on and make changes to those actions and pass them along to the reducer(s). Middleware has access to some methods such as dispatch, getState, and next. 

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk intercepts any actions that are functions, passes on a dumb action to satisfy Redux and then awaits the return of asynchronous data, allowing us to do multiple dispatches. It then passes our actions on to the reducer(s). Action creators utilising redux-thunk must thereforee return functions.

6.  Which `react-redux` method links up our `components` with our `redux store`?

Connect.