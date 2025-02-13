import React, { useState, useEffect } from 'react';

const FunctionLiefCycle = ({ heroName }) => {
  const [name, setName] = useState(heroName);

  useEffect(() => {
    // This acts like componentDidMount and componentDidUpdate
    console.log('Hero component has been mounted or updated');

    // Clean up function, acts like componentWillUnmount
    return () => {
      console.log('Hero component will unmount');
    };
  }, [name]); // The array specifies which state/props to watch for changes

  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default FunctionLiefCycle