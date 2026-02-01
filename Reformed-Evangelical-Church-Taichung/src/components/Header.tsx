import React from 'react';

const Header: React.FC = () => {
    return (
        <header>
            <h1>Reformed Evangelical Church</h1>
            <nav>
                <ul>
                    <li><a href="/christianity">關於基督教</a></li>
                    <li><a href="/about">關於我們</a></li>
                    <li><a href="/events">聚會與服務</a></li>
                    <li><a href="#subscribe">訂閱與關注</a></li>
                    <li><a href="#visit">拜訪我們</a></li>
                    <li><a href="/topics">精選專題</a></li>
                    <li><a href="#resources">進修資源</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;