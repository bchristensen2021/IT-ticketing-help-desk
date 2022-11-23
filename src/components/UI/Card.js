import "./Card.css";

function Card(props) {
  const classes = " card " + props.className;
  // props.children is available in the background as a reserve name
  // makes it possible to have content between tags of customized component
  return <div className={classes}>{props.children}</div>;
}

export default Card;
