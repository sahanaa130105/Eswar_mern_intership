import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import './home.css';
import Image from './sana.jpg'; // Import your image file

export const Home=()=> {
  return (
    <section class="hero-section">
  <div class="text-content">
    <h1>Hi<span class="shake">👋</span>, It's <span>SAHANAA.B</span></h1>
    <h2>I'm a <span>Frontend Developer</span></h2>
    <p>"A full-stack developer skilled in creating scalable, user-friendly web applications."</p>
    <div class="social-icons">
      <a href="https://www.linkedin.com/in/sahanaa-b-863914292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin /></a>
      <a href="https://github.com/sahanaa130105"><FaGithub /></a>
      <a href="https://x.com/Sahanaa_B"><FaTwitter /></a>
    </div>
  </div>
  <div class="image-container">
    <img src={Image} alt="Profile Picture" class="profile-picture" />
  </div>
</section>

  );
}
