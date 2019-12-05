import Header from './Header'
import Footer from "./Footer";

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
}

export default function Layout(props) {
    return (
        <div style={layoutStyle}>
            <Header />
            {props.children}
            <br/><br/><br/><br/>
            <Footer/>
        </div>
    )
}
