import React, {useState} from 'react'
import {Col, Row, Container} from 'react-bootstrap'

const Services = () => {

    const [service, setService] = useState('construction')


  return (
    <div className='service-container' >
        
        <div className={service === 'construction' ? "service-1 show" : "service-1" } >
        <h1 className='service-title'>New Construction</h1>
        <div className='service-info-container' >

            <img className='service-img' src="https://www.jbgoodwin.com/uploads/agent-1/austin_new_construction_home-min.jpg"/>

            <h5 className='service-info' >Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>

            
         </div>
         
         <div  className='service-buttons'>
         <button class="button-30" role="button" onClick={() => {setTimeout(() => {setService('remodeling');}, 550);}}>Remodeling</button>
            <button class="button-30" role="button" onClick={() => {setTimeout(() => {setService('management');}, 550);}} >Property Management</button>
         </div>
         

        </div>

        <div className={service === 'remodeling' ? "service-2 show" : "service-2" } >
        <h1 className='service-title' >Remodeling</h1>

           <div className='service-info-container' >
            <img className='service-img' src='https://blacklinerenovations.com/wp-content/uploads/2020/04/Blog-Living-in-Your-House-During-a-Remodel-10-Proven-Tips-Featured.jpg'/>

            <h5 className='service-info' >Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.    Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>

            </div>
            <div  className='service-buttons'>
                <button class="button-30" role="button" onClick={() => {setTimeout(() => {setService('management');}, 550);}}>Property Management</button>
                <button class="button-30" role="button" onClick={() => {setTimeout(() => {setService('construction');}, 550);}}>New Construction</button>
            </div>
        </div>
        
        <div className={service === 'management' ? "service-3 show" : "service-3" } >
        <h1 className='service-title' >Property Management</h1>
        <div className='service-info-container' >
            <img className='service-img' src='https://com.ohio.gov/wps/wcm/connect/gov/0c115c02-9baa-4cea-a5d4-300d4c086156/GettyImages-1207038160.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_K9I401S01H7F40QBNJU3SO1F56-0c115c02-9baa-4cea-a5d4-300d4c086156-nT57rqt'/>

            <h5 className='service-info' >Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>
        </div>

            <div className='service-buttons'>
                <button class="button-30" role="button" onClick={() => {setTimeout(() => {setService('remodeling');}, 550);}}>Remodeling</button>
                
                <button class="button-30" role="button" onClick={() => {setTimeout(() => {setService('construction');}, 550);}}>New Construction</button>
            </div>

            

        </div>
        

    </div>
  )
}

export default Services



{/* <Row>
    <Col xs={4} className='service-1' >
        <h1>New Construction</h1>
    </Col>
    <Col xs={4} className="service-2" >
        <h1>Remodeling</h1>
    </Col>
    <Col xs={4} className='service-3' >
        <h1>Property Management</h1>
    </Col>
</Row> */}







