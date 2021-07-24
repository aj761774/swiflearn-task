import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <div>
                <div className="upcoming">Upcoming <span className="bracket">(</span><span className="dot"></span><span className="bracket">)</span></div>
                <div>Live consultation</div>
            </div>
            <div>
                Buy Plans
            </div>
            <div>
                View Plans
            </div>
            <div>
                <button className="login-btn">Log In</button>
            </div>
        </div>
    )
}

export default Header
