import { useNavigate, useParams } from "react-router-dom";
import { Button, Checkbox, Form, Input, Row, Col } from "antd";
import React from "react";
const App = ({ setPage }) => {
  const param = useParams;
  if (param == "/") {
    setPage(1);
  }
  const navigate = useNavigate();
  const onFinish = (values) => {
    if (values.user.email == "dgpays@mail.com" && values.password == "123") {
      //console.log("Success:", values);
      setPage(2);
      navigate("/customer");
    } else {
      onFinishFailed();
      if (values.user.email !== "dgpays@mail.com") {
        alert("Email adresiniz hatalı");
      } else if (values.password !== "123") {
        alert("Şifreniz hatalı");
      }
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <div>
        <Row>
          <h1>Email:dgpays@mail.com</h1>
        </Row>
        <Row>
          <h1>Şifre:123</h1>
        </Row>
        <Row>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name={["user", "email"]}
              label="Email"
              rules={[
                {
                  type: "email",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Row>
      </div>
    </>
  );
};
export default App;
