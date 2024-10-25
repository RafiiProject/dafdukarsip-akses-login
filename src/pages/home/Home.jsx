import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import { useState, useEffect } from "react";
import Loader from "../../components/loader/Loader"; // Import Loader Component
import { Link, useNavigate, useLocation } from "react-router-dom";


const Home = () => {
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    // Simulate loading time (can be replaced with actual logic)
    setTimeout(() => {
      setLoading(false); // Hide loader after home page loads
    }, 1000); // Simulating a 1-second delay
  }, []);

  // Show loader while loading
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
   
        <div className="isicontainer">
          <h1 className="line-text">AKSES LOGIN TPDK KECAMATAN</h1>
          {/* Add the class for line */}
          <br />
          <h4>Pilih Akses Yang Sesuai Dengan Kantor Dinas Anda!</h4>
          <div className="widgets">
            <a href="https://dafdukarsip-dinas.vercel.app/">
              <Widget type="dinas" />
            </a>
            <a href="https://dafdukarsip-tengah.vercel.app/">
              <Widget type="tengah" />
            </a>
            <a href="https://dafdukarsip-barat.vercel.app/">
              <Widget type="barat" />
            </a>
            <a href="https://dafdukarsip-timur.vercel.app/">
              <Widget type="timur" />
            </a>
          </div>
          <div className="widgets1">
            <a href="https://dafdukarsip-utara.vercel.app/">
              <Widget type="utara" />
            </a>
            <a href="https://dafdukarsip-selatan.vercel.app/">
              <Widget type="selatan" />
            </a>
            <a href="https://dafdukarsip-tembalang.vercel.app/">
              <Widget type="tembalang" />
            </a>
            <a href="https://dafdukarsip-banyumanik.vercel.app/">
              <Widget type="banyumanik" />
            </a>
          </div>
          <div className="widgets2">
            <a href="https://dafdukarsip-gajahmungkur.vercel.app/">
              <Widget type="gajahmungkur" />
            </a>
            <a href="https://dafdukarsip-candisari.vercel.app/">
              <Widget type="candisari" />
            </a>
            <a href="https://dafdukarsip-genuk.vercel.app/">
              <Widget type="genuk" />
            </a>
            <a href="https://dafdukarsip-gunungpati.vercel.app/">
              <Widget type="gunungpati" />
            </a>
          </div>
          <div className="widgets3">
            <a href="https://dafdukarsip-mijen.vercel.app/">
              <Widget type="mijen" />
            </a>
            <a href="https://dafdukarsip-ngaliyan.vercel.app/">
              <Widget type="ngaliyan" />
            </a>
            <a href="https://dafdukarsip-pedurungan.vercel.app/">
              <Widget type="pedurungan" />
            </a>
            <a href="https://dafdukarsip-tugu.vercel.app/">
              <Widget type="tugu" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
