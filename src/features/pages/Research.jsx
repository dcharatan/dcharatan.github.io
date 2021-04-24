import React from 'react';
import publications from '../research/publications';
import Publication from '../research/Publication';
import Page from './Page';

const Research = () => {
  const publicationNodes = publications.map(
    ({ title, url, thumbnailSource, authors, venue }, index) => (
      <Publication
        title={title}
        url={url}
        thumbnailSource={thumbnailSource}
        authors={authors}
        venue={venue}
        key={title}
        className={index < publications.length - 1 ? 'mb-4' : ''}
      />
    )
  );
  return <Page title="Publications">{publicationNodes}</Page>;
};

export default Research;
