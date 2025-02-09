import React, { Component } from 'react';

class WorkExperience extends Component {
  render() {
    return (
      <div>
        <div id="work-experience" class="section">
          <p class="topic">Work Experience</p>
          <div class='topic-information'>
          {this.props.workexperience.items.map((item,index)=>(
            <div key={index}>
              <p class="sub-topic">{item.job}</p>
              <p>{item.description}</p>
            </div>
          ))}
          </div>
        </div>
        <div class='horizontal-line'></div>
      </div>
    );
  }
}

// class WorkExperience extends Component {
//   render() {
//     const{workexperience}=this.props;
//     return (
//       <div>
//         <div id="work-experience" class="section">
//           <p class="topic">Work Experience</p>
//           <div class='topic-information'>
//           {workexperience.items.map((item,index)=>(
//             <div key={index}>
//               <p class="sub-topic">{item.job}</p>
//               <p>{item.description}</p>
//             </div>
//           ))}
//           </div>
//         </div>
//         <div class='horizontal-line'></div>
//       </div>
//     );
//   }
// }

// class WorkExperience extends Component {
//   render() {
//     const{workexperience}=this.props;
//     return (
//       <div>
//         <div id="work-experience" class="section">
//           <p class="topic">Work Experience</p>
//           <div class="topic-information">
//             <p class="sub-topic">{this.props.job}</p>
//             <p>{this.props.description}</p>
//           </div>
//         </div>
//         <div class='horizontal-line'></div>
//       </div>
//     //<div><p>Child</p></div>
//     //<div><p>{this.props.data}</p></div>
//     //<div> Hello {this.props.name+ " you are " + this.props.age + " years old"} </div>
//     );
//   }
// }

export default WorkExperience;