import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div class="top">
        <div class="details">
          <p class="name">{this.props.header.name}</p>
          <p class="job">{this.props.header.job}</p>
        </div>
        <div class="information">
          <p>Email: <a href="mailto:abc@gmail.com">{this.props.header.email}</a></p>
          <p>Web: {this.props.header.web}</p>
          <p>Mobile: {this.props.header.mobile}</p>
        </div>
      </div>
    );
  }
}

// class Header extends Component {
//   render() {
//     const {header}=this.props;
//     return (
//       <div class="top">
//         <div class="details">
//           <p class="name">{header.name}</p>
//           <p class="job">{header.job}</p>
//         </div>
//         <div class="information">
//           <p>Email: <a href="mailto:abc@gmail.com">{header.email}</a></p>
//           <p>Web: {header.web}</p>
//           <p>Mobile: {header.mobile}</p>
//         </div>
//       </div>
//     );
//   }
// }

export default Header;