import React from 'react'
import '../Styles/global.css';
import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/react-resizable/css/styles.css'

export default function Layout({ children }) {
  return (
    <div className="content">
      {children}
    </div>
  )
}
