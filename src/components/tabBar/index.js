import React, { Component } from "react";
import { TarBarContainer } from "./styled";
import { TabBarRoute } from "router";
import { withRouter } from "react-router-dom";

@withRouter
class TabBar extends Component {
  render() {
    let { path } = this.props;
    return (
      <TarBarContainer>
        <ul>
          {TabBarRoute.map(item => (
            <li
              key={item.path}
              onClick={this.handleTo.bind(this, item.path)}
              className={path === item.path ? "activePath" : ""}
            >
              <i className="iconfont">{item.icon}</i>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </TarBarContainer>
    );
  }
  handleTo(path) {
    console.log(path);
    this.props.history.push(path);
  }
}
export default TabBar;
