import React from "react";
import styles from "./style.css";
import FilterButton from "../FilterButton";

const EVENTS = {
    commits: {
        iconClass: "git-commit",
        itemsToHide: [".push"]
    },
    discussions: {
        iconClass: "comment-discussion",
        itemsToHide: [".issues_comment"]
    },
    pullRequests: {
        iconClass: "git-pull-request",
        itemsToHide: [".pull_request"]
    },
    stars: {
        iconClass: "star",
        itemsToHide: [".watch_started"]
    },
    issues: {
        iconClass: "issue-opened",
        itemsToHide: [".issues_opened"]
    }
}

class DashboardFilter extends React.Component {
    handleToggle(eventType) {
      let event = EVENTS[eventType];
      let els = document.querySelectorAll(`.alert${event.itemsToHide.join('')}`);
      els = Array.prototype.slice.call(els);
      els.forEach(el => el.parentNode.removeChild(el));
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
