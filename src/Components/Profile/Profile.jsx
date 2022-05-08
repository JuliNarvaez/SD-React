import { useEffect, useState } from 'react';
import { getProfile } from '../../Utils/apiRequest';
import { UserOutlined } from '@ant-design/icons'
import { Avatar } from 'antd';

function Profile() {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const getProfiles = async () => {
            const data = await getProfile()
            console.log(data)
            setProfile(data);
        }
        if (profile === null) {
            getProfiles();
        }
    }, [profile, setProfile])

    return (
        <div className="profile">
            <Avatar size={64} icon={<UserOutlined />} />
            <h4 className="profile_name">{profile?.name} {profile?.lastname}</h4>
        </div>
    )
}

export default Profile;