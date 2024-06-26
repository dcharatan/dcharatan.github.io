import React from 'react';
import publications from '../research/publications';
import Publication from '../research/Publication';
import Page from './Page';

const Research = () => {
  const publicationNodes = publications.map(
    (
      { title, url, thumbnailSource, authors, venue, numFirstAuthors },
      index
    ) => (
      <Publication
        title={title}
        url={url}
        thumbnailSource={thumbnailSource}
        authors={authors}
        venue={venue}
        key={title}
        className={index < publications.length - 1 ? 'mb-4' : ''}
        numFirstAuthors={numFirstAuthors}
      />
    )
  );

  const subtitle = (
    <>
      I&apos;ve conducted undergraduate research with{' '}
      <a href="https://dritchie.github.io/csci2240/">Daniel Ritchie</a> at{' '}
      <a href="https://visual.cs.brown.edu/">Brown Visual Computing.</a>{' '}
      I&apos;m now a Ph.D. student in the{' '}
      <a href="https://www.scenerepresentations.org/">
        Scene Representation Group
      </a>{' '}
      run by <a href="https://www.vincentsitzmann.com/">Vincent Sitzmann</a> at
      MIT.
    </>
  );

  return (
    <Page title="Research" subtitle={subtitle}>
      {publicationNodes}
    </Page>
  );
};

export default Research;
