import React from 'react'
import auth from '../../../Home/CommonComponents/Auth'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

const DoctorsDashHeader = (props) => {
    return (
        <div>
            <Navbar style={{ backgroundColor:'#45ac8b' }}>
                <Link exact to="/doctorDashboard">  <Navbar.Brand href="#home" style={{ color:'#fff' }}>BookAnAppointment</Navbar.Brand></Link>
                <Nav className="mr-auto">
                    <Link exact to="/doctorDashboard"><Nav.Link href="#home" style={{ color:'#fff' }}>Home</Nav.Link></Link>
                    <Link to="/doctorDashboard/uploadProjectImage"> <Nav.Link href="#features" style={{ color:'#fff' }}>Add Doctor Info</Nav.Link></Link>
                    <Link to="/doctorDashboard/showProjects"> <Nav.Link href="#features" style={{ color:'#fff' }}>My Profile</Nav.Link></Link>

                    <Button
                        onClick={() => {
                            auth.logout(() => {
                                props.logout.push("/");
                            });
                        }}
                    >
                        Logout
                    </Button>
                </Nav>
            </Navbar>
        </div>
    )
}

export default DoctorsDashHeader
