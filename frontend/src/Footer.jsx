import React from 'react';
import './Footer.css'; // Assuming you will create a CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>About this project: A recipe book application to share and discover recipes.</p>
                <p>Connect with me on social media:</p>
                <ul>
                    <li><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li><a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    <li><a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                </ul>
                <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
