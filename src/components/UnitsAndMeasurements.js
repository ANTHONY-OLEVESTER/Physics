import React from 'react';
import './UnitsAndMeasurements.css';

const UnitsAndMeasurements = () => (
  <div className="units-chapter">
    <h2>Units and Measurements</h2>

    <section>
      <h3>Base Quantities</h3>
      <p>Seven base quantities define the SI system. The moving pointer below demonstrates measuring length.</p>
      <svg className="ruler" width="300" height="80">
        <rect x="10" y="30" width="280" height="20" fill="#f7f7f7" stroke="#000" />
        <g className="pointer">
          <line x1="20" y1="20" x2="20" y2="70" stroke="red" strokeWidth="2" />
        </g>
      </svg>
    </section>

    <section>
      <h3>Derived Units</h3>
      <p>Derived units are formed by combining base units, such as area (m²) shown by the expanding square.</p>
      <svg className="area" width="120" height="120">
        <rect x="10" y="10" width="100" height="100" fill="rgba(0,128,255,0.2)" stroke="#0080ff" />
        <rect className="expanding" x="10" y="10" width="10" height="10" fill="#0080ff" />
      </svg>
    </section>

    <section>
      <h3>Measurement Error</h3>
      <p>Repeated readings can vary. The swinging needle represents random error in a dial.</p>
      <div className="dial">
        <svg width="120" height="80">
          <circle cx="60" cy="60" r="40" fill="#eee" stroke="#333" />
          <g className="needle">
            <line x1="60" y1="60" x2="60" y2="20" stroke="red" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </section>
  </div>
);

export default UnitsAndMeasurements;
