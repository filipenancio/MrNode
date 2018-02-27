import React from 'react'
import ReactDOM from 'react-dom'

import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName='Venancio'>
        <Member name='Filipe'/>
        <Member name='Caroline'/>
    </Family>
    , document.getElementById('app'))

