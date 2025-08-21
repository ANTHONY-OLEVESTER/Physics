import React from 'react';
import ChapterList from './ChapterList';
import { class12Chapters } from '../data/chapters';

const Class12 = () => (
  <div>
    <h2>Class 12</h2>
    {Object.entries(class12Chapters).map(([subject, chapters]) => (
      <div key={subject}>
        <h3>{subject}</h3>
        <ChapterList chapters={chapters} />
      </div>
    ))}
  </div>
);

export default Class12;
