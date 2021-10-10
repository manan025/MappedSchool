import React from 'react';
import {Alert, Button} from 'react-bootstrap';
import '../bootstrap/css/bootstrap.min.css'
import {Link} from "react-router-dom";
import './styles.css'
// import ReactTags from 'react-'
const Home = () => {
    return (
        <>
            <h1>Welcome to the world </h1>
            <div className="d-flex justify-content-around align-self-center btn-section align-middle">
                <Button variant={"dark"}><Link to={'/map'} className={"link"}>Go to Maps</Link></Button>
                <Button variant={"dark"}><Link to={'/class'} className={"link"}>Attend live class</Link></Button>
                <Button variant={"dark"}><Link to={'/checkin'} className={"link"}>Checkin to event</Link></Button>
            </div>
        </>
    );
};

export default Home;
