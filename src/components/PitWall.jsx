import { profile } from '../data/profile.js';
import Reveal from './Reveal.jsx';

const Icons = {
  email: (
    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5z" />
  ),
  github: (
    <path d="M12 .5C5.7.5.5 5.7.5 12a11.5 11.5 0 0 0 7.9 10.9c.6.1.8-.2.8-.5v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17 4.7 18 5 18 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5A11.5 11.5 0 0 0 23.5 12C23.5 5.7 18.3.5 12 .5z" />
  ),
  linkedin: (
    <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5V9h3v10zM6.5 7.7a1.7 1.7 0 1 1 0-3.5 1.7 1.7 0 0 1 0 3.5zM19 19h-3v-5.4c0-1.3-.5-2.1-1.6-2.1-.9 0-1.4.6-1.6 1.2-.1.2-.1.5-.1.8V19h-3V9h3v1.3a3 3 0 0 1 2.7-1.5c2 0 3.4 1.3 3.4 4.1V19z" />
  ),
  leetcode: (
    <path d="M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
  ),
  download: (
    <>
      <path d="M11 3h2v8h3l-4 4-4-4h3z" />
      <path d="M5 19h14v2H5z" />
    </>
  ),
};

function Ico({ name }) {
  return (
    <span className="ico">
      <svg viewBox="0 0 24 24">{Icons[name]}</svg>
    </span>
  );
}

// Pit Wall (contact) — team-radio panel and icon+value links.
export default function PitWall() {
  const { links } = profile;
  return (
    <section id="contact">
      <span className="sec-num">06</span>
      <div className="wrap">
        <Reveal as="span" className="eyebrow">
          Pit Wall
        </Reveal>
        <Reveal as="h2" className="section-title">
          Box, box — get in touch
        </Reveal>
        <Reveal className="pitwall">
          <div className="radio">
            <span className="wave" aria-hidden="true">
              {[0, 0.15, 0.3, 0.1, 0.25].map((d, i) => (
                <i key={i} style={{ animationDelay: `${d}s` }} />
              ))}
            </span>
            <div className="msg">
              <b>Radio:</b> “Box, box — send me a message. Track is clear.”
            </div>
          </div>
          <div className="contact-links">
            <a className="clink" href={`mailto:${links.email}`} aria-label="Email">
              <Ico name="email" />
              <span className="v">{links.email}</span>
            </a>
            <a className="clink" href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Ico name="github" />
              <span className="v">github.com/{links.githubUser}</span>
            </a>
            <a className="clink" href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Ico name="linkedin" />
              <span className="v">linkedin.com/in/ayushb5</span>
            </a>
            <a className="clink" href={links.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
              <Ico name="leetcode" />
              <span className="v">leetcode.com/u/ayushbh0612</span>
            </a>
            <a className="clink dl" href={links.resume} download aria-label="Download résumé (Driver Card)">
              <Ico name="download" />
              <span className="v">Download Driver Card</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
