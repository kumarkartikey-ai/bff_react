import { Button, Drawer, Form, Input, Select, theme } from "antd";
import { Option } from "antd/es/mentions";
import React, { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Content } from "antd/es/layout/layout";
import Context from "../../components/sidebar/context/Context";
import { addBatchesAction } from "../../redux/action/batch";
import { addSubjectAction, subjectAction } from "../../redux/action/subject";
import { CloseOutlined } from "@ant-design/icons";

const AddSubject = () => {
  const context = useContext(Context);
  const { addSubjectOpen, setAddSubjectOpen, addNewSubjectOpen, setAddNewSubjectOpen } = context;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state);
  console.log(state);
  const [apiData, setApiData] = useState({});

  //api call
  const onFinish = (values) => {
    const formData = {
      name: values.name,
      description: values.description,
    };
    console.log(formData);
    setApiData(formData);
    dispatch(addSubjectAction(formData));
    dispatch(subjectAction());
    navigate("/web/subject");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    if (state.addBatches.data !== "") {
      if (state.addBatches.data.data.code === 200) {
        navigate("/web/subject");
        window.location.reload();
      }
    }
  }, [state]);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onClose = () => {
    setAddNewSubjectOpen(false);
  };

  return (
    <>
      <Drawer
        className="container"
        title={
          <>
            <CloseOutlined onClick={onClose} /> <span>Add New Subject</span>{" "}
          </>
        }
        width={450}
        closable={false}
        onClose={onClose}
        open={addNewSubjectOpen}
        style={{ overflowY: "auto" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            style={{ marginTop: "30px" }}
          >
            <Form.Item style={{ fontWeight: "600" }} name="name" required>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={{ fontWeight: "600", marginBottom: "10px" }}>
                  {" "}
                  Name :
                </label>
                <Input style={{ width: "400px" }} required />
              </div>
            </Form.Item>

            <Form.Item style={{ fontWeight: "600" }} name="description">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={{ fontWeight: "600", marginBottom: "10px" }}>
                  {" "}
                  Description :
                </label>
                <Input style={{ width: "400px" }} />
              </div>
            </Form.Item>

            <div
              style={{
                display: "flex",
                justifyContent: "end",
                marginTop: "30px",
              }}
            >
              <Form.Item>
                <Button
                  htmlType="submit"
                  onClick={onClose}
                  style={{ marginRight: "20px" }}
                >
                  Cancel
                </Button>

                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ backgroundColor: "#000" }}
                >
                  Add
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </Drawer>
    </>
  );
};

export default AddSubject;
