import React, { useState } from 'react';
import Header from '../component/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap'; // Import necessary components from react-bootstrap

function Home() {
  // State for the search query
  const [searchQuery, setSearchQuery] = useState('');
  
  // State for managing modal visibility
  const [showModal, setShowModal] = useState(false);

  // Array of services data
  const services = [
    { id: 1, name: 'Pet Taxi', description: 'Our pet taxi service...', price: '₹1000', imgSrc: '/pet-taxi.png' },
    { id: 2, name: 'Pet Walking', description: 'Let us take your furry friend...', price: '₹3000', imgSrc: '/dog-walking.png' },
    { id: 3, name: 'Pet Grooming', description: 'Transform your pet with our grooming...', price: '₹2000', imgSrc: '/pet-grooming.png' },
    { id: 4, name: 'Pet Day Care', description: 'Ensure your pet has a fun-filled day...', price: '₹2000', imgSrc: '/pet-boarding.png' },
    { id: 5, name: 'Pet Training', description: 'Our professional trainers...', price: '₹3000', imgSrc: '/training.png' },
    { id: 6, name: 'Pet Sitting', description: 'Give your pet the comfort...', price: '₹1000', imgSrc: '/sitting.png' },
  ];

  // Handle search query change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter services based on the search query
  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Toggle modal visibility
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Header />
      <div className="container mb-5">
        <h3 className="fw-bold text-center text-black mt-4">Find your services</h3>

        {/* Messages Button */}
        {/* <button 
          type="button" 
          className="btn btn-info" 
          style={{ position: 'fixed', bottom: '20px', right: '20px' }} 
          onClick={handleShowModal}
        >
          Messages 
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
            +99 <span className="visually-hidden">unread messages</span>
          </span>
        </button> */}

        {/* Search Bar */}
        <div className="d-flex align-items-center justify-content-center mb-4">
          <div className="position-relative d-flex mt-3 border border-1 rounded-pill w-50">
            <input
              type="text"
              placeholder="Search Here"
              className="py-2 px-3 w-100 form-control border rounded-pill search"
              value={searchQuery}
              onChange={handleSearchChange}
              style={{ border: 'none', backgroundColor: 'transparent' }}
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="position-absolute top-50 text-black end-0 translate-middle-y me-3"
            />
          </div>
        </div>

        {/* Service Cards */}
        <div className="row g-4 mt-5">
          {filteredServices.length > 0 ? (
            filteredServices.map((service) => (
              <div className="col-md-4" key={service.id}>
                <div className="position-relative rounded-3 p-3 card-hover">
                  <img
                    src={service.imgSrc}
                    alt={service.name}
                    width="50px"
                    height="50px"
                    className="position-absolute top-0 start-50 translate-middle rounded-circle border bg-black p-2"
                  />
                  <div className="d-flex align-items-center justify-content-center flex-column">
                    <h3 className="text-center text-black fw-bold mt-4">{service.name}</h3>
                    <p className="text-black">{service.description}</p>
                    <Link to="/book">
                      <button
                        className="btn text-white btn-sm px-5 rounded-pill shadow-sm"
                        style={{ backgroundColor: 'rgba(26, 11, 110)', borderColor: '#1a7768' }}
                      >
                        {service.price}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12">
              <p className="text-center text-muted">No services found.</p>
            </div>
          )}
        </div>
      </div>

      {/* Message Notification Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Unread Messages</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>Message 1: Your pet's appointment is confirmed.</li>
            <li>Message 2: Pet taxi service booked successfully.</li>
            <li>Message 3: Your pet's grooming is scheduled.</li>
            <li>Message 4: You have new updates on your pet's profile.</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Home;
