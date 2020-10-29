// when each of the jobs are display, it will be displayed in this container

import React, { Component } from 'react';

class JobDisplay extends Component {
  
  render() {

    const { job } = this.props;
    
    return (
        <div className="job_details_area">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="job_details_header">
                        <div className="single_jobs white-bg d-flex justify-content-between">
                            <div className="jobs_left d-flex align-items-center">
                                <div className="thumb">
                                    <img src="" alt="" />
                                </div>
                                <div className="jobs_conetent">
                                    <a href="#"><h4>Software Programming Engineer</h4></a>
                                    <div className="links_locat d-flex align-items-center">
                                        <div className="location">
                                            <p> <i className="fa fa-map-marker"></i> Arizona, USA</p>
                                        </div>
                                        <div className="location">
                                            <p> <i className="fa fa-clock-o"></i> Full-time</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="jobs_right">
                                <div className="apply_now">
                                    <a className="heart_mark" href="#"> <i className="ti-heart"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="descript_wrap white-bg">
                        <div className="single_wrap">
                            <h4>Job Description</h4>
                            The Software Engineer will be using an analytical, engineering-focused approach and expert knowledge of programming languages to develop computer programs and ensure software is as functional and robust as the client or consumer needs.
                        </div>
                        <div className="single_wrap">
                            <h4>Responsibilities</h4>
                            <ul>
                                <li>Using analysis and critical thinking skills to determine and assess the needs of the user and then create software to meet the requirements. </li>
<li>Providing clear instructions to the project team, clearly explaining how the software works to the customer and being available to answer any questions that may arise using exceptional communication skills.</li>
<li>Applying keen attention to detail and organization to work on numerous parts of a system or application at the same time while being accurate and thorough.</li>
<li>Working well with others on the team of Designers, Developers and Programmers using effective interpersonal skills.</li>
<li>Being able to efficiently identify and resolve issues that arise during the design, testing and maintenance processes using problem-solving skills.</li>

                            </ul>
                        </div>
                        <div className="single_wrap">
                            <h4>Qualifications</h4>
                            <ul>
                    
                                <li>Must be able to work well with others on the team of Designers, Developers and Programmers using effective interpersonal skills.</li>
                                <li>Be able to efficiently identify and resolve issues that arise during the design, testing and maintenance processes using problem-solving skills.</li>
                            
                                <li>Must have sound knowledge of commercial activities.</li>
                                <li>Leadership, analytical, and problem-solving abilities required.</li>
                                <li>Should have vast knowledge in IAS/ IFRS, Company Act, Income Tax, VAT.</li>
                            </ul>
                        </div>
                        <div className="single_wrap">
                            <h4>Benefits</h4>
                            <ul>
                              <li>Better health, dental, and vision insurance</li>
                              <li>Can opt to work from home</li>
                              <li>More flexible hours</li>
                              <li>Student loan assistance</li>
                              <li>Paid maternity/Paternity leave</li>
                              <li>Company-wide retreats</li>


                            </ul>
                            
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="job_sumary">
                        <div className="summery_header">
                            <h3>Job Summary</h3>
                        </div>
                        <div className="job_content">
                            <ul>
                                <li>Published on: <span>28 Oct., 2020</span></li>
                                <li>Vacancy: <span>open till 26 Nov., 2020</span></li>
                                <li>Salary: <span>120k - 170k/y</span></li>
                                <li>Location: <span>Arizona, USA</span></li>
                                <li>Job Nature: <span>Onsite and Work-from-Home options available</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}


export default JobDisplay;