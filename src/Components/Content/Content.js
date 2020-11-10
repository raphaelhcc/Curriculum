import React from 'react';
import "./Content.css";
import ContentItems from './ContentItems/ContentItems'
import Slider from 'infinite-react-carousel';
import ArrowBack from './../../Assets/left-arrow.svg';
import ArrowForward from './../../Assets/right-arrow.svg';


function Content() {
    return (
        <div className="content">
            <div>
                <ContentItems title="EXPERIÊNCIAS DE TRABALHO" />
                <div>
                    <Slider
                        prevArrow={<img src={ArrowBack} alt="ArrowBack"></img>}
                        nextArrow={<img src={ArrowForward} alt="ArrowForward"></img>}
                        adaptiveHeight={true}
                        dots>
                        <div className="CardCarousel">
                            <h3>
                                <b>INTERN - BUSINESS INTELIGENCE - ARBIT/INTEL PROJECT</b>
                            </h3>
                            <h4>
                                01.2020
                            </h4>
                            <p>
                                Allocated in the internacional Intel Project. Working with Business Intelligende, OLAP data cubers maintenance and enhancement. Using Big Data, Data Lake and Data Warehouses. Interacting daily with Intel teams located in Costa Rica, India and USA applying the SCRUM agile methodology.
                            </p>
                        </div>
                        <div className="CardCarousel">
                            <h3>
                                <b>INTERN - WEB/MOBILE DEVELOPER  - OILL COMPANY</b>
                            </h3>
                            <h4>
                                07.2019 - 01.2020
                            </h4>
                            <p>
                                Working in front-end development, responsible for screen creations and enhancements and maintenance for our website and mobile app, using Ionic 4 and Angular.JS, PHP, and the Agile methods Kanban and SCRUM.
                            </p>
                        </div>
                        <div className="CardCarousel">
                            <h3>
                                <b>INTERN - GRAPHIC DESIGN - POSTOS QUALITY</b>
                            </h3>
                            <h4>
                                01.2017 - 06.2017
                            </h4>
                            <p>
                                Responsible for company marketing and digital media. Working with media creation, brainstorm meetings, and social media maintenance.
                            </p>
                        </div>
                        <div className="CardCarousel">
                            <h3>
                                <b>ESTÁGIO - CRM - POSTOS QUALITY</b>
                            </h3>
                            <h4>
                                09.2016 - 12.2016
                            </h4>
                            <p>
                                Responsible for customer service, and customer data register and maintenance at gas station system.
                            </p>
                        </div>



                    </Slider>
                </div>
            </div>
            <div>
                <ContentItems title="EDUCAÇÃO" />
                <div className="EducationSection">
                    <div className="CardCarousel">
                        <h3>
                            <b>INFORMATIONS SYSTEM BACHELOR</b>
                        </h3>
                        <h4>
                            01.2018 - 12.2021
                    </h4>
                        <p>
                            Anhembi Morumbi University<br /> Mooca Campus. São Paulo- SP
                    </p>
                    </div>
                    <div id="CardStart" className="CardCarousel">
                        <h3>
                            <b>START - GRAPHIC DESIGN</b>
                        </h3>
                        <h4>
                            01.2017 - 12.2017
                    </h4>
                        <p>
                            SAGA - Art School <br /> Guarulhos - SP
                    </p>
                    </div>
                </div>
            </div>
            <div>
                <ContentItems title="IDIOMAS" />
                <div className="CardCarousel">
                    <h3>
                        INGLÊS - ADVANCED
                </h3>
                    <p>Language Course at SKILL IDIOMAS School</p>
                    <p>EF-SET English Certificate 73/100 (C2 Proficient) </p>
                    <h3>
                        SPANISH - BASIC
                </h3>
                </div>
            </div>
            <div>
                <ContentItems title="SOFT SKILLS" />
                <div className="CardCarousel">
                    <p>
                        Quick Learning, Proactivity, Comunication, Teamwork
                    </p>
                </div>
            </div>
            <div>
                <ContentItems title="HARD SKILLS" />
                <div className="CardCarousel">
                    <p> Microsoft OFFICE Tools, Adobe Creative Cloud, React.JS, Angular.JS, IONIC 4, T-SQL, TDD, Linux, Git, agile methodologies, AWS Service, Python 3, Java, Javascript, bash. </p>
                </div>
            </div>
            <div>
                <ContentItems title="CURSOS" />
                <div className="CardCarousel">
                    <div className="curso">
                        <h4>Programmable Design - Espaço CC - André Burnier</h4>
                        <p>Design-oriented Front-End Development using JavaScript</p>
                    </div>
                    <div className="curso">
                        <h4>Design Programado - Espaço CC - André Burnier</h4>
                        <p>Desenvolvimento de programação voltada a design com a linguagem JavaScript</p>
                    </div>
                    <div className="curso">
                        <h4>Internet of Things - CodeIOT(Samsung)</h4>
                        <p>Creation and development of components compatible with the growing IOT industry </p>
                    </div>
                    <div className="curso">
                        <h4>Python 3 - University of Michigan</h4>
                        <p>Development using python 3, and the growing market for machine learning and web.</p>
                    </div>
                    <div className="curso">
                        <h4>Software test - USP(Universidade de São Paulo)</h4>
                        <p>Study and application of testing techniques to improve software quality </p>
                    </div>
                    <div className="curso">
                        <h4>Training Young Leaders - Marcelo Mendes Treinamentos </h4>
                        <p>Training about creative thought, organization and leadership profile </p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Content;
