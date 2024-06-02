import { Component } from "react";
import PropTypes from "prop-types";


export default class Profile extends Component {
    static defaultProps = {

    }

    static PropTypes = {
        username: PropTypes.string,
        tag: PropTypes.string,
        location: PropTypes.string,
        avatar: PropTypes.string,
        stats: PropTypes.shape({
            followers: PropTypes.number,
            views: PropTypes.number,
            likes: PropTypes.number,
        }),
    }

    render() {
        return (
            <div class="profile">
                <div class="description">
                    <img
                        src={this.props.avatar}
                        alt="User avatar"
                        class="avatar"
                    />
                    <p class="name">{this.props.username}</p>
                    <p class="tag">{this.props.tag}</p>
                    <p class="location">{this.props.location}</p>
                </div>

                <ul class="stats">
                    <li>
                        <span class="label">Followers</span>
                        <span class="quantity">{this.props.stats.followers}</span>
                    </li>
                    <li>
                        <span class="label">Views</span>
                        <span class="quantity">{this.props.stats.views}</span>
                    </li>
                    <li>
                        <span class="label">Likes</span>
                        <span class="quantity">{this.props.stats.likes}</span>
                    </li>
                </ul>
            </div>
        );
    }
}