import { Button, Col, Form, Input, Row } from "antd";
import axios from "axios";
import React from "react";

function Addcustomer() {
  const [form] = Form.useForm();
  const submitForm = (values) => {
    axios
      .post("https://northwind.vercel.app/api/customers", values)
      .then((res) => {
        console.log("RES", res.data);
        form.resetFields();
      });
  };

  return (
    <Form layout="vertical" form={form} onFinish={submitForm}>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item
            label="ID"
            name="id"
            rules={[
              { required: true, message: "Please input your ID!" },
              { max: 30 },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            label="Company Name"
            name="companyName"
            rules={[
              { required: true, message: "Please input your Company Name!" },
              { max: 30 },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={12}>
          <Form.Item
            label="Contact Name"
            name="contactName"
            rules={[
              { required: true, message: "Please input your Contact Name!" },
              { max: 30 },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Contact Title"
            name="contactTitle"
            rules={[
              { required: true, message: "Please input your Company Title!" },
              { max: 30 },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Button type="primary" htmlType="submit">
        Add
      </Button>
    </Form>
  );
}

export default Addcustomer;
