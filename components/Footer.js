import Link from 'next/link';

const linkStyle = {
    marginRight: 15,
    border: '2px solid #DDD',
    borderColor: 'blue'
};

const Footer = () => (
    <div>

        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle}>About</a>
        </Link>
    </div>
);

export default Footer;