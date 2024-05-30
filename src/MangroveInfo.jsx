import PropTypes from 'prop-types';
import { useState } from 'react';
import './MangroveInfo.css';
import 'animate.css';

export const MangroveInfo = ({ data, position, onClose }) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 500); // delay to allow animation to complete
    };

    return (

        <div className={`mangrove-info ${isVisible ? 'animate__bounceIn' : 'animate__bounceOut'}`} style={{ top: position.y, left: position.x, paddingTop: '2rem', paddingLeft: '1rem' }}>


            <button className="close-button" onClick={handleClose}>Close</button>

            {/* <img
                draggable={false}
                src={data.image}
                alt={"Mangrove" + data.title}
                className="mangrove"
            /> */}



            <h2>{data.title}</h2>
            <p >{data.description}</p>
            <hr />
            <p><strong>Policies:</strong> {data.policies}</p>
            {/* <a href={data.reference} target='_blank'><small>Learn More</small></a> */}
        </div >
    );
};

MangroveInfo.propTypes = {
    data: PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        policies: PropTypes.string,
        reference: PropTypes.string,
    }),
    position: PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number
    }),
    onClose: PropTypes.func
};


