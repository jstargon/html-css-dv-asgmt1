import React, { Component } from 'react';

class Skills extends Component {
  render() {
    return (
      <div>
        <div id="key-skills" class="section">
          <p class="topic">Key Skills</p>
          <div class="topic-information-row">
            {Object.values(this.props.skills.skill_list).map((item,index)=>(
              <div key={index} id={index} class="skills">
              {item.map((skill,index2)=>
                <p>{skill}</p>  
              )}
              </div>
            ))}
          </div>
        </div>
        <div class='horizontal-line'></div>
      </div>
    
    );
  }
}

// class Skills extends Component {
//   render() {
//     const {skills} =  this.props;
//     return (
//       <div>
//         <div id="key-skills" class="section">
//           <p class="topic">Key Skills</p>
//           <div class="topic-information-row">
//             {Object.values(skills.skill_list).map((item,index)=>(
//               <div key={index} id={index} class="skills">
//               {item.map((skill,index2)=>
//                 <p>{skill}</p>  
//               )}
//               </div>
//             ))}
//           </div>
//         </div>
//         <div class='horizontal-line'></div>
//       </div>
    
//     );
//   }
// }

export default Skills;