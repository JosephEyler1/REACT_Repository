import React from 'react';

interface FlexItemProps {
  href: string;
  altText: string;
  text: string;
  className: string;  // Add className prop
}


const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Main />
      <Footer />
    </div>
  );
};

const Header: React.FC = () => (
  <header>
    <h1>Joseph's Portfolio</h1>
  </header>
);

const Navigation: React.FC = () => (
  <nav>
    <ul>
      <li><a href="#about-me">About Me</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="https://www.linkedin.com/feed/update/urn:li:activity:7188201440006344704/">Resume</a></li>
    </ul>
  </nav>
);

const Main: React.FC = () => (
  <main>
    <HeroBanner />
    <FlexContainer />
    <AboutMe />
  </main>
);

const HeroBanner: React.FC = () => (
  <section className="hero-banner websiteimage0">
    <div>
    </div>
  </section>
);

const FlexContainer: React.FC = () => (
  <section className="flex-container">
    <FlexItem
      href="https://github.com/JosephEyler1/prework-study-guide"
      altText="project1"
      text="Website Project"
      className="websiteimage1" 
    />
    <FlexItem
      href="https://github.com/JosephEyler1/CarCreator"
      altText="carcreator"
      text="Car Creator Project"
      className="websiteimage2"  
    />
    <FlexItem
      href="https://github.com/JosephEyler1/EmployeeTracker"
      altText="emptrack"
      text="Employee Tracker Project"
      className="websiteimage3"  
    />
    <FlexItem
      href="https://github.com/fluviangumbo/Management-Calendar"
      altText="managecal"
      text="Management Calendar"
      className="websiteimage4" 
    />
    <FlexItem
      href="https://github.com/JosephEyler1/prework-study-guide"
      altText="project1"
      text="Placeholder"
      className="websiteimage5"  
    />
  </section>
);

interface FlexItemProps {
  href: string;
  altText: string;
  text: string;
}

const FlexItem: React.FC<FlexItemProps> = ({ href, altText, text, className }) => (
  <section className={`flex-item ${className}`}>
    <div>
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={altText}>
        {text}
      </a>
    </div>
  </section>
);


const AboutMe: React.FC = () => (
  <section id="about-me">
    <h3>About Me</h3>
    <p>
      Hello! My name is Joseph Eyler, and I am an aspiring programmer who seeks to improve my skills in coding.
      I hope to enter the field of game design and create my own projects! You can check out what I've done so far,
      and contact me below if you have any questions!
    </p>
  </section>
);

const Footer: React.FC = () => (
  <footer id="contact">
    <h4>Contact Me</h4>
    <h5>
      <a href="mailto:josepheyler@gmail.com">josepheyler@gmail.com</a>
    </h5>
  </footer>
);

export default App;
