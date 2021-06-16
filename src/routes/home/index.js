import { h, Component } from "preact";
import styles from "./styles.css";

export default class Toggle extends Component {
  state = {
    darkModeToggled: false,
  };

  handleDarkModeChange(e) {
    this.setState({ darkModeToggled: e.target.checked });
  }

  render() {
    return (
      <label class={styles.toggleswitch}>
        <input
          type="checkbox"
          checked={this.state.darkModeToggled}
          onChange={(e) => this.handleDarkModeChange(e)}
        />
        <span class={styles.switch} />
      </label>
    );
  }
}
