import React, { Component } from "react";
import { getUserProfile } from "../../util/APIUtils";
import { Avatar, Tabs } from "antd";
import LoadingIndicator from "../../common/LoadingIndicator";
import "./Profile.css";

const TabPane = Tabs.TabPane;

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isLoading: false,
    };
    this.loadUserProfile = this.loadUserProfile.bind(this);
  }

  loadUserProfile(username) {
    this.setState({
      isLoading: true,
    });

    getUserProfile(username)
      .then((response) => {
        this.setState({
          user: response,
          isLoading: false,
        });
      })
      .catch((error) => {
        if (error.status === 404) {
          this.setState({
            notFound: true,
            isLoading: false,
          });
        } else {
          this.setState({
            serverError: true,
            isLoading: false,
          });
        }
      });
  }

  componentDidMount() {
    const username = this.props.match.params.username;
    this.loadUserProfile(username);
  }

  componentDidUpdate(nextProps) {
    if (this.props.match.params.username !== nextProps.match.params.username) {
      this.loadUserProfile(nextProps.match.params.username);
    }
  }

  render() {
    if (this.state.isLoading) {
      return <LoadingIndicator />;
    }

    const tabBarStyle = {
      textAlign: "center",
    };

    return (
      <div className="profile">
        {this.state.user ? (
          <div className="user-profile">
            <div className="user-details">
              <div className="user-avatar">
                <Avatar className="user-avatar-circle">
                  {this.state.user.name[0].toUpperCase()}
                </Avatar>
              </div>
              <div className="user-summary">
                <div className="full-name">{this.state.user.name}</div>
                <div className="username">@{this.state.user.username}</div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Profile;
