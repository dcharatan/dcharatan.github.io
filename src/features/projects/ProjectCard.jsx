import React from 'react';
import PropTypes from 'prop-types';
import './ProjectCard.scss';

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
        <img
          src={thumbnail}
          alt={`Thumbnail for ${title}`}
          className="project-card-image"
        />
        <div className="border-top p-3">
          <h2>{title}</h2>
          <div>{description}</div>
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
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
