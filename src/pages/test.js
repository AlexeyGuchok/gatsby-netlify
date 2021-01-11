import React from 'react'
import {navigate} from 'gatsby'
import Header from '../components/Header'
import Button from 'react-bootstrap/Button'

const Test = () => (
    <div>
        <Header title="Header" />
        <h1>Test Page</h1>
        <Button variant="primary" onClick={() => navigate('/')}>HomePage</Button>
    </div>
)

export default Test;