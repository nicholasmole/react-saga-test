# Redux-Saga

How does it work exactly?

Being on the App.js page :

Notice store is send into the provider.
Going to store you can see what exactly is exported.
The store that is exported include :
A sagamiddleware which isolates sagas that can be managers
A reducer which is called from reducers.
Reducers (in this case) go to the index.js of reducers directory
which alls a combineReducer of all your reducers.
In the seperate reducers you will have switch statements that state seperate data/information that is sent back depending upon the type of request that is sent.

Now that the store is set - we can see what the components do.

The **components** call a request action from **actions**. 
In **actions** we see that the request APi based on a **type**.
In the **component** we see that **request** in 2 other locations:
  the **componentdidmount** : which takes the initial value
  The **mapDispatchtoProps*** which sends a dispatch function.
The **dispatch** calls **store** -> 
which calls the **sagas** -> 
which goes to the **request** set by the **actions** and **type**.
The (in this case 'users') **saga** sends a **fetch** request for a given **api.** 
This api sends back the **data** that goes into the **reducer** stored as a state.
The data can be passed as **a prop** in the **component**.
The **prop** needs to be **mapped** out - as it typically is a array





[Definitions](https://survivejs.com/blog/redux-saga-interview/)
### sagaMiddleware
The redux-saga middleware isolates all side effects into software artifacts called sagas so that side effects can be managed.
