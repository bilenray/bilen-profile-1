import React from 'react'
import './Learning-track.css'

const LearningTrack = () => {
  return (
    <div className='lt-wrapper' id="lt-wrapper">
        {/* <div className='plaid-background-lt lt-bg'></div> */}
        <div className='lt-react-wrapper'>
            <div className='lt-react-track'>
                <div className='lt-hover-control'>
                    <div data-hover="HMTL and JSX" className='lt-html-css-js hovertext z'>HTML</div>
                </div>
                <div className='lt-hover-control'>
                    <div data-hover="CSS and Styled Component for styling" className='lt-react-concept-jsx hovertext z'>CSS</div>
                </div>
                <div className='lt-hover-control'>
                    <div data-hover="Javascript" className='lt-hooks hovertext z'>JS</div>
                </div>
                <div className='lt-hover-control'>
                    <div data-hover="Intermediate to Advance" className='lt-props-drilling hovertext z'>REACT.js</div>
                </div>
                <div className='lt-hover-control'>
                    <div data-hover="Begineer Level" className='lt-props-drilling hovertext z'>TYPESCRIPT</div>
                </div>
                <div className='lt-hover-control'>
                    <div data-hover="SSG and basics" className='lt-props-drilling hovertext z'>NEXT.js</div>
                </div>
                {/* <div className='lt-hover-control'>
                    <div data-hover="Optimized way and advance hooks for better performance" className='lt-composition-advance-hooks hovertext z'></div>
                </div> */}
                <div className='lt-hover-control'>
                    <div data-hover="To fetch data from api in more better way and control the errors" className='lt-react-query-api-call hovertext-l z'>React Query</div>
                </div>
            </div>
            <div className='lt-programming'>FrontEnd</div>
        </div>
        <div className='lt-node-wrapper'>
            <div className='lt-node-track'>
                {/* <div className='lt-hover-control'>
                    <div data-hover="Basics of Node.js" className='lt-basics hovertext z'>BackEnd</div>
                </div> */}
                <div className='lt-hover-control'>
                    <div data-hover="Perform the crud operation" className='lt-crud hovertext z'>Node.js</div>
                </div>
                <div className='lt-hover-control'>
                    <div data-hover="Perform the crud operation" className='lt-crud hovertext z'>Express.js</div>
                </div>
                <div className='lt-hover-control'>
                    <div data-hover="Instant connection for chat app and notification" className='lt-socket hovertext z'>Socket.io</div>
                </div>
                <div className='lt-hover-control'>
                    <div data-hover="Complete GraphQl Api" className='lt-apicall-handle hovertext z to-learn'>GraphQl</div>
                </div>
                <div className='lt-hover-control'>
                    <div data-hover="Database using mongoose" className='lt-nosql-sql hovertext z to-learn'>NO-SQL (Mongoose)</div>
                </div>
                {/* <div className='lt-hover-control'>
                    <div data-hover="Yet to learn" className='lt-cloud hovertext z to-learn'></div>
                </div>
                <div className='lt-hover-control'>
                    <div data-hover="Yet to learn" className='lt-largedata-security hovertext z to-learn'>Large Data and Security</div>
                </div> */}
            </div>
            <div className='lt-programming'>BackEnd</div>
        </div>
    </div>
)
}

export default LearningTrack
