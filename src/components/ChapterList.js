import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Renders a list of chapters and optionally turns items into navigation links.
 *
 * @param {Object} props
 * @param {string[]} props.chapters - list of chapter names
 * @param {string[]} [props.links] - optional list of paths corresponding to chapters
 */
const ChapterList = ({ chapters, links }) => (
  <ul>
    {chapters.map((chapter, index) => (
      <li key={index}>
        {links && links[index] ? <Link to={links[index]}>{chapter}</Link> : chapter}
      </li>
    ))}
  </ul>
);

export default ChapterList;
