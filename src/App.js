import React, { Component } from 'react';
import WorkExperience from './WorkExperience';
import Skills from './Skills';
import PersonalProfile from './PersonalProfile';
import Header from './Header';
import Education from './Education';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      education: {
        items:[
          {
            school:'New Jersey Institute of Technology',
            degree: 'BS in Computer Science',
            time: '2018 - 2022',
            gpa: '3.9'
          },
          {
            school:'New Jersey Institute of Technology',
            degree: 'MS in Data Science',
            time: '2022 - 2023',
            gpa: '4.0'
          }
        ]
      },
      header: {
        name: 'Zh Rimel', job: 'Data Scientist', email:'abc@gmail.com', web: 'abc.github.io/abc', mobile: '01234567890'
      },
      personalprofile: {
        information: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat.`
      },
      skills: {
        skill_list:{ 
          skillset1:['A Key Skill', 'A Key Skill', 'A Key Skill'],
          skillset2:['A Key Skill', 'A Key Skill', 'A Key Skill'],
          skillset3:['A Key Skill', 'A Key Skill', 'A Key Skill']
        }
      },
      workexperience:{
        items: [
          {
            job: "Job Title at Company (August 2022 - December 2023)",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.`
          },

          {
            job: "Job Title 2 at Company 2 (August 2020 - December 2021)",
            description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.`
          }
        ]
      }
    };
  }

  render() {
    return (
      <div>
        <Header header={this.state.header}/>
        <PersonalProfile personalprofile={this.state.personalprofile}/>
        <WorkExperience workexperience={this.state.workexperience}/>
        {/* {this.state.workexperience.items.map(item => (<WorkExperience job={item.job} description={item.description}/>))} */}
        <Skills skills={this.state.skills}/>
        <Education education={this.state.education}/>
        {/* {this.arr1.map(item => (<Child key={item.age} name={item.name} age={item.age} />))} */}
      </div>
    );
  }
}
export default App;