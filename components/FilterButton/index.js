import React from "react";
import classnames from "classnames";
import styles from "./style.css";

/*
 * FilterButton
 * Toggles the display of an event type
 */
class FilterButton extends React.Component {
    static propTypes = {
        iconType: React.PropTypes.string.isRequired,
        onToggle: React.PropTypes.func.isRequired
    }

    handleClick(e) {
        e.preventDefault();
        this.props.onToggle(this.props.eventType);
    }

    render() {
        let {iconType} = this.props;
        let iconClasses = classnames("mega-octicon", `octicon-${iconType}`);

        return (
            <a href="" className={styles.button} onClick={this.handleClick.bind(this)}>
                <span className={iconClasses} />
            </a>
        );
    }
}

export default FilterButton;
