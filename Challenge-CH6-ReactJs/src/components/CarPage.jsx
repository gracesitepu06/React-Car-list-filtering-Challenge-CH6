import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
import { useListCarsContext } from "../CarContext";

import car from "../assets/img_car.png";
import usersLogo from "../assets/fi_users.png";
import car1 from "../assets/cars.png";
import users1 from "../assets/fi_users1.png";
import setting from "../assets/fi_settings.png";
import calendar from "../assets/fi_calendar.png";

function CarPage() {
  const {
    filteredCars,
    rentalTime,
    passengerCount,
    isCriteriaEmpty,
    available,
    setRentalTime,
    setPassengerCount,
    handleFilter,
    setAvailable,
  } = useListCarsContext;

  return (
    <div>
      {/* Main Section */}
      <main>
        <section className="mobil">
          <div className="container-xxl">
            <div className="row">
              <div
                className="col-lg-5 mx-lg-5 col-xl-5 col-xxl-5 mx-md-0"
                style={{ paddingTop: "100px" }}
              >
                <h2 className="fw-bold" style={{ paddingRight: "10px" }}>
                  Sewa & Rental Mobil Terbaik di kawasan Depok
                </h2>
                <p style={{ paddingRight: "40px" }}>
                  Selamat datang di Binar Car Rental. Kami menyediakan mobil
                  kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                  kebutuhanmu untuk sewa mobil selama 24 jam.{" "}
                </p>
                <Link to="/cars">
                  <button className="btn btn-utama">Mulai Sewa Mobil</button>
                </Link>
              </div>
              <div
                className="col-lg-5 col-xl-6 col-xxl-6 mt-lg-3"
                style={{ paddingTop: "50px" }}
              >
                <img className="" width="100%" src={car} alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Search */}
      <section className="search">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <div className="row search__card mx-lg-5 py-3 px-4">
                <div className="col-lg-auto col-xl-2 col-xxl-3 col-md-auto">
                  <label>Tipe Driver</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="tipeDriver"
                    onChange={(e) => setAvailable(e.target.value)}
                  >
                    {isCriteriaEmpty && !available && (
                      <p
                        style={{
                          color: "red",
                          fontStyle: "italic",
                          fontWeight: "bold",
                        }}
                      >
                        Select the driver type
                      </p>
                    )}
                    <option value="default" selected>
                      Pilih Tipe Driver &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    </option>
                    <option value={true}>Dengan Supir</option>
                    <option value={false}>Tanpa Supir (Lepas Kunci)</option>
                  </select>
                </div>
                <div className="col-lg-auto col-xl-auto col-md-auto">
                  <label>Tanggal</label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Pilih Tanggal"
                    id="tanggal"
                    onChange={(e) => setRentalTime(e.target.value)}
                  />
                  {isCriteriaEmpty && !rentalTime && (
                    <p
                      style={{
                        color: "red",
                        fontStyle: "italic",
                        fontWeight: "bold",
                      }}
                    >
                      Select the Date
                    </p>
                  )}
                </div>
                <div className="col-lg-auto col-xl-auto col-md-auto search__time">
                  <label>Pilih Waktu</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="waktuJemput"
                  >
                    <option value="false" selected>
                      Pilih Waktu &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    </option>
                    <option value="08:00">08.00 WIB</option>
                    <option value="09:00">09.00 WIB</option>
                    <option value="10:00">10.00 WIB</option>
                    <option value="11:00">11.00 WIB</option>
                    <option value="12:00">12.00 WIB</option>
                  </select>
                </div>
                <div className="col-lg-auto col-xl-auto col-md-auto">
                  <label className="fw-light">
                    Jumlah Penumpang (optional)
                  </label>
                  <div className="input-group">
                    <input
                      type="search"
                      className="form-control border-end-0"
                      placeholder="Jumlah Penumpang"
                      id="jumlahPenumpang"
                      value={passengerCount}
                      onChange={(e) =>
                        setPassengerCount(parseInt(e.target.value))
                      }
                    />
                    <span className="input-group-text bg-white">
                      <img src={users1} width="20px" alt="" />
                    </span>
                  </div>
                  {isCriteriaEmpty && !available && (
                    <p
                      style={{
                        color: "red",
                        fontStyle: "italic",
                        fontWeight: "bold",
                      }}
                    >
                      Enter the number of passengers
                    </p>
                  )}
                </div>
                <div className="col-lg-2 col-xl-auto col-md-2  pt-4">
                  <button
                    className="btn btn-utama"
                    id="load-btn"
                    onClick={handleFilter}
                  >
                    Cari Mobil
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cars */}
      <section className="cars">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="row" id="cars-container">
                {isCriteriaEmpty ? (
                  <p
                    style={{
                      textAlign: "center",
                      width: "80%",
                      fontSize: "16px",
                      marginTop: "20px",
                      color: "blue",
                      fontStyle: "italic",
                    }}
                  >
                    Choose your Car 🚙
                  </p>
                ) : filteredCars && filteredCars.length > 0 ? (
                  filteredCars.map((car) => (
                    <div
                      className="col-lg-4"
                      style={{ marginBottom: "18px" }}
                      key={car.id}
                    >
                      <div className="card px-2 py-4">
                        <img
                          src={car1}
                          className="card-img-top mt-4 text-center"
                          alt={car.manufacture}
                        />
                        <div className="card-body">
                          <h5 className="card-title fs-6">
                            {car.manufacture} / {car.model}
                          </h5>
                          <h5 className="card-title fs-5 fw-bold">
                            Rp. {car.rentPerDay} / hari
                          </h5>
                          <p className="cars__p">{car.description}</p>
                          <div className="row">
                            <div className="col-1">
                              <img src={usersLogo} width="20px" alt="" />
                            </div>
                            <div className="col-10 ms-lg-2">
                              {car.capacity} orang
                            </div>
                          </div>
                          <div className="row mt-2">
                            <div className="col-1">
                              <img src={setting} width="20px" alt="" />
                            </div>
                            <div className="col-10 ms-lg-2">
                              {car.transmission}
                            </div>
                          </div>
                          <div className="row mt-2 mb-4">
                            <div className="col-1">
                              <img src={calendar} width="20px" alt="" />
                            </div>
                            <div className="col-10 ms-lg-2">
                              Tahun {car.year}
                            </div>
                          </div>
                        </div>
                        <a
                          href="/not-found"
                          className="btn btn-primary"
                          style={{ width: "100%" }}
                        >
                          Pilih Mobil
                        </a>
                      </div>
                    </div>
                  ))
                ) : (
                  <p
                    style={{
                      textAlign: "center",
                      width: "80%",
                      fontSize: "16px",
                      marginTop: "20px",
                      color: "blue",
                      fontStyle: "italic",
                    }}
                  >
                    No cars available based on the selected criteria.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CarPage;
