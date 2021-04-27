import React from 'react';
import { Link } from 'react-router-dom';
import { LinkedinFilled, GithubFilled } from '@ant-design/icons';
import Page from './Page';
import '../home/Home.scss';
import Me from '../home/me.jpg';
import IconButton from '../home/IconButton';

const Home = () => (
  <Page padding="p-4">
    <div className="d-flex flex-row align-items-center justify-content-center home-breakpoint">
      <img src={Me} alt="Me" className="me p-4" />
      <div className="p-4">
        <h1>David Charatan</h1>
        <div>
          Hello! I&apos;m a student at Brown University who studies computer
          science. Click the links below to learn more!
        </div>
        <div className="mt-2">
          <Link to="/research">Research</Link>
          <span className="mx-3 text-secondary">|</span>
          <Link to="/projects">Projects</Link>
          <span className="mx-3 text-secondary">|</span>
          <Link to="/resume">Resume</Link>
        </div>
        <div className="mt-4 d-flex flex-row">
          <IconButton
            className="mr-2"
            href="https://www.linkedin.com/in/davidcharatan/"
          >
            <LinkedinFilled />
          </IconButton>
          <IconButton href="https://github.com/dcharatan">
            <GithubFilled />
          </IconButton>
        </div>
      </div>
    </div>
  </Page>
);

export default Home;
