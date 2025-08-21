import React from 'react';
import ChapterList from './ChapterList';
import { class11Chapters } from '../data/chapters';

const Class11 = () => (
  <div>
    <h2>Class 11</h2>
    {Object.entries(class11Chapters).map(([subject, chapters]) => {
      const links =
        subject === 'Physics'
          ? [
              null,
              '/class11/physics/units-and-measurements',
              null,
            ]
          : undefined;
      return (
        <div key={subject}>
          <h3>{subject}</h3>
          <ChapterList chapters={chapters} links={links} />
        </div>
      );
    })}
  </div>
);

export default Class11;
