// components/MyComponent.jsx
import PropTypes from "prop-types";
import "./MyComponent2.css";

export default function MyComponent2(props) {
  return (
    <div class="mycomponent2">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}

MyComponent2.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};