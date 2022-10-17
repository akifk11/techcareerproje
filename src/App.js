import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import Customer from "./components/Customer";
import CustomerDetails from "./components/CustomerDetails";
import AddCustomer from "./components/AddCustomer";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import { useState } from "react";
const { Header, Footer, Content } = Layout;

function App() {
  const [page, setPage] = useState(1);
  const items = [
    { label: <Link to="/">Home</Link>, key: "1" },
    { label: <Link to="/customer">Customers</Link>, key: "2" },
    { label: <Link to="/customer">Customer Details</Link>, key: "3" },
    { label: <Link to="/addcustomer">Add Customer</Link>, key: "4" },
  ];
  return (
    <>
      {" "}
      <Router>
        <Layout className="layout">
          <Header className="header">
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={[`${page}`]}
              items={items}
            />
          </Header>
          <Content className="content">
            {" "}
            <Routes>
              <Route
                path="/"
                element={<Mainpage page={page} setPage={setPage} />}
              />
              <Route
                path="/customer"
                element={<Customer page={page} setPage={setPage} />}
              />
              <Route
                path="/customer/:id"
                element={<CustomerDetails page={page} setPage={setPage} />}
              />
              <Route
                path="/addcustomer"
                element={<AddCustomer page={page} setPage={setPage} />}
              />
            </Routes>
          </Content>
          <Footer></Footer>
        </Layout>
      </Router>
    </>
  );
}

export default App;
