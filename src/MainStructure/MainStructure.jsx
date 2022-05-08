import './mainStructure.scss';
import { ToolFilled, BellFilled, PlusOutlined, SearchOutlined, ArrowDownOutlined, ArrowRightOutlined, StarFilled } from '@ant-design/icons';
import Search from 'antd/lib/input/Search';

import ListContent from '../Components/ListContent/ListContent';
import { Divider } from 'antd';
import Profile from '../Components/Profile/Profile';

export default function MainStructure() {

    return (
        <div className="mainStructure">
            <div className="sidebar">
                <Profile />
                <div className="menu">
                    <ul>
                        <li>
                            <div className="menu_item">
                                <ToolFilled style={{ fontSize: '24px' }} />
                                <p className='menu_item_name'>Toolshed</p>
                            </div>
                        </li>
                        <li>
                            <div className="menu_item">
                                <img src="https://img.icons8.com/material/24/000000/leaf.png" className='menu_item_icon' alt="Leaf Icon" />
                                <p className='menu_item_name'>Greenhouse</p>
                            </div>
                        </li>
                        <li>
                            <div className="menu_item">
                                <img src="https://img.icons8.com/material/24/000000/sprout.png" className='menu_item_icon' alt="Sprout Icon" />
                                <p className='menu_item_name'>Garden</p>
                            </div>
                        </li>
                        <li>
                            <div className="menu_item">
                                <BellFilled style={{ fontSize: '24px' }} />
                                <p className='menu_item_name'>Garden Journal</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="sidebar-in">
                <div className="actions">
                    <p>Greenhouse</p>
                    <ul>
                        <li>
                            <PlusOutlined /> Create client seed
                        </li>
                        <li>
                            <PlusOutlined />
                            Add Seedbed
                        </li>
                        <li>
                            <SearchOutlined />
                            Search
                        </li>
                    </ul>
                </div>
                <Divider />
                <div className="actions">
                    <ul className='actions_container'>
                        <li>
                            <ArrowDownOutlined />
                            Client seeds
                        </li>
                    </ul>
                </div>
                <Divider />
                <div className="actions">
                    <ul className='actions_containter'>
                        <li><ArrowDownOutlined />Active Seedbeds</li>
                        <li>
                            <ul className='actions_container'>
                                <li> <StarFilled /> Logo</li>
                                <li><StarFilled />Styleguides</li>
                                <li><StarFilled />Packaging</li>
                            </ul>
                        </li>
                        <li><ArrowRightOutlined />Paused Seedbeds</li>
                        <li><ArrowRightOutlined />Seed Archive</li>
                    </ul>
                </div>
            </div>
            <div className="content">
                <div className="content_actions">
                    <h2>Greenhouse</h2>
                    <p>Where we keep you seeds and make them grow</p>
                    <Search placeholder="input search text" allowClear style={{ width: 640 }} />
                </div>
                <p>Logo Seedbed <ArrowDownOutlined /></p>
                <Divider />
                <p>Showing 10 of ... seeds</p>
                <div className="content_list">
                    <div className="list_content">
                        <ListContent />
                    </div>
                </div>

            </div>
        </div>
    )
}