import React from 'react';

const ChapterList = ({ chapters }) => (
  <ul>
    {chapters.map((chapter, index) => (
      <li key={index}>{chapter}</li>
    ))}
  </ul>
);

export default ChapterList;
