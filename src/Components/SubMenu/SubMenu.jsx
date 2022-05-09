import { PlusOutlined, SearchOutlined, ArrowDownOutlined, ArrowRightOutlined, StarFilled } from '@ant-design/icons';
import { Divider } from 'antd';
import { useEffect, useState } from 'react';
import { getSeedbed } from '../../Utils/apiRequest';
import styles from "./subMenu.module.scss";

function SubMenu() {

    const [seedbed, setSeedbed] = useState(null)

    useEffect(() => {
        const getClients = async () => {
            const data = await getSeedbed()
            const items = data.map(e => ({ label: e.name }));
            setSeedbed(items);
        }
        if (seedbed === null) {
            getClients();

        }
    }, [seedbed])

    return (
        <>
            <div className={styles.actions}>
                <h3>Greenhouse</h3>
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
            <div className={styles.actions}>
                <ul className={styles.actions_container}>
                    <li>
                        <ArrowDownOutlined />
                        Client seeds
                    </li>
                </ul>
            </div>
            <Divider />
            <div className={styles.actions}>
                <ul className={styles.actions_container}>
                    <li><ArrowDownOutlined />Active Seedbeds</li>
                    <li>
                        <ul className={styles.actions_container}>
                            <li> <StarFilled /> Logo</li>
                            <li><StarFilled />Styleguides</li>
                            <li><StarFilled />Packaging</li>
                        </ul>
                    </li>
                    <li><ArrowRightOutlined />Paused Seedbeds</li>
                    <li><ArrowRightOutlined />Seed Archive</li>
                </ul>
            </div>
        </>
    )
}

export default SubMenu;