import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./MainButton.module.css";

function MainButton({text, Img, title, routes}){
    return(
        <div>
            <img src={Img} alt={title} />
            <Link to={`../routes/${routes}`}>
            <button className={styles.button}>{text}</button>
            </Link>
        </div>
    )
}

MainButton.propTypes = {
    text: PropTypes.string.isRequired,
    Img: PropTypes.string,
    title: PropTypes.string,
    routes: PropTypes.string
}

export default MainButton;