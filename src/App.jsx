// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// import ToDo from './Todo';
// function App() {
 
//   return (
//     <>
//       <p>Hello everyone</p>

//     <ToDo task ="Learn React"></ToDo>

//     <Student></Student>

//     </>
//   )
// }



// function Student() {

//   const name = "Sabbir Hossain Robin";

//   return(
//     <div className='student'>
//     <h1>I am  {name}</h1>
//   </div>
//   )
// }

// export default App

import { useEffect, useState } from "react";
import "./index.css";

function App() {

  // ---------------- THEME ----------------

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  // ---------------- PAGE ----------------

  const [page, setPage] = useState("home");

  // ---------------- AUTH ----------------

  const [user, setUser] = useState(null);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    photo: "",
    password: "",
  });

  // ---------------- TOAST ----------------

  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  const showToast = (message, type = "success") => {
    setToast({
      show: true,
      message,
      type,
    });

    setTimeout(() => {
      setToast({
        show: false,
        message: "",
        type: "success",
      });
    }, 3000);
  };

  // ---------------- LOADING ----------------

  const [loading, setLoading] = useState(false);

  // ---------------- SEARCH ----------------

  const [search, setSearch] = useState("");

  // ---------------- MODAL ----------------

  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const [bookingModal, setBookingModal] = useState(false);

  const [updateModal, setUpdateModal] = useState(false);

  const [profileModal, setProfileModal] = useState(false);

  const [editBooking, setEditBooking] = useState(null);

  // ---------------- DOCTORS ----------------

  const doctors = [
    {
      id: "d1",
      name: "Dr. Ayesha Rahman",
      specialty: "Cardiologist",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop",
      experience: "10 Years",
      availability: [
        "09:00 AM - 12:00 PM",
        "04:00 PM - 07:00 PM",
      ],
      description:
        "Highly experienced cardiologist specializing in heart diseases and preventive care.",
      hospital: "Labaid Cardiac Hospital",
      location: "Dhanmondi, Dhaka",
      fee: 800,
      rating: 4.9,
    },

    {
      id: "d2",
      name: "Dr. Mahin Islam",
      specialty: "Neurologist",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1200&auto=format&fit=crop",
      experience: "7 Years",
      availability: [
        "10:00 AM - 01:00 PM",
        "06:00 PM - 09:00 PM",
      ],
      description:
        "Expert neurologist with years of experience treating brain and nerve disorders.",
      hospital: "Square Hospital",
      location: "Panthapath, Dhaka",
      fee: 1000,
      rating: 4.8,
    },

    {
      id: "d3",
      name: "Dr. Nusrat Jahan",
      specialty: "Dentist",
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1200&auto=format&fit=crop",
      experience: "5 Years",
      availability: [
        "08:00 AM - 11:00 AM",
        "05:00 PM - 08:00 PM",
      ],
      description:
        "Professional dental surgeon specializing in smile design and oral care.",
      hospital: "Popular Hospital",
      location: "Mirpur, Dhaka",
      fee: 500,
      rating: 4.7,
    },

    {
      id: "d4",
      name: "Dr. Fahim Chowdhury",
      specialty: "Orthopedic",
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1200&auto=format&fit=crop",
      experience: "12 Years",
      availability: [
        "09:00 AM - 01:00 PM",
        "03:00 PM - 06:00 PM",
      ],
      description:
        "Orthopedic specialist focused on bone and joint treatments.",
      hospital: "United Hospital",
      location: "Gulshan, Dhaka",
      fee: 1200,
      rating: 4.9,
    },

    {
      id: "d5",
      name: "Dr. Saba Karim",
      specialty: "Dermatologist",
      image:
        "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=1200&auto=format&fit=crop",
      experience: "6 Years",
      availability: [
        "11:00 AM - 02:00 PM",
        "05:00 PM - 07:00 PM",
      ],
      description:
        "Skin specialist helping patients with advanced skincare treatments.",
      hospital: "Ibn Sina Hospital",
      location: "Uttara, Dhaka",
      fee: 700,
      rating: 4.6,
    },

    {
      id: "d6",
      name: "Dr. Rakib Hasan",
      specialty: "Pediatrician",
      image:
        "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1200&auto=format&fit=crop",
      experience: "9 Years",
      availability: [
        "08:00 AM - 12:00 PM",
        "04:00 PM - 08:00 PM",
      ],
      description:
        "Experienced child specialist providing modern pediatric care.",
      hospital: "Evercare Hospital",
      location: "Bashundhara, Dhaka",
      fee: 900,
      rating: 4.8,
    },
  ];

  // ---------------- BOOKINGS ----------------

  const [bookings, setBookings] = useState([]);

  const [bookingForm, setBookingForm] = useState({
    patientName: "",
    gender: "",
    phone: "",
    appointmentDate: "",
    appointmentTime: "",
  });

  // ---------------- LOGIN ----------------

  const handleLogin = (e) => {
    e.preventDefault();

    if (!loginData.email || !loginData.password) {
      showToast("Please fill all fields", "error");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const demoUser = {
        name: "Rahim Uddin",
        email: loginData.email,
        photo:
          "https://i.ibb.co/mCNL6mM/user.png",
      };

      setUser(demoUser);

      setLoading(false);

      showToast("Login successful");

      setPage("home");
    }, 1200);
  };

  // ---------------- REGISTER ----------------

  const handleRegister = (e) => {
    e.preventDefault();

    const password = registerData.password;

    const upperCase = /[A-Z]/.test(password);
    const lowerCase = /[a-z]/.test(password);

    if (
      password.length < 6 ||
      !upperCase ||
      !lowerCase
    ) {
      showToast(
        "Password must contain uppercase, lowercase and minimum 6 characters",
        "error"
      );
      return;
    }

    showToast("Registration successful");

    setPage("login");
  };

  // ---------------- VIEW DETAILS ----------------

  const handleViewDetails = (doctor) => {

    if (!user) {
      showToast("Please login first", "error");
      setPage("login");
      return;
    }

    setSelectedDoctor(doctor);
    setPage("doctorDetails");
  };

  // ---------------- BOOK APPOINTMENT ----------------

  const handleBookAppointment = (e) => {
    e.preventDefault();

    const newBooking = {
      id: Date.now(),
      userEmail: user.email,
      doctorName: selectedDoctor.name,
      specialty: selectedDoctor.specialty,
      hospital: selectedDoctor.hospital,
      fee: selectedDoctor.fee,
      patientName: bookingForm.patientName,
      gender: bookingForm.gender,
      phone: bookingForm.phone,
      appointmentDate: bookingForm.appointmentDate,
      appointmentTime: bookingForm.appointmentTime,
    };

    setBookings([...bookings, newBooking]);

    setBookingModal(false);

    setBookingForm({
      patientName: "",
      gender: "",
      phone: "",
      appointmentDate: "",
      appointmentTime: "",
    });

    showToast("Appointment booked successfully!");
  };

  // ---------------- DELETE BOOKING ----------------

  const deleteBooking = (id) => {
    const remaining = bookings.filter(
      (item) => item.id !== id
    );

    setBookings(remaining);

    showToast("Appointment deleted successfully!");
  };

  // ---------------- UPDATE BOOKING ----------------

  const handleUpdateBooking = (e) => {
    e.preventDefault();

    const updated = bookings.map((item) =>
      item.id === editBooking.id ? editBooking : item
    );

    setBookings(updated);

    setUpdateModal(false);

    showToast("Appointment updated successfully!");
  };

  // ---------------- PROFILE UPDATE ----------------

  const handleProfileUpdate = (e) => {
    e.preventDefault();

    setUser({
      ...user,
    });

    setProfileModal(false);

    showToast("Profile updated successfully!");
  };

  // ---------------- FILTER ----------------

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // ---------------- 404 ----------------

  const pages = [
    "home",
    "appointments",
    "login",
    "register",
    "dashboard",
    "doctorDetails",
  ];

  return (
    <>

      {/* TOAST */}

      {
        toast.show &&

        <div className={`toast ${toast.type}`}>
          {toast.message}
        </div>
      }

      {/* LOADER */}

      {
        loading &&

        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      }

      {/* NAVBAR */}

      <div className="navbar">

        <div className="container nav-content">

          <div
            className="logo"
            onClick={() => setPage("home")}
          >
            🩺 DocAppoint
          </div>

          <div className="nav-links">

            <a onClick={() => setPage("home")}>
              Home
            </a>

            <a onClick={() => setPage("appointments")}>
              All Appointment
            </a>

            {
              user &&
              <a onClick={() => setPage("dashboard")}>
                Dashboard
              </a>
            }

          </div>

          <div className="nav-right">

            <button
              className="theme-btn"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "☀️" : "🌙"}
            </button>

            {
              user ?

                <div className="user-box">

                  <img
                    src={user.photo}
                    alt=""
                  />

                  <button
                    className="btn danger"
                    onClick={() => {
                      setUser(null);
                      setPage("home");
                      showToast("Logged out");
                    }}
                  >
                    Logout
                  </button>

                </div>

                :

                <>

                  <button
                    className="btn"
                    onClick={() => setPage("login")}
                  >
                    Login
                  </button>

                  <button
                    className="btn secondary"
                    onClick={() => setPage("register")}
                  >
                    Register
                  </button>

                </>
            }

          </div>

        </div>

      </div>

      {/* HOME */}

      {
        page === "home" &&

        <>

          <div className="hero">

            <div className="container hero-content">

              <span className="tag">
                Best Doctor Appointment Platform
              </span>

              <h1>
                Book Trusted Doctors
                Anytime Anywhere
              </h1>

              <p>
                Find experienced doctors,
                book appointments,
                manage schedules and get quality healthcare online.
              </p>

              <div className="hero-buttons">

                <button
                  className="btn"
                  onClick={() => setPage("appointments")}
                >
                  Explore Doctors
                </button>

                <button
                  className="btn secondary"
                  onClick={() => setPage("login")}
                >
                  Get Started
                </button>

              </div>

            </div>

          </div>

          {/* TOP DOCTORS */}

          <div className="container">

            <h1 className="section-title">
              Top Rated Doctors
            </h1>

            <div className="doctors">

              {
                doctors.slice(0, 3).map((doctor) => (

                  <div className="card" key={doctor.id}>

                    <img src={doctor.image} />

                    <div className="card-content">

                      <div className="rating">
                        ⭐ {doctor.rating}
                      </div>

                      <h2>{doctor.name}</h2>

                      <p>{doctor.specialty}</p>

                      <p>
                        Experience: {doctor.experience}
                      </p>

                      <p>
                        Hospital: {doctor.hospital}
                      </p>

                      <p>
                        Location: {doctor.location}
                      </p>

                      <p>
                        Fee: ৳{doctor.fee}
                      </p>

                      <button
                        className="btn"
                        onClick={() =>
                          handleViewDetails(doctor)
                        }
                      >
                        View Details
                      </button>

                    </div>

                  </div>

                ))
              }

            </div>

          </div>

          {/* EXTRA SECTION */}

          <div className="container stats-section">

            <div className="stats-box">
              <h1>150+</h1>
              <p>Expert Doctors</p>
            </div>

            <div className="stats-box">
              <h1>25K+</h1>
              <p>Happy Patients</p>
            </div>

            <div className="stats-box">
              <h1>24/7</h1>
              <p>Support Service</p>
            </div>

          </div>

          {/* FEATURES */}

          <div className="container">

            <h1 className="section-title">
              Why Choose Us
            </h1>

            <div className="features">

              <div className="feature-box">
                <h2>Trusted Doctors</h2>
                <p>
                  Highly qualified and verified specialists.
                </p>
              </div>

              <div className="feature-box">
                <h2>Secure Booking</h2>
                <p>
                  Easy and secure online appointment system.
                </p>
              </div>

              <div className="feature-box">
                <h2>Quick Support</h2>
                <p>
                  Our support team is always available.
                </p>
              </div>

            </div>

          </div>

        </>
      }

      {/* ALL APPOINTMENTS */}

      {
        page === "appointments" &&

        <div className="container">

          <h1 className="section-title">
            All Appointments
          </h1>

          <div className="search-box">

            <input
              type="text"
              placeholder="Search Doctor Name..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>

          <div className="doctors">

            {
              filteredDoctors.map((doctor) => (

                <div className="card" key={doctor.id}>

                  <img src={doctor.image} />

                  <div className="card-content">

                    <div className="rating">
                      ⭐ {doctor.rating}
                    </div>

                    <h2>{doctor.name}</h2>

                    <p>{doctor.specialty}</p>

                    <p>{doctor.hospital}</p>

                    <p>{doctor.location}</p>

                    <p>Fee: ৳{doctor.fee}</p>

                    <button
                      className="btn"
                      onClick={() =>
                        handleViewDetails(doctor)
                      }
                    >
                      View Details
                    </button>

                  </div>

                </div>

              ))
            }

          </div>

        </div>
      }

      {/* DOCTOR DETAILS */}

      {
        page === "doctorDetails" &&
        selectedDoctor &&

        <div className="container details-page">

          <div className="details-card">

            <img
              src={selectedDoctor.image}
            />

            <div className="details-content">

              <div className="rating">
                ⭐ {selectedDoctor.rating}
              </div>

              <h1>
                {selectedDoctor.name}
              </h1>

              <p>
                <strong>Specialty:</strong>
                {" "}
                {selectedDoctor.specialty}
              </p>

              <p>
                <strong>Experience:</strong>
                {" "}
                {selectedDoctor.experience}
              </p>

              <p>
                <strong>Hospital:</strong>
                {" "}
                {selectedDoctor.hospital}
              </p>

              <p>
                <strong>Location:</strong>
                {" "}
                {selectedDoctor.location}
              </p>

              <p>
                <strong>Fee:</strong>
                {" "}
                ৳{selectedDoctor.fee}
              </p>

              <p>
                <strong>Description:</strong>
                {" "}
                {selectedDoctor.description}
              </p>

              <div className="availability">

                <strong>Availability:</strong>

                {
                  selectedDoctor.availability.map((time, index) => (
                    <span key={index}>
                      {time}
                    </span>
                  ))
                }

              </div>

              <button
                className="btn"
                onClick={() =>
                  setBookingModal(true)
                }
              >
                Book Appointment
              </button>

            </div>

          </div>

        </div>
      }

      {/* LOGIN */}

      {
        page === "login" &&

        <div className="auth-box">

          <h1>Login</h1>

          <form onSubmit={handleLogin}>

            <div className="input-group">

              <input
                type="email"
                placeholder="Email"
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({
                    ...loginData,
                    email: e.target.value,
                  })
                }
              />

            </div>

            <div className="input-group">

              <input
                type="password"
                placeholder="Password"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({
                    ...loginData,
                    password: e.target.value,
                  })
                }
              />

            </div>

            <p className="forgot">
              Forgot Password
            </p>

            <button className="btn full">
              Login
            </button>

            <button
              type="button"
              className="google-btn"
              onClick={() => {
                setUser({
                  name: "Google User",
                  email: "google@gmail.com",
                  photo:
                    "https://i.ibb.co/mCNL6mM/user.png",
                });

                showToast("Google login successful");

                setPage("home");
              }}
            >
              Continue with Google
            </button>

            <p className="switch-auth">
              Don’t have an account?
              <span
                onClick={() =>
                  setPage("register")
                }
              >
                Register
              </span>
            </p>

          </form>

        </div>
      }

      {/* REGISTER */}

      {
        page === "register" &&

        <div className="auth-box">

          <h1>Register</h1>

          <form onSubmit={handleRegister}>

            <div className="input-group">

              <input
                type="text"
                placeholder="Name"
                value={registerData.name}
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    name: e.target.value,
                  })
                }
              />

            </div>

            <div className="input-group">

              <input
                type="email"
                placeholder="Email"
                value={registerData.email}
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    email: e.target.value,
                  })
                }
              />

            </div>

            <div className="input-group">

              <input
                type="text"
                placeholder="Photo URL"
                value={registerData.photo}
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    photo: e.target.value,
                  })
                }
              />

            </div>

            <div className="input-group">

              <input
                type="password"
                placeholder="Password"
                value={registerData.password}
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    password: e.target.value,
                  })
                }
              />

            </div>

            <button className="btn full">
              Register
            </button>

            <button
              type="button"
              className="google-btn"
              onClick={() => {
                setUser({
                  name: "Google User",
                  email: "google@gmail.com",
                  photo:
                    "https://i.ibb.co/mCNL6mM/user.png",
                });

                showToast("Google signup successful");

                setPage("home");
              }}
            >
              Continue with Google
            </button>

            <p className="switch-auth">
              Already have an account?
              <span
                onClick={() =>
                  setPage("login")
                }
              >
                Login
              </span>
            </p>

          </form>

        </div>
      }

      {/* DASHBOARD */}

      {
        page === "dashboard" &&

        user ?

          <div className="container dashboard">

            {/* PROFILE */}

            <div className="profile-card">

              <img src={user.photo} />

              <h2>{user.name}</h2>

              <p>{user.email}</p>

              <button
                className="btn"
                onClick={() =>
                  setProfileModal(true)
                }
              >
                Update Profile
              </button>

            </div>

            {/* BOOKINGS */}

            <h1 className="section-title">
              My Bookings
            </h1>

            {
              bookings.filter(
                (item) =>
                  item.userEmail === user.email
              ).length === 0 ?

                <div className="empty-box">
                  No Booking Found
                </div>

                :

                bookings
                  .filter(
                    (item) =>
                      item.userEmail === user.email
                  )
                  .map((booking) => (

                    <div
                      className="booking-card"
                      key={booking.id}
                    >

                      <h2>
                        {booking.doctorName}
                      </h2>

                      <p>
                        Patient:
                        {" "}
                        {booking.patientName}
                      </p>

                      <p>
                        Gender:
                        {" "}
                        {booking.gender}
                      </p>

                      <p>
                        Phone:
                        {" "}
                        {booking.phone}
                      </p>

                      <p>
                        Date:
                        {" "}
                        {booking.appointmentDate}
                      </p>

                      <p>
                        Time:
                        {" "}
                        {booking.appointmentTime}
                      </p>

                      <p>
                        Hospital:
                        {" "}
                        {booking.hospital}
                      </p>

                      <div className="flex">

                        <button
                          className="btn"
                          onClick={() => {
                            setEditBooking(booking);
                            setUpdateModal(true);
                          }}
                        >
                          Update
                        </button>

                        <button
                          className="btn danger"
                          onClick={() =>
                            deleteBooking(booking.id)
                          }
                        >
                          Delete
                        </button>

                      </div>

                    </div>

                  ))
            }

          </div>

          :

          <div className="not-found">
            <h1>Access Denied</h1>
            <p>Please login first</p>
          </div>
      }

      {/* 404 */}

      {
        !pages.includes(page) &&

        <div className="not-found">

          <h1>404</h1>

          <p>
            Page Not Found
          </p>

          <button
            className="btn"
            onClick={() => setPage("home")}
          >
            Go Home
          </button>

        </div>
      }

      {/* BOOKING MODAL */}

      {
        bookingModal &&

        <div className="modal">

          <div className="modal-box">

            <h1>
              Book Appointment
            </h1>

            <form onSubmit={handleBookAppointment}>

              <div className="input-group">

                <input
                  type="text"
                  placeholder="Patient Name"
                  value={bookingForm.patientName}
                  onChange={(e) =>
                    setBookingForm({
                      ...bookingForm,
                      patientName: e.target.value,
                    })
                  }
                />

              </div>

              <div className="input-group">

                <select
                  value={bookingForm.gender}
                  onChange={(e) =>
                    setBookingForm({
                      ...bookingForm,
                      gender: e.target.value,
                    })
                  }
                >
                  <option value="">
                    Select Gender
                  </option>

                  <option>
                    Male
                  </option>

                  <option>
                    Female
                  </option>

                </select>

              </div>

              <div className="input-group">

                <input
                  type="text"
                  placeholder="Phone Number"
                  value={bookingForm.phone}
                  onChange={(e) =>
                    setBookingForm({
                      ...bookingForm,
                      phone: e.target.value,
                    })
                  }
                />

              </div>

              <div className="input-group">

                <input
                  type="date"
                  value={bookingForm.appointmentDate}
                  onChange={(e) =>
                    setBookingForm({
                      ...bookingForm,
                      appointmentDate:
                        e.target.value,
                    })
                  }
                />

              </div>

              <div className="input-group">

                <input
                  type="text"
                  placeholder="Appointment Time"
                  value={bookingForm.appointmentTime}
                  onChange={(e) =>
                    setBookingForm({
                      ...bookingForm,
                      appointmentTime:
                        e.target.value,
                    })
                  }
                />

              </div>

              <div className="flex">

                <button className="btn">
                  Confirm
                </button>

                <button
                  type="button"
                  className="btn danger"
                  onClick={() =>
                    setBookingModal(false)
                  }
                >
                  Cancel
                </button>

              </div>

            </form>

          </div>

        </div>
      }

      {/* UPDATE MODAL */}

      {
        updateModal && editBooking &&

        <div className="modal">

          <div className="modal-box">

            <h1>
              Update Appointment
            </h1>

            <form onSubmit={handleUpdateBooking}>

              <div className="input-group">

                <input
                  type="text"
                  value={editBooking.doctorName}
                  readOnly
                />

              </div>

              <div className="input-group">

                <input
                  type="text"
                  value={editBooking.patientName}
                  onChange={(e) =>
                    setEditBooking({
                      ...editBooking,
                      patientName:
                        e.target.value,
                    })
                  }
                />

              </div>

              <div className="input-group">

                <input
                  type="text"
                  value={editBooking.phone}
                  onChange={(e) =>
                    setEditBooking({
                      ...editBooking,
                      phone:
                        e.target.value,
                    })
                  }
                />

              </div>

              <div className="input-group">

                <input
                  type="date"
                  value={editBooking.appointmentDate}
                  onChange={(e) =>
                    setEditBooking({
                      ...editBooking,
                      appointmentDate:
                        e.target.value,
                    })
                  }
                />

              </div>

              <div className="flex">

                <button className="btn">
                  Save
                </button>

                <button
                  type="button"
                  className="btn danger"
                  onClick={() =>
                    setUpdateModal(false)
                  }
                >
                  Cancel
                </button>

              </div>

            </form>

          </div>

        </div>
      }

      {/* PROFILE MODAL */}

      {
        profileModal &&

        <div className="modal">

          <div className="modal-box">

            <h1>
              Update Profile
            </h1>

            <form onSubmit={handleProfileUpdate}>

              <div className="input-group">

                <input
                  type="text"
                  value={user.name}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      name: e.target.value,
                    })
                  }
                />

              </div>

              <div className="input-group">

                <input
                  type="text"
                  value={user.photo}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      photo: e.target.value,
                    })
                  }
                />

              </div>

              <div className="flex">

                <button className="btn">
                  Update
                </button>

                <button
                  type="button"
                  className="btn danger"
                  onClick={() =>
                    setProfileModal(false)
                  }
                >
                  Cancel
                </button>

              </div>

            </form>

          </div>

        </div>
      }

      {/* FOOTER */}

      <div className="footer">

        <div className="container">

          <h1>
            🩺 DocAppoint
          </h1>

          <p>
            Smart Doctor Appointment Management System
          </p>

          <div className="socials">

            <span>📘</span>
            <span>📸</span>
            <span>❌</span>
            <span>▶️</span>

          </div>

        </div>

      </div>

    </>
  );
}

export default App;