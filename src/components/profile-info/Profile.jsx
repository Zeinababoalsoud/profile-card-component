import './Profile.css'
import profileImg from '../../assets/images/image-victor.jpg'
function Profile(){
    return(
        <div id='container'>
            <div className="backgroundImg"></div>
            <div className="info">
                <img src={profileImg} className='profileImg'/>
                <label className='user-name'>victor crest <span className='age'>26</span></label>
                <label className='place'>london</label>
            </div>
            <div className="topcontent">
                    <label>80k</label>
                    <label>803k</label>
                    <label>1.5k</label>
            </div>
            <div className="bottomContent">
                    <label>followers</label>
                    <label>likes</label>
                    <label>photes</label>
            </div>
        </div>
    )
}
export default Profile
