import React, { Component } from 'react';

class PersonalProfile extends Component {
  render() {
    return (
      <div>
        <div class="section">
        <p class="topic">Personal Profile</p>
        <p id='personal-topic-information' class="topic-information">{this.props.personalprofile.information}</p>
        </div>
        <div class="horizontal-line"></div>
      </div>
    );
  }
}

// class PersonalProfile extends Component {
//   render() {
//     const {personalprofile}=this.props;
//     return (
//       <div>
//         <div class="section">
//         <p class="topic">Personal Profile</p>
//         <p id='personal-topic-information' class="topic-information">{personalprofile.information}</p>
//         </div>
//         <div class="horizontal-line"></div>
//       </div>
//     );
//   }
// }

export default PersonalProfile;