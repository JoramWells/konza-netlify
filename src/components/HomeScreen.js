import React from "react";
import { Row, Col, Card, Button } from "antd";
import {ArrowRightOutlined, CarOutlined, ClockCircleOutlined, LoadingOutlined, WarningOutlined} from '@ant-design/icons'

export default function HomeScreen() {
  return (
    <>
      <Row justify="space-around" align="middle" style={{ marginTop: "1rem" }}>
        <Col>
          <Card
            style={{
              width: "20rem",
              backgroundColor: "#36454f",
              textAlign: "center",
              borderRadius: "5px",
            }}
          >
            <h2 style={{ color: "white" }}>Welcome to XpressCloud</h2>
            <Button type="primary">Learn more</Button>
          </Card>
        </Col>
      </Row>
      <Row justify="space-around" align="middle" style={{ marginTop: "1rem" }}>
        <Col style={{ textAlign: "center" }}>
          <Card style={{ width: "20rem" }}>
            <h2>About us</h2>
            <hr />
            An Online cloud platform that uses ML to provide realtime
            information about traffic
          </Card>
        </Col>
      </Row>
      <Row justify="space-around" align="middle" style={{ marginTop: "1rem" }}>
        <Col>
          <Card
            style={{
              width: "20rem",
              textAlign: "center",
              backgroundColor: "#E8E8E8",
              borderRadius:"5px"
            }}
          >
            <h3><ClockCircleOutlined /> Save Time,Money   </h3>
            Traffic jam is a major problem in Nairobi and major cities around
            the world. We solve this problem by approaching from a different
            pont of view. To make sure that our clients get at their workplaces
            on time.
            <Button
              style={{
                backgroundColor: "rgb(227,38,54,0.9)",
                borderRadius: "100px",
                marginTop: "1rem",
                border: "0",
              }}
            >
              <h4 style={{color:"white"}}>Learn more</h4>
            </Button>
          </Card>
        </Col>
      </Row>
      <Row justify="space-around" align="middle" style={{ marginTop: "1rem",color:"white" }}>
        <Col>
          <Card style={{ width: "20rem", textAlign: "center", backgroundColor:"rgb(46,139,87)",borderRadius:"5px",color:"white" }}>
            <h3 style={{color:"white"}}> <ArrowRightOutlined /> Lost a vehicle?</h3>
            Accidents have increased in the recent past
          </Card>
        </Col>
      </Row>
      <Row justify="space-around" align="middle" style={{ marginTop: "1rem" }}>
        <Col>
          <Card style={{ width: "20rem", textAlign: "center" }}>
            <h3><WarningOutlined style={{color:"rgb(227,38,54)"}} /> Accidents</h3>
            Accidents have increased in the recent past
          </Card>
        </Col>
      </Row>

      <Row justify="space-around" align="middle" style={{ marginTop: "1rem" }}>
        <Col>
          <Card style={{color:"white", width: "20rem", textAlign: "center", backgroundColor:"rgb(27,85,131)",borderRadius:"5px" }}>
            <h3 style={{color:"white"}}> <CarOutlined /> Parking spaces</h3>
           With Express Cloud App, it becomes much easier to book and find parking places in short period of time
          </Card>
        </Col>
      </Row>
      <Row justify="space-around" align="middle" style={{ marginTop: "1rem" }}>
        <Col>Home Screen</Col>
      </Row>
    </>
  );
}
