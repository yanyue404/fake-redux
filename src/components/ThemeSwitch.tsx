import React, { Component } from "react";
import { connect } from "../utils";
import { Action } from "../types";
interface Props {
  themeColor: string;
  onSwitchColor: (p: string) => void;
}
class ThemeSwitch extends Component<Props> {
  handleSwitchColor(color: string) {
    if (this.props.onSwitchColor) {
      this.props.onSwitchColor(color);
    }
  }
  render() {
    return (
      <div>
        <button
          style={{ color: this.props.themeColor }}
          onClick={this.handleSwitchColor.bind(this, "red")}
        >
          Red
        </button>
        <button
          style={{ color: this.props.themeColor }}
          onClick={this.handleSwitchColor.bind(this, "blue")}
        >
          Blue
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    themeColor: state.themeColor
  };
};
const mapDispatchToProps = (dispatch: (p: Action) => void) => {
  return {
    onSwitchColor: (color: string) => {
      dispatch({ type: "CHANGE_COLOR", payload: { themeColor: color } });
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch);
