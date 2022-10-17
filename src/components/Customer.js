import { useNavigate, useParams } from "react-router-dom";
import { Space, Table, Tag, Button, Modal, Input } from "antd";
import React, { useState, useEffect } from "react";
import { EditOutlined } from "@ant-design/icons";
import axios from "axios";

const Customer = ({ setPage }) => {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const navigate = useNavigate();
  const param = useParams;
  if (param == "/customer") {
    setPage(2);
  }
  useEffect(() => {
    setloading(true);
    getCustomers();
  }, []);

  const getCustomers = () => {
    axios.get("https://northwind.vercel.app/api/customers").then((res) => {
      setData(res.data);
      setloading(false);
    });
  };

  const deleteCustomer = (id) => {
    setloading(true);
    axios
      .delete(`https://northwind.vercel.app/api/customers/${id}`)
      .then((res) => {
        getCustomers();
      });
  };
  const onEditStudent = (record) => {
    setIsEditing(true);
    setEditingStudent({ ...record });
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingStudent(null);
  };
  const detayGo = (id) => {
    navigate(`/customer/${id}`);
  };

  console.log("data", data);
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Company Name",
      dataIndex: "companyName",
      key: "companyName",
      sorter: (a, b) => a.companyName.localeCompare(b.companyName),
    },
    {
      title: "Contact Name",
      dataIndex: "contactName",
      key: "contactName",
      sorter: (a, b) => a.contactName.localeCompare(b.contactName),
    },
    {
      title: "Contact Title",
      dataIndex: "contactTitle",
      key: "contactTitle",
    },
    {
      title: " Delete",
      dataIndex: "id",
      render: (id) => (
        <Button
          onClick={() => deleteCustomer(id)}
          type="primary-outline"
          danger
        >
          Delete
        </Button>
      ),
    },
    {
      key: "5",
      title: "Edit",
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                onEditStudent(record);
              }}
            />
          </>
        );
      },
    },
    {
      title: " Detay",
      dataIndex: "id",
      render: (id) => (
        <Button onClick={() => detayGo(id)} type="success-outline" warning>
          Detay
        </Button>
      ),
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={data} loading={loading} />
      <Modal
        title="Edit Student"
        visible={isEditing}
        okText="Save"
        onCancel={() => {
          resetEditing();
        }}
        onOk={() => {
          setData((pre) => {
            return pre.map((student) => {
              if (student.id === editingStudent.id) {
                return editingStudent;
              } else {
                return student;
              }
            });
          });
          resetEditing();
        }}
      >
        <Input
          value={editingStudent?.companyName}
          onChange={(e) => {
            setEditingStudent((pre) => {
              return { ...pre, companyName: e.target.value };
            });
          }}
        />
        <Input
          value={editingStudent?.contactName}
          onChange={(e) => {
            setEditingStudent((pre) => {
              return { ...pre, contactName: e.target.value };
            });
          }}
        />
        <Input
          value={editingStudent?.contactTitle}
          onChange={(e) => {
            setEditingStudent((pre) => {
              return { ...pre, contactTitle: e.target.value };
            });
          }}
        />
      </Modal>
    </>
  );
};
export default Customer;
