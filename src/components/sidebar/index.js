/* eslint-disable react/jsx-no-undef */
import React, { useContext, useState } from "react";
import { Layout } from "antd";
import { NavLink } from "react-router-dom";
import {
  DashboardOutlined,
  ProfileOutlined,
  HeatMapOutlined,
  BankOutlined,
  UsergroupAddOutlined,
  ContactsOutlined,
  DiffOutlined,
} from "@ant-design/icons";
import styles from "./siderNavbar.module.css";
import logo1 from "../../asserts/images/Logo_t.png";
import Cookies from "universal-cookie";

const { Sider } = Layout;

const SideNavbar = () => {
  const cookies = new Cookies();
  const roleType = cookies.get('role_type')
  const [dashboardClicked, setDashboardClicked] = useState(false);
  const [studentClicked, setStudentClicked] = useState(false);
  const [batchClicked, setBatchClicked] = useState(false);
  const [gradeClicked, setGardeClicked] = useState(false);
  const [userClicked, setuserClicked] = useState(false);
  const [eventClicked, setEventClicked] = useState(false);
  const [subjectClicked, setSubjectClicked] = useState(false);
  const [bffStar, setBffStar] = useState(false)

  return (
    <div className={styles.sider_container}>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          textAlign: "center",
          background: "#000",
        }}
      >
        <div style={{marginTop:'20px'}}>
          {/* <h1 style={{ color: "#fff", fontSize: "20px" }}>BFF</h1> */}
          <img src={logo1} style={{width:'90%'}} alt={logo1} />
        </div>
        {roleType == 1 ? 
        (<ul style={{ marginTop: "50px" }}>
          <NavLink
            onClick={() => {
              setDashboardClicked(true);
              setStudentClicked(false);
              setBatchClicked(false);
              setEventClicked(false);
              setSubjectClicked(false);
              setGardeClicked(false);
              setuserClicked(false);
              setBffStar(false);
            }}
            to="/web"
            className={dashboardClicked ? styles.onClick : styles.unClick}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontWeight:'600',
              margin:'0px 0px 10px 0px',
              paddingLeft: '25px',
              textDecoration:'none',
              color: 'White'

            }}
          >
            <BankOutlined className={styles.link_icon} /> Dashboard
          </NavLink>

          <NavLink
            to="/web/student"
            onClick={() => {
              setStudentClicked(true);
              setDashboardClicked(false);
              setBatchClicked(false);
              setEventClicked(false);
              setSubjectClicked(false);
              setGardeClicked(false);
              setuserClicked(false);
              setBffStar(false);
            }}
            className={
              studentClicked ? styles.onClick : styles.unClick
            }
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontWeight:'600',
              margin:'0px 0px 10px 0px',
              paddingLeft: '25px',
              textDecoration:'none',
              color: 'White'
            }}
          >
            <UsergroupAddOutlined className={styles.link_icon} />
            Student
          </NavLink>

          <NavLink
            to="/web/batch"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontWeight:'600',
              margin:'0px 0px 10px 0px',
              paddingLeft: '25px',
              textDecoration:'none',
              color: 'White'
            }}
            onClick={() => {
              setBatchClicked(true);
              setDashboardClicked(false);
              setStudentClicked(false);
              setEventClicked(false);
              setSubjectClicked(false);
              setGardeClicked(false);
              setuserClicked(false);
              setBffStar(false);
            }}
            className={
              batchClicked === true ? styles.onClick : styles.unClick
            }
          >
            <ContactsOutlined className={styles.link_icon} /> Batch
          </NavLink>

          <NavLink
            to="/web/events"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontWeight:'600',
              margin:'0px 0px 10px 0px',
              paddingLeft: '25px',
              textDecoration:'none',
              color: 'White'
            }}
            onClick={() => {
              setEventClicked(true);
              setBatchClicked(false);
              setDashboardClicked(false);
              setStudentClicked(false);
              setSubjectClicked(false);
              setGardeClicked(false);
              setuserClicked(false);
              setBffStar(false);
            }}
            className={
              eventClicked === true ? styles.onClick : styles.unClick
            }
          >
            <ProfileOutlined className={styles.link_icon} />
            Events
          </NavLink>

          <NavLink
            to="/web/subject"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontWeight:'600',
              margin:'0px 0px 10px 0px',
              paddingLeft: '25px',
              textDecoration:'none',
              color: 'White'
            }}
            onClick={() => {
              setSubjectClicked(true);
              setEventClicked(false);
              setBatchClicked(false);
              setDashboardClicked(false);
              setStudentClicked(false);
              setGardeClicked(false);
              setuserClicked(false);
              setBffStar(false);
            }}
            className={
              subjectClicked === true ? styles.onClick : styles.unClick
            }
          >
            <DiffOutlined className={styles.link_icon} /> Subjects
          </NavLink>

          <NavLink
            to="/web/grade"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontWeight:'600',
              margin:'0px 0px 10px 0px',
              paddingLeft: '25px',
              textDecoration:'none',
              color: 'White'
            }}
            onClick={() => {
              setGardeClicked(true);
              setSubjectClicked(false);
              setEventClicked(false);
              setBatchClicked(false);
              setDashboardClicked(false);
              setStudentClicked(false);
              setuserClicked(false);
              setBffStar(false);
            }}
            className={
              gradeClicked === true ? styles.onClick : styles.unClick
            }
          >
            <DashboardOutlined className={styles.link_icon} /> Grades
          </NavLink>

          <NavLink
            to="/web/users"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontWeight:'600',
              margin:'0px 0px 10px 0px',
              paddingLeft: '25px',
              textDecoration:'none',
              color: 'White'
            }}
            onClick={() => {
              setuserClicked(true);
              setGardeClicked(false);
              setSubjectClicked(false);
              setEventClicked(false);
              setBatchClicked(false);
              setDashboardClicked(false);
              setStudentClicked(false);
              setBffStar(false);
            }}
            className={
              userClicked === true ? styles.onClick : styles.unClick
            }
          >
            <HeatMapOutlined className={styles.link_icon} /> Users
          </NavLink>

          <NavLink
            to="/web/bff-star"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontWeight:'600',
              margin:'0px 0px 10px 0px',
              paddingLeft: '25px',
              textDecoration:'none',
              color: 'White'
            }}
            onClick={() => {
              setuserClicked(false);
              setGardeClicked(false);
              setSubjectClicked(false);
              setEventClicked(false);
              setBatchClicked(false);
              setDashboardClicked(false);
              setStudentClicked(false);
              setBffStar(true)
            }}
            className={
              bffStar === true ? styles.onClick : styles.unClick
            }
          >
            <HeatMapOutlined className={styles.link_icon} /> BFF Star's
          </NavLink>
        </ul>)
        :
        roleType == 2 ? 
        (<ul style={{ marginTop: "50px" }}>
          <NavLink
            onClick={() => {
              setDashboardClicked(true);
              setStudentClicked(false);
              setBatchClicked(false);
              setEventClicked(false);
              setSubjectClicked(false);
              setGardeClicked(false);
              setuserClicked(false);
              setBffStar(false);
            }}
            to="/web"
            className={dashboardClicked ? styles.onClick : styles.unClick}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontWeight:'600',
              margin:'0px 0px 10px 0px',
              paddingLeft: '25px',
              textDecoration:'none',
              color: 'White'

            }}
          >
            <BankOutlined className={styles.link_icon} /> Dashboard
          </NavLink>

          <NavLink
            to="/web/student"
            onClick={() => {
              setStudentClicked(true);
              setDashboardClicked(false);
              setBatchClicked(false);
              setEventClicked(false);
              setSubjectClicked(false);
              setGardeClicked(false);
              setuserClicked(false);
              setBffStar(false);
            }}
            className={
              studentClicked ? styles.onClick : styles.unClick
            }
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontWeight:'600',
              margin:'0px 0px 10px 0px',
              paddingLeft: '25px',
              textDecoration:'none',
              color: 'White'
            }}
          >
            <UsergroupAddOutlined className={styles.link_icon} />
            Student
          </NavLink>

          <NavLink
            to="/web/batch"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontWeight:'600',
              margin:'0px 0px 10px 0px',
              paddingLeft: '25px',
              textDecoration:'none',
              color: 'White'
            }}
            onClick={() => {
              setBatchClicked(true);
              setDashboardClicked(false);
              setStudentClicked(false);
              setEventClicked(false);
              setSubjectClicked(false);
              setGardeClicked(false);
              setuserClicked(false);
              setBffStar(false);
            }}
            className={
              batchClicked === true ? styles.onClick : styles.unClick
            }
          >
            <ContactsOutlined className={styles.link_icon} /> Batch
          </NavLink>

          <NavLink
            to="/web/events"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontWeight:'600',
              margin:'0px 0px 10px 0px',
              paddingLeft: '25px',
              textDecoration:'none',
              color: 'White'
            }}
            onClick={() => {
              setEventClicked(true);
              setBatchClicked(false);
              setDashboardClicked(false);
              setStudentClicked(false);
              setSubjectClicked(false);
              setGardeClicked(false);
              setuserClicked(false);
              setBffStar(false);
            }}
            className={
              eventClicked === true ? styles.onClick : styles.unClick
            }
          >
            <ProfileOutlined className={styles.link_icon} />
            Events
          </NavLink>

          <NavLink
            to="/web/subject"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontWeight:'600',
              margin:'0px 0px 10px 0px',
              paddingLeft: '25px',
              textDecoration:'none',
              color: 'White'
            }}
            onClick={() => {
              setSubjectClicked(true);
              setEventClicked(false);
              setBatchClicked(false);
              setDashboardClicked(false);
              setStudentClicked(false);
              setGardeClicked(false);
              setuserClicked(false);
              setBffStar(false);
            }}
            className={
              subjectClicked === true ? styles.onClick : styles.unClick
            }
          >
            <DiffOutlined className={styles.link_icon} /> Subjects
          </NavLink>

          <NavLink
            to="/web/grade"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontWeight:'600',
              margin:'0px 0px 10px 0px',
              paddingLeft: '25px',
              textDecoration:'none',
              color: 'White'
            }}
            onClick={() => {
              setGardeClicked(true);
              setSubjectClicked(false);
              setEventClicked(false);
              setBatchClicked(false);
              setDashboardClicked(false);
              setStudentClicked(false);
              setuserClicked(false);
              setBffStar(false);
            }}
            className={
              gradeClicked === true ? styles.onClick : styles.unClick
            }
          >
            <DashboardOutlined className={styles.link_icon} /> Grades
          </NavLink>

          <NavLink
            to="/web/users"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontWeight:'600',
              margin:'0px 0px 10px 0px',
              paddingLeft: '25px',
              textDecoration:'none',
              color: 'White'
            }}
            onClick={() => {
              setuserClicked(true);
              setGardeClicked(false);
              setSubjectClicked(false);
              setEventClicked(false);
              setBatchClicked(false);
              setDashboardClicked(false);
              setStudentClicked(false);
              setBffStar(false);
            }}
            className={
              userClicked === true ? styles.onClick : styles.unClick
            }
          >
            <HeatMapOutlined className={styles.link_icon} /> Users
          </NavLink>

          <NavLink
            to="/web/bff-star"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontWeight:'600',
              margin:'0px 0px 10px 0px',
              paddingLeft: '25px',
              textDecoration:'none',
              color: 'White'
            }}
            onClick={() => {
              setuserClicked(false);
              setGardeClicked(false);
              setSubjectClicked(false);
              setEventClicked(false);
              setBatchClicked(false);
              setDashboardClicked(false);
              setStudentClicked(false);
              setBffStar(true)
            }}
            className={
              bffStar === true ? styles.onClick : styles.unClick
            }
          >
            <HeatMapOutlined className={styles.link_icon} /> BFF Star's
          </NavLink>

        </ul>)
        :
        (<ul style={{ marginTop: "50px" }}>
          <NavLink
            onClick={() => {
              setDashboardClicked(true);
              setStudentClicked(false);
              setBatchClicked(false);
              setEventClicked(false);
              setSubjectClicked(false);
              setGardeClicked(false);
              setuserClicked(false);
            }}
            to="/web"
            className={dashboardClicked ? styles.onClick : styles.unClick}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontWeight:'600',
              margin:'0px 0px 10px 0px',
              paddingLeft: '25px',
              textDecoration:'none',
              color: 'White'

            }}
          >
            <BankOutlined className={styles.link_icon} /> Dashboard
          </NavLink>


          <NavLink
            to="/web/batch"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontWeight:'600',
              margin:'0px 0px 10px 0px',
              paddingLeft: '25px',
              textDecoration:'none',
              color: 'White'
            }}
            onClick={() => {
              setBatchClicked(true);
              setDashboardClicked(false);
              setStudentClicked(false);
              setEventClicked(false);
              setSubjectClicked(false);
              setGardeClicked(false);
              setuserClicked(false);
            }}
            className={
              batchClicked === true ? styles.onClick : styles.unClick
            }
          >
            <ContactsOutlined className={styles.link_icon} /> Batch
          </NavLink>

          <NavLink
            to="/web/events"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontWeight:'600',
              margin:'0px 0px 10px 0px',
              paddingLeft: '25px',
              textDecoration:'none',
              color: 'White'
            }}
            onClick={() => {
              setEventClicked(true);
              setBatchClicked(false);
              setDashboardClicked(false);
              setStudentClicked(false);
              setSubjectClicked(false);
              setGardeClicked(false);
              setuserClicked(false);
            }}
            className={
              eventClicked === true ? styles.onClick : styles.unClick
            }
          >
            <ProfileOutlined className={styles.link_icon} />
            Events
          </NavLink>
        </ul>)
        }
      </Sider>
    </div>
  );
};

export default SideNavbar;
