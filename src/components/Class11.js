import React from 'react';
import ChapterList from './ChapterList';
import { class11Chapters } from '../data/chapters';

const Class11 = () => (
  <div>
    <h2>Class 11</h2>
    {Object.entries(class11Chapters).map(([subject, chapters]) => (
      <div key={subject}>
        <h3>{subject}</h3>
        <ChapterList chapters={chapters} />
      </div>
    ))}
  </div>
);

export default Class11;
