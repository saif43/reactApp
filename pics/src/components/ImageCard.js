import React from "react";

export default class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();

    this.state = { span: 0 };
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpan);
  }

  setSpan = () => {
    const height = this.imageRef.current.clientHeight;

    const span = Math.ceil(height / 10);
    // console.log(span);
    this.setState({ span });
  };

  render() {
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.span}` }}>
        <img ref={this.imageRef} src={urls.regular} alt={description} />
      </div>
    );
  }
}
