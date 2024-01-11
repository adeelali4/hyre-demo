'use client'
import React, { useState } from 'react';
import Calendar from "moedim";
import './SmallCalendar.css';

export default function SmallCalendar(){
    const [value, setValue] = useState(new Date())
    return <>
        <Calendar value={value} onChange={d=>setValue(d)} />
    </>
}