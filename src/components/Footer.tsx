// Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../styles/Footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-newsletter">
                <h2>Subscribe to our Newsletter</h2>
                <form className="newsletter-form">
                    <input type="email" placeholder="Enter your email" />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
            <div className="footer-links">
                <div className="footer-column">
                    <h3>Contact Us</h3>
                    <p>Email: contact@blogsite.com</p>
                    <p>Phone: +123 456 7890</p>
                </div>
                <div className="footer-column">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/projects">Projects</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://facebook.com"><FaFacebook /></a>
                        <a href="https://twitter.com"><FaTwitter /></a>
                        <a href="https://instagram.com"><FaInstagram /></a>
                        <a href="https://linkedin.com"><FaLinkedin /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 BlogSite. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
