import React from "react";
import { Link} from "react-router-dom";
import {Avatar, Button, Col, Layout, Menu, Row} from "antd";
import { UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuth, selectCurrentUserLogin } from "../../redux/authSelectors";
import { logout } from "../../redux/authReducer";

export type MapPropsType = {}

export const Header: React.FC<MapPropsType> = (props) => {

const isAuth = useSelector(selectIsAuth)
const login = useSelector(selectCurrentUserLogin)

const dispatch = useDispatch()

const logoutCallback = () => {
  dispatch(logout())
}

  const { Header } = Layout;
  
  return <Header className="header">
  <Row>
    <Col span={18}>
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
    <Menu.Item key="1"><Link to="/developers">Developers</Link></Menu.Item>
  </Menu>
    </Col>

    {isAuth 
    ? <> <Col span={1}>
      <Avatar alt={login || ""} style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
    </Col>
    <Col span={5}>
      <Button onClick={logoutCallback}>Log out</Button>
    </Col>
    </>
    : <Col span={6}>
      <Button>
    <Link to={"/login"}>Login</Link>
    </Button>
    </Col>}
  </Row>  
</Header>
    
    // <header className={classes.header}>
    //   <img src="https://www.fao.org/fileadmin/user_upload/soils-2015/images/EN/logo_only.jpg"></img>

    //   <div className={classes.loginBlock}>
    //     {props.isAuth ? (
    //       <div>
    //         {props.login} <button onClick={props.logout}>Log out</button>
    //       </div>
    //     ) : (
    //       <NavLink to={"/login"}>Login</NavLink>
    //     )}
    //   </div>
    // </header>
};


