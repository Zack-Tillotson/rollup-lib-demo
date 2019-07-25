import React from 'react';
import dep from './deps/dep';

function Comp2() {
  return (
    <div>
      <h1>Comp2</h1>
      <section>
        <h3>Dependencies</h3>
        <ul>
          <li>{dep}</li>
        </ul>
      </section>
    </div>
  );
}

export default Comp2;