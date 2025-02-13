import React from "react";

const ReactLifecycle = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">React Class Component Lifecycle</h1>
      <p className="text-gray-700 mb-4">The lifecycle of a React class component refers to the different phases it goes through from its creation to its destruction. Each phase allows you to run code at specific times during the component's life. Here's a breakdown of the main phases:</p>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Initialization:</strong> Setting up the initial state and props.
        </li>
        <li>
          <strong>Mounting:</strong> When the component is added to the DOM.
        </li>
        <li>
          <strong>Updating:</strong> When the component's state or props change.
        </li>
        <li>
          <strong>Unmounting:</strong> When the component is removed from the DOM.
        </li>
      </ul>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Lifecycle Methods</h2>
      <h3 className="text-xl font-bold text-gray-900 mb-2">Mounting:</h3>
      <ul className="list-disc list-inside mb-4">
        <li>
          <code>constructor()</code>: Initializes the component's state and binds methods.
        </li>
        <li>
          <code>static getDerivedStateFromProps()</code>: Updates the state based on props.
        </li>
        <li>
          <code>componentDidMount()</code>: Runs after the component is added to the DOM. Good for network requests, subscriptions, etc.
        </li>
      </ul>
      <h3 className="text-xl font-bold text-gray-900 mb-2">Updating:</h3>
      <ul className="list-disc list-inside mb-4">
        <li>
          <code>static getDerivedStateFromProps()</code>: Similar to its role in mounting.
        </li>
        <li>
          <code>shouldComponentUpdate()</code>: Determines whether the component should re-render.
        </li>
        <li>
          <code>render()</code>: Describes the UI based on the state and props.
        </li>
        <li>
          <code>getSnapshotBeforeUpdate()</code>: Captures some information (like scroll position) before the DOM is updated.
        </li>
        <li>
          <code>componentDidUpdate()</code>: Runs after the component's updates are flushed to the DOM. Good for interacting with the DOM based on the previous state/props.
        </li>
      </ul>
      <h3 className="text-xl font-bold text-gray-900 mb-2">Unmounting:</h3>
      <ul className="list-disc list-inside">
        <li>
          <code>componentWillUnmount()</code>: Runs just before the component is removed from the DOM. Ideal for cleanup tasks like removing event listeners or canceling network requests.
        </li>
      </ul>
    </div>
  );
};

export default ReactLifecycle;
