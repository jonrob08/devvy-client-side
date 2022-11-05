

function Profile() {
    return (
        <div className="profile-page-container">
            <img className="cover-image" src="" />
            <div className="profile-container">
                <div className="profile-info-container">
                    <img className="profile-picture" src="" />
                    <div className="profile-data-container">
                        <div className="user-name">Bob Bob</div>
                        <div className="user-position">Janitor</div>
                    </div>
                </div>

                <div className="information-section">
                    <div className="user-description">
                        <h6>Profile Information</h6>
                        <p>Long description here</p>
                    </div>
                    <div className="user-description">
                        other content
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;