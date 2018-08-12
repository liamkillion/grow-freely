import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-materialize";

class ConsumerContainer extends React.Component {
  render() {
    return (
      <div className="container">
        <Row>
          <Col s={4} />
          <Col s={4}>
            <h1>Liam Candle Company</h1>
          </Col>
          <Col s={4} />
        </Row>
        <Row>
          <Col s={7}>
            <img src="https://img.etsystatic.com/il/9c0bb5/1007201098/il_570xN.1007201098_gpps.jpg?version=0" />
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              tincidunt finibus augue. Aliquam nunc lacus, fringilla ut ligula
              quis, vehicula tempor lorem. Pellentesque laoreet quam a nisl
              suscipit, sit amet condimentum odio laoreet. Maecenas cursus
              lectus vel ullamcorper interdum. Quisque vel risus eu magna
              fringilla mollis. Duis varius nunc eget ornare ultrices. Duis
              pharetra aliquam tempor. Donec augue lorem, viverra at magna non,
              aliquam lobortis massa. Ut non tortor eu magna pharetra tempor
              quis nec mi. In ac vulputate lacus. Fusce porttitor nulla ac
              turpis finibus, sed vulputate quam auctor. Fusce facilisis, erat
              quis tempus ornare, purus velit viverra metus, ut auctor quam diam
              a dui. In id massa porttitor, fringilla libero ut, lacinia enim.
              Mauris egestas, sapien quis interdum placerat, orci quam ultricies
              felis, vitae placerat dolor sem nec sem. Praesent eu varius velit.
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus.
            </p>
            <br />
            <p>
              Cras ut tellus suscipit, venenatis massa sit amet, rhoncus urna.
              Proin sit amet diam purus. Fusce faucibus ex quis enim vehicula
              congue. Curabitur sollicitudin velit et felis lacinia laoreet.
              Morbi fermentum mi eu blandit varius. Etiam vehicula sit amet elit
              in aliquet. Etiam neque ligula, laoreet eu felis a, pretium tempus
              dolor. Aliquam sit amet leo purus. Nunc auctor, enim sit amet
              scelerisque venenatis, sem ex finibus ante, et tristique erat est
              ut lectus. Nulla ligula nulla, commodo sit amet magna sed, euismod
              consequat lectus. Vivamus sit amet egestas erat. Nunc vulputate
              dui sapien. Aenean arcu nisi, sagittis bibendum luctus a,
              sollicitudin a lacus.
            </p>
            <br />
            <p>
              Integer porttitor euismod tristique. Mauris bibendum ipsum eget
              varius consectetur. Pellentesque nulla sem, consequat vitae
              aliquet luctus, condimentum sed diam. Etiam malesuada erat eu odio
              dapibus, egestas laoreet nunc scelerisque. Praesent ut commodo
              massa. Aenean sollicitudin ex mi, eget commodo odio tempus ut.
              Duis porta viverra nunc, eu egestas odio rutrum nec. Vivamus
              suscipit, libero sit amet interdum lacinia, erat lectus luctus
              quam, eu dignissim nulla nunc vitae velit. Nulla ut risus ante. In
              mattis lacus vitae massa pulvinar eleifend. Vestibulum lacinia
              dictum ex, nec finibus mauris fermentum et. Curabitur id justo id
              tortor cursus sodales eu ut velit. Maecenas tempus quam et
              efficitur tempus.
            </p>
          </Col>
          <Col s={5} />
        </Row>
      </div>
    );
  }
}

export default ConsumerContainer;
