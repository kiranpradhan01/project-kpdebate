import React from 'react';

export class Footer extends React.Component {
    render() {
        return(
            <footer>
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <p class="mb-0">Read up on why we made this tool<a href="proposal.html">here.</a></p>
                        <p class="mb-0">&copy; 2020 Kiran Pradhan and Patrin Sinteppadon</p>
                    </div>
                    <a href="https://github.com/info340a-w20/project-kpdebate">
                        <img class="social-media" src="img/github.svg" alt="Github logo"/>
                    </a>
                </div>
            </footer>
        )
    }
}