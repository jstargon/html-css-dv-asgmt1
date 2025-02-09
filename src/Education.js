import React, { Component } from 'react';

class Education extends Component {
  render() {
    return (
      <div>
        <div id="education" class="section">
          <p class="topic">Education</p>
          <div class="topic-information">
          {this.props.education.items.map((item,index)=>(
            <div key={index}>
              <p class="sub-topic">{item.school}</p>
              <div class="skills">
                <p>{item.degree}</p>
                <p>{item.time}</p>
                <p>GPA: {item.gpa}</p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    );
  }
}

// class Education extends Component {
//   render() {
//     const {education}=this.props;
//     return (
//       <div>
//         <div id="education" class="section">
//           <p class="topic">Education</p>
//           <div class="topic-information">
//           {education.items.map((item,index)=>(
//             <div key={index}>
//               <p class="sub-topic">{item.school}</p>
//               <div class="skills">
//                 <p>{item.degree}</p>
//                 <p>{item.time}</p>
//                 <p>GPA: {item.gpa}</p>
//               </div>
//             </div>
//           ))}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default Education;