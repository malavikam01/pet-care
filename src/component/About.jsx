import { faMagnifyingGlass,faMessage,faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'




function About() {

  return (
    <>
     <div className="container  py-4 rounded-3 " >
      {/* about section */}
      <div className="row w-100 pt-2">
        
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div >
            <img src="bk.png" alt="" width={'150%'} height={'250px'} className='rounded-3' style={{borderRadius:'20%'}} />
          </div>
        </div>
        <div className="col-lg-6 text-center text-lg-start d-flex align-items-center justify-content-center">
     <div>
        <h2 className=" fw-bold"  style={{color:'rgba(26, 119, 104)'}}>About Us</h2>
        <p className="text-muted lead mb-4">
          Welcome To <span className="fw-bold" style={{color:'rgba(26, 119, 104)'}}>FUR</span>, your new partner in pet care! Our dedicated team of veterinary professionals is passionate about providing compassionate, top-quality healthcare for your furry friends.From routine check-ups to specialized treatments, we prioritize your pet’s well-being and comfort.
        </p>
        <a href="/services" className="btn  text-white btn-lg px-5 rounded-pill shadow-sm" style={{ backgroundColor: 'rgba(26, 119, 104)', borderColor: '#1a7768' }}>Learn More</a>
    </div>
    </div>
  
      </div>
    
     {/* our services  */}
     <h2 className=" fw-bold text-center"  style={{color:'rgba(26, 119, 104)',marginTop:'70px'}}>Our Services</h2>
    <div className="row mt-4">
      <div className="col-md-6 d-flex align-items-center justify-content-center p-2 flex-column">
      <div className='d-flex'>
        <img src="/pet-groomingl.png" alt="" width={'65px'} height={'75px'} />
        <div className='ms-3 mt-2'>
          <h3 className=' text-black fw-bold lead '>Pet grooming</h3>
          <p>Pampering your pets with love and style for a fresh look!</p>
        </div>
      </div>

      <div className='d-flex'>
        <img src="/training.png" alt="" width={'65px'} height={'75px'} />
        <div className='ms-3 mt-2'>
          <h3 className=' text-black fw-bold lead '>Pet Training</h3>
          <p>Transforming playful kitties into well-mannered companions!</p>
        </div>
      </div>

      <div className='d-flex'>
        <img src="/walking.png" alt="" width={'65px'} height={'75px'} />
        <div className='ms-3 mt-2'>
          <h3 className=' text-black fw-bold lead '>Pet Walking</h3>
          <p>Enjoying fresh air and adventure, one happy paw at a time!</p>
        </div>
      </div>

      <div className='d-flex'>
        <img src="sitting.png" alt="" width={'65px'} height={'75px'} />
        <div className='ms-3 mt-2'>
          <h3 className=' text-black fw-bold lead '>Pet sitting</h3>
          <p>Trusted care and companionship for pets while you're away!</p>
        </div>
      </div>

      
      </div>
      <div className="col-md-6 d-flex align-items-center justify-content-center">
      <div >
            <img src="https://png.pngtree.com/png-clipart/20230429/original/pngtree-family-day-family-and-pets-png-image_9123690.png" alt="" width={'100%'} height={'320px'}  className='rounded-3' style={{borderRadius:'20%'}} />
          </div>
      </div>

    </div>


    </div> 
         
         
         
         
         
         
         
         
          {/* how to work */}

 {/* <div className='container-fluid secn bg-light'>
  <h2 className="fw-bold text-center mt-3 pt-4" style={{ color: 'rgba(26, 119, 104)' }}>
    How PetPulse Works
  </h2>
  
  <div className="row text-center">
    <div className="col-md-4 d-flex align-items-center justify-content-center mb-4">
      <div className="px-4 py-3  hover-effect">
        <FontAwesomeIcon icon={faMagnifyingGlass} className='fa-3x mb-3' style={{ color: '#1a7768' }} />
        <h3 className="fw-bold mb-3 text-black">Search</h3>
        <p className="text-muted">Find the perfect service for your pet’s needs.</p>
      </div>
    </div>
    
    <div className="col-md-4 d-flex align-items-center justify-content-center mb-4">
      <div className="px-4 py-3  hover-effect">
        <FontAwesomeIcon icon={faMessage} className='fa-3x mb-3' style={{ color: '#1a7768' }} />
        <h3 className="fw-bold mb-3 text-black">Book</h3>
        <p className="text-muted">Schedule your appointment with ease.</p>
      </div>
    </div>
    
    <div className="col-md-4 d-flex align-items-center justify-content-center mb-4">
      <div className="px-4 py-3  hover-effect">
        <FontAwesomeIcon icon={faCartShopping} className='fa-3x mb-3' style={{ color: '#1a7768' }} />
        <h3 className="fw-bold mb-3 text-black">Relax</h3>
        <p className="text-muted">Our team will take care of the rest.</p>
      </div>
    </div>
  </div>

</div>
 */}

    </>
  )
}

export default About