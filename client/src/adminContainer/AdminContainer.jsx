import React from 'react'
import { connect } from 'react-redux';
import AppBar from './components/AppBar';

const AdminContainer = () => 
<div style={{height: '100%'}}>
    <AppBar />
</div>
    
  


export default connect(null)(AdminContainer)
