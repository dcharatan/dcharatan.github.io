import React from 'react';
import PropTypes from 'prop-types';
import './ProjectCard.scss';
import ReactMarkdown from 'react-markdown';

const ProjectCard = ({ project }) => {
  const { title, description, href, to, thumbnail } = project;
  if (href !== undefined && to !== undefined) {
    // eslint-disable-next-line no-console
    console.error(
      `Don't specify "href" and "to" at the same time for a ProjectCard!.`
    );
  }
  return (
    <div className="p-2">
      <div className="border bg-white">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={`Thumbnail for ${title}`}
            className="project-card-image"
          />
        ) : null}
        <div className={`${thumbnail ? 'border-top' : ''} p-3`}>
          <h2>{title}</h2>
          <div className="project-card-description">
            <ReactMarkdown>{description}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    href: PropTypes.string, // For web links.
    to: PropTypes.string, // For links on this page.
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default ProjectCard;
