import './mainStructure.scss';
import { ArrowDownOutlined } from '@ant-design/icons';
import Search from 'antd/lib/input/Search';
import ListContent from '../Components/ListContent/ListContent';
import { Divider } from 'antd';
import Profile from '../Components/Profile/Profile';
import Menu from '../Components/Menu/Menu';
import Sider from 'antd/lib/layout/Sider';
import SubMenu from '../Components/SubMenu/SubMenu';
import { Content } from 'antd/lib/layout/layout';

export default function MainStructure() {

    return (
        <div className="mainStructure">
            <Sider className="sidebar" width={255}>
                <Profile />
                <Menu />
            </Sider>
            <div className="subMenu">
                <SubMenu />
            </div>
            <Content className="content">
                <div className="content_actions">
                    <h2>Greenhouse</h2>
                    <p>Where we keep you seeds and make them grow</p>
                    <Search placeholder="input search text" allowClear style={{ width: 640 }} />
                </div>
                <p>Logo Seedbed <ArrowDownOutlined /></p>
                <Divider />
                <div className="content_list">
                    <div className="list_content">
                        <ListContent />
                    </div>
                </div>
            </Content>
        </div>
    )
}