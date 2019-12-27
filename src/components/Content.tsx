import React, { Component } from "react";
import ThemeSwitch from "./ThemeSwitch";
import { connect } from "../utils";
interface Props {
  themeColor: string;
}

class Content extends Component<Props> {
  render() {
    return (
      <div>
        <p style={{ color: this.props.themeColor }}>React.js 小书内容</p>
        <ThemeSwitch />
      </div>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    themeColor: state.themeColor
  };
};
export default connect(mapStateToProps)(Content);
