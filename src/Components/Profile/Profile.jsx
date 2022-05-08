import { DataContext } from '../../DataProvider';
import { useContext, useEffect } from 'react';
import './profile.scss';
import { getProfile } from '../../Utils/apiRequest';
import Menu from '../Menu/Menu';
import { ToolFilled, HighlightFilled, AndroidFilled, GitlabFilled } from '@ant-design/icons'



function Profile() {
    const { profile, setProfile } = useContext(DataContext);

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
        <div className="sidebar">
            <div className="profile">
                <img src="https://picsum.photos/50/50" alt="" className="profile_avatar" />
                <h4 className="profile_name">{profile?.name} {profile?.lastname}</h4>
            </div>
            <div className="menu">
                <Menu name="Toolshed"><ToolFilled /></Menu>
                <Menu name="Greenhouse"><HighlightFilled /></Menu>
                <Menu name="Garden"><AndroidFilled /></Menu>
                <Menu name="Garden Journal"><GitlabFilled /></Menu>
            </div>
        </div>
    )
}

export default Profile;