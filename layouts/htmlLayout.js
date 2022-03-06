import React from 'react'
import Link from "next/link"

const HTMLLayout = ({children}) => {
    return ( 
        <div className='container'>
            <div className='row'>
            <div className='col-3 course-nav'>
                <ul>
                    <li><Link href="/Courses/html/"><a>Introduction</a></Link></li>
                    <li><Link href="/Courses/html/html-syntax"><a>HTML Syntax</a></Link></li>
                </ul>
            </div>
            <div className='col-9 course-body'>{children}</div>
            </div>
        </div>
     )
}
 
export default HTMLLayout;