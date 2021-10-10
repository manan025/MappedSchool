import React from 'react';
import '../bootstrap/css/bootstrap.min.css'
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

const Checkin = () => {
    return (
        <div>
            <div>
                <h1>Events @ Your School</h1>
            </div>
            <ul className="list-group bg-dark events">
                <li className="list-group-item d-flex justify-content-around">Event 1: Make UC<Button variant={"dark"}><Link to={"/register"}>Check In</Link></Button> </li>
                <li className="list-group-item d-flex justify-content-around">Event 2: Career Counselling<Button variant={"dark"}><Link to={"/register"}>Check in</Link></Button></li>
                <li className="list-group-item d-flex justify-content-around">Class: Mathematics<Button variant={"dark"}>Mark Attendance</Button></li>
            </ul>
        </div>
    );
};

export default Checkin;
