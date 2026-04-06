import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Doctors from "@/components/Doctors";
import Footer from "@/components/Footer";

const DoctorsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background pt-20">
      <Navbar />
      <Doctors />
      <Footer />
    </div>
  );
};

export default DoctorsPage;
