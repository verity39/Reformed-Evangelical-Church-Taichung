import React from 'react';
import Header from '../components/Header';
import RedLinksSection from '../components/RedLinksSection';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <RedLinksSection />
            <Footer />
        </div>
    );
};

export default Home;