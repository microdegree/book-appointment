import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'

const AppointmentCard = (props) => {

    const [userDataWhoBooked, setUserDataWhoBooked] = useState({})

    useEffect(() => {
        fetchUserInfoFromServer()
    }, [])

    return (
        <div>
            <Card style={{ width: '18rem', backgroundColor: '#45ac8b', margin: 25 }}>
                <Card.Body>
                    <Card.Title  style={{ height: '30px', color: '#45ac8b', backgroundColor: '#fff' }}>{userDataWhoBooked.name ? userDataWhoBooked.name : ""}</Card.Title>
                    <Card.Subtitle style={{ color:'#fff' }} >{props.bookingData.consumerEmail}</Card.Subtitle>
                    <Card.Text style={{ color: '#ad0000', fontWeight: "bold" }}>
                        Appointment booked by above Patient
                    </Card.Text>
                    <Card.Footer style={{ color:'#fff' }}>  Appt Date : {props.bookingData.appointmentDate} <br />
                        Charges : {props.bookingData.finalPrice} <br /></Card.Footer>
                </Card.Body>
            </Card>
        </div>
    )

    function fetchUserInfoFromServer() {

        console.log('In fetchBookingsFromServer ')

        //reuse the same login api to get userdata
        fetch('/api/authenticate/getUserInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 'email': props.bookingData.consumerEmail })
        })
            .then(response => response.json())
            .then(data => {
                console.log('data retrieved ', data)
                setUserDataWhoBooked(data[0])
            })
            .catch(err => console.log('Error when calling api : ' + err))
    }
}

export default AppointmentCard
