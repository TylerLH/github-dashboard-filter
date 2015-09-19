import React from "react";
import styles from "./style.css";
import FilterButton from "../FilterButton";

const EVENTS = {
    commits: {
        iconClass: "git-commit"
    },
    discussions: {
        iconClass: "comment-discussion"
    },
    pullRequests: {
        iconClass: "git-pull-request"
    },
    stars: {
        iconClass: "star"
    },
    issues: {
        iconClass: "issue-opened"
    }
}

class DashboardFilter extends React.Component {
    handleToggle(eventType) {
        console.log(`Toggle filter: ${eventType}`);
    }

    render() {
        const eventKeys = Object.keys(EVENTS);
        const buttons = eventKeys.map(key => {
            let event = EVENTS[key];
            return (<FilterButton
                        key={key}
                        eventType={key}
                        iconType={event.iconClass}
                        onToggle={this.handleToggle.bind(this)}
                    />);
        });
        return (
            <div className={styles.container}>
                {buttons}
            </div>
        );
    }
}

export default DashboardFilter;
