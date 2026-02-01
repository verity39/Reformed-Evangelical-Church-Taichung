import React from 'react';

const links = [
    { name: '關於基督教', href: '/christianity' },
    { name: '關於我們', href: '/about' },
    { name: '聚會與服務', href: '/events' },
    { name: '訂閱與關注', href: '#subscribe' },
    { name: '拜訪我們', href: '#visit' },
    { name: '精選專題', href: '/topics' },
    { name: '進修資源', href: '#resources' },
];

const RedLinksSection: React.FC = () => {
    return (
        <div style={{ backgroundColor: 'red', padding: '20px' }}>
            <h2>紅色區塊的連結</h2>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.href} style={{ color: 'white' }}>
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RedLinksSection;