import React from 'react';

/**
 * renders the website footer.
 * static
 * used on all pages
 */
class Footer extends React.Component {
  render() {
    return(
      <footer>
          <div className="d-flex justify-content-between align-items-center">
              <div>
                  {/* <p className="mb-0">Read up on why we made this tool<a href="proposal.html">here.</a></p> */}
                  <p className="mb-0">&copy; 2020 Kiran Pradhan and Patrin Sinteppadon</p>
              </div>
              <a href="https://github.com/info340a-w20/project-kpdebate">
                  <img className="social-media" src={require("../img/github.svg")} alt="Github logo" />
              </a>
          </div>
      </footer>
    );
  }
}

export default Footer;
