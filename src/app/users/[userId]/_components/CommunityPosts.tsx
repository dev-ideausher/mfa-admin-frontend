"use client";
import { Row, Col } from "antd";
import ImgCard from "@/app/_components/ImgCard";
export default function CommunityPosts() {
  return (
    <Row gutter={16} style={{ margin: 15 }}>
      <Col className="gutter-row" span={8}>
        <ImgCard />
      </Col>
      <Col className="gutter-row" span={8}>
        <ImgCard />
      </Col>
      <Col className="gutter-row" span={8}>
        <ImgCard />
      </Col>
      <Col className="gutter-row" span={8}>
        <ImgCard />
      </Col>
      <Col className="gutter-row" span={8}>
        <ImgCard />
      </Col>
      <Col className="gutter-row" span={8}>
        <ImgCard />
      </Col>
      <Col className="gutter-row" span={8}>
        <ImgCard />
      </Col>
    </Row>
  );
}
