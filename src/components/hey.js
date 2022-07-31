import React  from 'react';
import Button from 'react-bootstrap/Button';
import '../css/mix.css';

function Cont(){

return (
 <>
    <div className="cont">
        <h1 className='s'>Get the latest call<br/>
Memberships now open!</h1>
<br/>
  <Button variant='prm' className='prm'>Buy Now!</Button>
  <Button variant='drm' className='drm'>Get in Touch!</Button>
    </div>
  </>
);
}

export default Cont;