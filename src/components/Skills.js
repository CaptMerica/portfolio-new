import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import postgresql from '../assets/images/postgresql.svg'
import react from '../assets/images/react.svg'
import mongodb from '../assets/images/mongodb.svg'
import express from '../assets/images/expressjs.svg'
import node from '../assets/images/nodejs.svg'
import typescript from '../assets/images/typescript.svg'
import javascript from '../assets/images/javascript.svg'
import sequelize from '../assets/images/sequelize.svg'
import bootstrap from '../assets/images/bootstrap.svg'
import git from '../assets/images/git.svg'
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills & Technologies</h2>
                        <p>Explore my diverse range of skills and technologies in modern front-end and back-end development.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={postgresql} alt="postgresql-icon" />
                                <h5>PostgreSQL</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="react-icon" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={mongodb} alt="mongodb-icon" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={express} alt="express-icon" />
                                <h5>Express.JS</h5>
                            </div>
                            <div className="item">
                                <img src={node} alt="nodejs-icon" />
                                <h5>Node.JS</h5>
                            </div>
                            <div className="item">
                                <img src={typescript} alt="typescript-icon" />
                                <h5>TypeScript</h5>
                            </div>
                            <div className="item">
                                <img src={javascript} alt="javascript-icon" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={sequelize} alt="sequelize-icon" />
                                <h5>Sequelize</h5>
                            </div>
                            <div className="item">
                                <img src={bootstrap} alt="boostrap-icon"/>
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={git} alt="git-icon" />
                                <h5>Git</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Logo" />
    </section>
  )
}