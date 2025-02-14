import { useState, useEffect } from "react";
import { HeroSection, PopUpModel, Footer } from "../Components";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    refereeName: "",
    refereeEmail: "",
    course: "",
  });
  const [errors, setErrors] = useState({});
  const [courses, setCourses] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.refereeName)
      newErrors.refereeName = "Referee Name is required";
    if (!formData.refereeEmail)
      newErrors.refereeEmail = "Referee Email is required";
    if (!formData.course) newErrors.course = "Course Name is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    const url = import.meta.env.VITE_BACKEND_URL;
    const getData = async () => {
      try {
        let response = await fetch(`${url}/programs`, {
          method: "GET",
          credentials: "include",
        });

        if (!response.ok) {
          console.error("Profile Error:", errorData.message);
        } else {
          let courseData = await response.json();
          setCourses(courseData);
        }
      } catch (err) {
        console.error(err.message);
      }
    };
    getData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Referral submitted successfully!");
      handleClose();
      setFormData({
        refereeName: "",
        refereeEmail: "",
        course: "",
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <HeroSection handleOpen={handleOpen} />
      <PopUpModel
        handleSubmit={handleSubmit}
        handleClose={handleClose}
        open={open}
        errors={errors}
        formData={formData}
        handleChange={handleChange}
        courses={courses}
      />
    </div>
  );
}
