import { BellFilled, ToolFilled } from "@ant-design/icons";
import styles from './menu.module.scss'

function Menu() {

    return (
        <>
            <div className={styles.menu}>
                <ul>
                    <li>
                        <div className={styles.menu_item}>
                            <ToolFilled style={{ fontSize: '24px' }} />
                            <p className={styles.menu_item_name}>Toolshed</p>
                        </div>
                    </li>
                    <li>
                        <div className={styles.menu_item}>
                            <img src="https://img.icons8.com/material/24/000000/leaf.png" className={styles.menu_item_icon} alt="Leaf Icon" />
                            <p className={styles.menu_item_name}>Greenhouse</p>
                        </div>
                    </li>
                    <li>
                        <div className={styles.menu_item}>
                            <img src="https://img.icons8.com/material/24/000000/sprout.png" className={styles.menu_item_icon} alt="Sprout Icon" />
                            <p className={styles.menu_item_name}>Garden</p>
                        </div>
                    </li>
                    <li>
                        <div className={styles.menu_item}>
                            <BellFilled style={{ fontSize: '24px' }} />
                            <p className={styles.menu_item_name}>Garden Journal</p>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Menu;