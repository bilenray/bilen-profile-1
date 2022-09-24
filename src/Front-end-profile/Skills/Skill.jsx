import React from 'react'
import './skill.css'
import jsIcon from '../../svgIcons/js.svg'
import cssIcon from '../../svgIcons/css3-alt.svg'
import htmlIcon from '../../svgIcons/html5.svg'


const Skill = () => {
  const [showCard, setShowCard] = React.useState(true)
  const [items, setItems] = React.useState({ head:"", icon:"", title:[]})

  const sendItems=(head, icon)=>{
    setItems({head:head, icon:icon})
    if (head== 'vanilla JS'){
      setItems({title:['I know the basics', 'I have done the synchronous and asynchronous functions']})
    } else if (head== 'HTML'){
      setItems({title:['I know the basics', 'I have done the synchronous and asynchronous functions']})
    }else if (head== 'CSS'){
      setItems({title:['I know the basics', 'I have done the synchronous and asynchronous functions']})
    }else if (head== 'JSX'){
      setItems({title:['I know the basics', 'I have done the synchronous and asynchronous functions']})
    }
  }
  const reducer=(state, action)=>{
    switch (action.type){
      case 'JS':
        return {
        showJS:!state.showJS, showHTML:state.showHTML, showCSS:state.showCSS
      }
      case 'HTML':
        return {
        showJS:state.showJS, showHTML:!state.showHTML, showCSS:state.showCSS
      }
      case 'CSS':
        return {
          showJS:state.showJS, showHTML:state.showHTML, showCSS:!state.showCSS
      }
    }
  }
  const [state, dispatch] = React.useReducer(reducer,{showJS:false, showHTML:false, showCSS:false})

  return (
    <div>
      <div className='s-react-wrapper'>
        <div className='s-react-card-wrapper'>
          <div className={showCard?'s-react-card-hidden':'s-react-card-dissapear'} onClick={()=>setShowCard(!showCard)}>
            <div className='s-waterfall plaid-background-waterfall'></div>
            <div className='s-skill'>React</div>
            <div className='s-skill-level'></div>
          </div>
          <div className={showCard?'s-react-card-hidden s-react-card-hidden-letter':'s-react-card-dissapear'} onClick={()=>setShowCard(!showCard)}>
            <div className='s-waterfall'>Continuous Learning</div>
            
          </div>
          <div className={showCard?'s-react-card-hidden':'s-react-card-dissapear'} onClick={()=>setShowCard(!showCard)}>
            <div className='s-waterfall plaid-background-waterfall'></div>
            <div className='s-skill'>Node</div>
            <div className='s-skill-level-node'></div>
          </div>
        </div>
        <div  className={showCard? 's-react-card-dissapear':'s-card-open'}>
          <div onClick={()=>setShowCard(!showCard)} className='s-react-card-hidden-container'>
            <div className='s-react-card-hidden'>
              <div className='s-waterfall plaid-background-waterfall'></div>
              <div className='s-skill'>React</div>
              <div className='s-skill-level'></div>
            </div>
          </div>
          <div className='s-react-subskills'>
            <div className='s-react-relative-card'>
              <div className='s-html' onClick={()=>[sendItems('HTML', 'htmlIcon'), dispatch({type:"HTML"})]}>
                <div className='s-head'>HTML</div>
                <img src={htmlIcon} className='s-icon'></img>
                <button className='btn'>Click</button>
              </div>
              <div className='s-css-framer-motion' onClick={()=>[sendItems('CSS', 'cssIcon'), dispatch({type:"CSS"})]}>
                <div className='s-head'>CSS</div>
                <img src={cssIcon} className='s-icon'></img>
                <button className='btn'>Click</button>
              </div>
              <div className='s-vanilla-js' onClick={()=>[sendItems('vanilla JS', 'jsIcon'), dispatch({type:"JS"})]}>
                <div className='s-head'>JS</div>
                <img src={jsIcon} className='s-icon' ></img>
                <button className='btn'>Click</button>
              </div>
            </div>
            <div className='s-react-absolute-card'>
              <div className='s-react-absolute-left'>
                  <img src="" className='s-react-absolute-icons'></img>
                  <div className='s-react-absolute-head'>{items.head}</div>
              </div>
              <div className='s-react-absolute-right'>
                {
                  items.title.map((list)=><div className='s-react-list'>{list}</div>)
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skill