# Implement a Renderer

The following guidance describes how each of the renderers is implemented and how to follow the same concepts to implement a renderer on any UI platform.

## Versions
Your renderer should implement a particular version of the schema. If you encounter a `minRequiredVersion` property in the `AdaptiveCard` that is higher than your supported version, you should render the `fallbackText` instead.

## Render CardElements

An AdaptiveCard consists of a `body` and `actions`

The `body` is a collection of `CardElement`s that you will enumerate and render. Each element is a "block level" element and should take up the width of its container.

<!--Each `CardElement` from the  [Schema](../Schema.md) (wasn't sure where this was supposed to lead)-->

### TextBlock

A TextBlock will should take up a single line unless the `wrap` property is `true`.

### Inputs

Inputs should render with the highest fidelity possible. For example, an `Input.Date` would ideally offer a date picker to a user, but if this isn't possible on your UI stack, then you should always fall back to rendering a standard text input box.

<!-- ## Styling

TODO: List the styles that should be supported on each platform -->

## Actions
Actions add buttons to the card.  They don't define the logic of the actions, but use the predefined action types instead.

* **Action.OpenUrl** - the button opens an external URL for viewing
* **Action.ShowCard** - Requests a sub-card to be shown to the user.  
* **Action.Http** - Requests that all of the input data is gathered up and sent via an HTTP call 
* **Action.Submit** - Ask for all of the input elements to be gathered up into an object which is then sent to you through some method defined by the host application.

## Events

A renderer should expose certain events for the container app to handle as it sees fit.

## ActionExecuted
Raise this event when an action is tapped. You should pass along the properties that the action contained.

## Data binding
For a submit action, you should gather all inputs on the card and retrieve their values.

Regex to get input values:   `/\{{2}([a-z0-9_$@]+).value\}{2}/gi;`

## RenderUnknownType
Raise this event when an unknown `type` is encountered, allowing the host to handle the event and return UI as it sees fit.

## Render unknown elements
A renderer should be ready to handle unknown types gracefully and continue processing the rest of the payload. 
