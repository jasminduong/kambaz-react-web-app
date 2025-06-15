import { Col, Row } from "react-bootstrap";

export default function BootstrapGrids() {
  return (
    <div>
      <h2>Bootstrap</h2>
      <div id="wd-bs-grid-system">
        <h4>Grid system</h4>
        <Row>
          <Col className="bg-danger text-white">
            <h4>Left half</h4>
          </Col>
          <Col className="bg-primary text-white">
            <h4>Right half</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={4} className="bg-warning">
            <h4>One third</h4>
          </Col>
          <Col xs={8} className="bg-success text-white">
            <h4>Two thirds</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={2} className="bg-black text-white">
            <h4>Sidebar</h4>
          </Col>
          <Col xs={8} className="bg-secondary text-white">
            <h4>Main content</h4>
          </Col>
          <Col xs={2} className="bg-info">
            <h4>Sidebar</h4>
          </Col>{" "}
        </Row>{" "}
      </div>
      <br></br>

      <div id="wd-bs-responsive-grids">
        <h4>Responsive grid system</h4>
        <Row>
          <Col xs={12} md={6} xl={3} className="bg-warning">
            <h4>Column A</h4>
          </Col>
          <Col xs={12} md={6} xl={3} className="bg-primary text-white">
            <h4>Column B</h4>
          </Col>
          <Col xs={12} md={6} xl={3} className="bg-danger text-white">
            <h4>Column C</h4>
          </Col>
          <Col xs={12} md={6} xl={3} className="bg-success text-white">
            <h4>Column D</h4>
          </Col>
        </Row>
      </div>
      <br></br>

      <div id="wd-bs-responsive-dramatic">
        <h4>Responsive grid system</h4>
        <Row>
          <Col
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2}
            xxl={1}
            className="bg-warning"
          >
            <h4>1</h4>
          </Col>
          <Col
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2}
            xxl={1}
            className="bg-primary text-white"
          >
            <h4>2</h4>
          </Col>
          <Col
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2}
            xxl={1}
            className="bg-danger text-white"
          >
            <h4>3</h4>
          </Col>
          <Col
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2}
            xxl={1}
            className="bg-success text-white"
          >
            <h4>4</h4>
          </Col>
          <Col
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2}
            xxl={1}
            className="bg-warning"
          >
            <h4>5</h4>
          </Col>
          <Col
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2}
            xxl={1}
            className="bg-primary text-white"
          >
            <h4>6</h4>
          </Col>
          <Col
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2}
            xxl={1}
            className="bg-danger text-white"
          >
            <h4>7</h4>
          </Col>
          <Col
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2}
            xxl={1}
            className="bg-success text-white"
          >
            <h4>8</h4>
          </Col>
          <Col
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2}
            xxl={1}
            className="bg-warning"
          >
            <h4>9</h4>
          </Col>
          <Col
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2}
            xxl={1}
            className="bg-primary text-white"
          >
            <h4>10</h4>
          </Col>
          <Col
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2}
            xxl={1}
            className="bg-danger text-white"
          >
            <h4>11</h4>
          </Col>
          <Col
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2}
            xxl={1}
            className="bg-success text-white"
          >
            <h4>12</h4>
          </Col>
        </Row>
      </div>
    </div>
  );
}
