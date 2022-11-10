# devvy-client-side


<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/jonrob08/devvy-client-side">
    <img src="src/Assets/images/brand.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Devvy</h3>

  <p align="center">
    Join us as we connect Devs to Devs!
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![Product Name Screen Shot][product-screenshot]

With the sudden spike in tech job layoffs, there is no better time to become a fully independent freelance Developer. Let Devvy do the hard work for you!

Here's why:
* Your time should be focused on creating amazing things with amazing people. 
* This project allows for social connection as well as freelance job management and tracking
* Future builds are looking to be extremely exciting and helpful as always!



<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![React][React.js]][React-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![Slack.com][Slack.com]][Slack-url]
* [![StackOverflow][StackOverflow.com]][StackOverflow-url]
* [![Github][Github]][Github-url]
* [![MacOS][MacOS]][MacOS-url]
* [![HTML][HTML]][HTML-url]
* [![CSS][CSS]][CSS-url]
* [![Javascript][Javascript]][Javascript-url]
* [![Node.js][Node.js]][Node-url]
* [![Sass][Sass]][Sass-url]
* [![Express][Express]][Express-url]
* [![Material-UI][Material-UI]][Material-UI-url]
* [![MongoDB][MongoDB]][MongoDB-url]
* [![Heroku][Heroku]][Heroku-url]
* [![Figma][Figma]][Figma-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.
1. Fork and Clone repositories:
    * https://github.com/jonrob08/devvy-client-side
    * https://github.com/jonrob08/devvy-server-side
2. npm install
3. Add .env, setup should look like this on the server:
    * ```text
        SECRET_SESSION=thisisYOURsupersecretsessionstoken
        MONGO_CONNECTION_STRING=mongodb+srv://[USERNAME]:[PASSWORD]@cluster0.[YOURCLUSTER].mongodb.net/[YOUR COLLECTION]
        JWT_SECRET=[WEB TOKEN SECRET STRING]
        CLOUDINARY_CLOUD_NAME=[See Cloudinary.com]
        CLOUDINARY_API_KEY=[See Cloudinary.com]
        CLOUDINARY_API_SECRET=[See Cloudinary.com]

4. Add .env to client, it should only have this: 
    * ```text
        REACT_APP_SERVER_URL=http://localhost:[your local server]

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API Name, Key, and Secret at [https://cloudinary.com/](https://cloudinary.com/)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/devvy-client-side.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API info in `.env`


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Add Dashboard
- [x] Add Views
- [x] Add Social Piece
- [x] Add Nav Components
- [x] Add Auth
- [x] Add API Calls
- [x] Add Reducers
- [x] Add Context
- [ ] Build out Profile Page
- [ ] Build out Social Feed view for User
- [ ] Add Data Models for Graphs to Pull Real Data
- [ ] Multi-language Support
    - [ ] Mandarin
    - [ ] Spanish
    - [ ] Italian
    - [ ] French

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

This project will be open source, I could use a ton of help building out certain areas. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this project better, PLEASE fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- CONTACT -->
## Contact

Jon R. - [@linkedIn](https://www.linkedin.com/in/jonathan-robson-dev/) - jonrob08@gmail.com

Project Link: [https://github.com/jonrob08/devvy-client-side](https://github.com/jonrob08/devvy-client-side)
Project Link Server: [https://github.com/jonrob08/devvy-server-side](https://github.com/jonrob08/devvy-server-side)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/badge/CONTRIBUTORS-3-green?style=for-the-badge&logo=appveyor
[contributors-url]: https://github.com/jonrob08/devvy-client-side/graphs/contributors
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/jonathan-robson-dev/
[product-screenshot]: src/Assets/images/devvy-screenshot.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[Slack.com]: https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white
[Slack-url]: https://slack.com/
[StackOverflow.com]: https://aleen42.github.io/badges/src/stackoverflow.svg
[StackOverflow-url]: https://stackoverflow.com/
[Github]:https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white
[Github-url]:https://github.com/
[MacOS]:https://img.shields.io/badge/mac%20os-000000?style=for-the-badge&logo=apple&logoColor=white
[MacOS-url]:https://www.apple.com/macos/ventura/
[HTML]:https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white
[HTML-url]:https://www.w3schools.com/html/
[CSS]:https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white
[CSS-url]:https://www.w3schools.com/css/
[Javascript]:https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[Javascript-url]:https://www.w3schools.com/js/
[Node.js]:https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]:https://nodejs.org/en/
[Sass]:https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white
[Sass-url]:https://sass-lang.com/
[Express]:https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[Express-url]:https://expressjs.com/
[Material-UI]:https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white
[Material-UI-url]:https://mui.com/
[MongoDB]:https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]:https://www.mongodb.com/
[Heroku]:https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white
[Heroku-url]:https://dashboard.heroku.com/apps
[Figma]:https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white
[Figma-url]:https://www.figma.com/file/RlZBWF2fyMGTjNRszM10J2/Devvy?node-id=0%3A1