import React, { useState } from 'react';
import './Home.css'

const Home = () => {

    const [bg, setBg] = useState( '#fef2ee' )
    const [family, setFamily] = useState(`'courier', monospace`)
    const [color, setColor] = useState('Black')

    // console.log(bg, typeof bg );

    const onreset = () => {
        setBg('#fef2ee');  
        setFamily(`'courier', monospace`);  
        setColor('Black');
    }

    return (
        <div>
        <div  className="main-div"  >
            <div className="bg-div"  style={ {   backgroundColor: bg , fontFamily: family , color: color  }} >
                <h1> Change Text and generate Code  </h1>
                <p> By pressing buttons below one can change text box color, font color, font family</p>
            </div>
        </div>
        <div  className="below-div" >
            <div>
            <div  className="btn-div" >  
                <p> Background color:</p>
                <button onClick={ () => setBg('#14234c') } className="btn-style"  style={{ backgroundColor: '#14234c' }} > Blue </button>
                <button onClick={ () => setBg('#102a17') } className="btn-style"  style={{ backgroundColor: '#102a17',  }} > green </button>
                <button onClick={ () => setBg('#b11e22') } className="btn-style"  style={{ backgroundColor: '#b11e22',  }} > red </button>
            </div>

            <div  className="btn-div"  >  
                <p> Font family:</p>
                <button onClick={ () => setFamily(`'Ubuntu', sans-serif`) }  className='btn-style font-btn'  > Ubuntu </button>
                <button onClick={ () => setFamily(`'Roboto', sans-serif`) }  className='btn-style font-btn' > Roboto </button>
                <button onClick={ () => setFamily(`'courier', monospace`) }  className='btn-style font-btn' >  Courier new </button>
            </div>

            <div  className="btn-div"  >  
                <p> Font color:</p>
                <button onClick={ () => setColor('cyan') }  className='btn-style color-btn ' style={{ borderColor: 'cyan' }}  > Cyan </button>
                <button onClick={ () => setColor('purple') }  className='btn-style color-btn'  style={{ borderColor: 'purple' }}  > Purple </button>
                <button onClick={ () => setColor('Black') }  className='btn-style color-btn'  style={{ borderColor: 'Black' }}  >  Black </button>
            </div>

            <button onClick={ () => onreset() }  className='btn-style  ' style={{ backgroundColor: 'yellow', color: 'black' }}  > Reset </button>

            </div>

            <div style={{ margin:'0 10px' }} >
                <textarea readOnly rows='9' style={{ width: '30rem' }}
                value={`
                //Code for above text box
                .bg-div{
                    padding: 2rem 5rem; 
                    width: fit-content;
                    background-color: ${bg};
                    font-family: ${family};
                    color: ${color};
                }
                
                `} 
                />
            </div>
        </div>
        </div>
    );
};

export default Home;