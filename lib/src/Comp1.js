import React from 'react';

import dep from './deps/dep';
import './deps/styles.css';
// import './deps/image.svg';

function Comp1() {
  return (
    <div>
      <h1>Comp1</h1>
      <section>
        <h3>Dependencies</h3>
        <ul>
          <li>{dep}</li>
        </ul>
      </section>
    </div>
  );
}

export default Comp1;