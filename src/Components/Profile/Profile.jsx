import { useEffect, useState } from 'react';
import { getProfile } from '../../Utils/apiRequest';
import { UserOutlined } from '@ant-design/icons'
import { Avatar } from 'antd';
import styles from './styles.module.scss';

function Profile() {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const getProfiles = async () => {
            const data = await getProfile()
            setProfile(data);
        }
        if (profile === null) {
            getProfiles();
        }
    }, [profile, setProfile])

    return (
        <div className={styles.profile}>
            <Avatar size={64} icon={<UserOutlined />} />
            <h4 className={styles.profile_name}>{profile?.name} {profile?.lastname}</h4>
        </div>
    )
}

export default Profile;