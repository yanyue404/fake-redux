import React, { Component } from "react";
import { connect } from "../utils";
interface Props {
  themeColor: string;
}
class Header extends Component<Props> {
  render() {
    return <h1 style={{ color: this.props.themeColor }}>React.js 小书</h1>;
  }
}
const mapStateToProps = (state: any) => {
  return {
    themeColor: state.themeColor
  };
};
export default connect(mapStateToProps)(Header);
