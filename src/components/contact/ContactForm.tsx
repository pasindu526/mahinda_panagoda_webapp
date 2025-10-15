import React, { useState } from "react";
import { TextField } from "@mui/material";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

import locationicon from "../../assets/img/contactUs/FiMapPin.svg";
import phoneicon from "../../assets/img/contactUs/phone.svg";
import emailicon from "../../assets/img/contactUs/email.svg";
import mapicon from "../../assets/img/contactUs/map.svg";
import followicon from "../../assets/img/contactUs/follow.svg";
import whatsappicon from "../../assets/img/contactUs/wtsp.svg";
import instagramicon from "../../assets/img/contactUs/insta.svg";
import facebookicon from "../../assets/img/contactUs/fb.svg";

type FormErrors = {
  name: boolean;
  contact: boolean;
  email: boolean;
  message: boolean;
};

type HelperText = {
  name: string;
  contact: string;
  email: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    contact: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    name: false,
    contact: false,
    email: false,
    message: false,
  });

  const [helperText, setHelperText] = useState<HelperText>({
    name: "",
    contact: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const textFieldStyles = {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#19181830",
        borderWidth: "2px",
        borderRadius: "0.5rem",
      },
      "&:hover fieldset": { borderColor: "black/80", borderWidth: "2px" },
      "&.Mui-focused fieldset": { borderColor: "black", borderWidth: "2px" },

      // input + textarea styling
      "& input": {
        height: "55px",
        padding: "0 12px",
        color: "#333333",
        fontSize: "16px",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
      },
      "& textarea": {
        padding: "12px 14px",
        color: "#333333",
        fontSize: "16px",
        lineHeight: "22px",
        boxSizing: "border-box",
      },
    },

    // label styling
    "& .MuiInputLabel-root": { color: "#19181866" },
    "& .MuiInputLabel-root.Mui-focused": { color: "black" },
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.id]: false });
    setHelperText({ ...helperText, [e.target.id]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errors: Partial<FormErrors> = {};
    const helpers: Partial<HelperText> = {};

    //  Validation
    if (!formValues.name) {
      errors.name = true;
      helpers.name = "Enter a name.";
    }
    if (!formValues.contact.trim()) {
      errors.contact = true;
      helpers.contact = "Enter a contact number.";
    } else if (!/^\d+$/.test(formValues.contact)) {
      errors.contact = true;
      helpers.contact = "Contact number must contain only numbers.";
    } else if (formValues.contact.length < 10) {
      errors.contact = true;
      helpers.contact = "Contact number must be at least 10 digits.";
    }
    if (!formValues.email) {
      errors.email = true;
      helpers.email = "Enter a email.";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = true;
      helpers.email = "Enter a valid email.";
    }
    if (!formValues.message) {
      errors.message = true;
      helpers.message = "Enter a message.";
    }

    setFormErrors({ ...formErrors, ...errors });
    setHelperText({ ...helperText, ...helpers });
    if (Object.keys(errors).length === 0) {
      setLoading(true);

      emailjs
        .send(
          "service_jwyxagc",
          "template_5ggh3dr",
          {
            from_name: formValues.name,
            contact: formValues.contact,
            email: formValues.email,
            message: formValues.message,
          },   
          "dmvWovS7JIPnTHIB9"
        )
        .then(
          async () => {
            await emailjs.send(
              "service_jwyxagc",
              "template_8gj8034",
              {
                to_name: formValues.name,
                to_email: formValues.email,
              },
              "dmvWovS7JIPnTHIB9"
            );

            setLoading(false);
            Swal.fire({
              icon: "success",
              title: "Message Sent!",
              text: "Your message has been sent successfully.",
              confirmButtonColor: "#ECE5A7",
              customClass: {
                popup: "!rounded-[20px] p-6",
                title: "text-[22px] font-semibold",
                image: "object-contain",
                confirmButton:
                  "w-full mt-4 bg-[#ECE5A7] text-black text-lg font-medium rounded-lg py-3 px-10 cursor-pointer",
              },
              buttonsStyling: false,
            });
            setFormValues({ name: "", contact: "", email: "", message: "" });
          },
          () => {
            setLoading(false);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Failed to send message. Please try again.",
              confirmButtonColor: "#ECE5A7",
              customClass: {
                popup: "!rounded-[20px] p-6",
                title: "text-[22px] font-semibold",
                image: "object-contain",
                confirmButton:
                  "w-full mt-4 bg-[#ECE5A7] text-black text-lg font-medium rounded-lg py-3 px-10 cursor-pointer",
              },
              buttonsStyling: false,
            });
          }
        );
    }
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:gap-10 ">
        <div className="lg:w-1/2">
          <div className="mb-6 lg:text-left text-center">
        <h1 className="text-xs font-belda text-ternary/70 mb-1 lg:mb-2 uppercase tracking-wider">
              Have Questions?
            </h1>
        <h1 className="lg:text-5xl md:text-3xl text-2xl leading-[41px] md:leading-[62px]  font-belda font-semibold">
              We're Ready to Help.
            </h1>
          </div>

          {/* Contact Form */}
          <form
            className="flex flex-col gap-5 sm:gap-7 font-[16px] sm:font-[18px]"
            onSubmit={handleSubmit}
            noValidate
          >
            <TextField
              id="name"
              label="Enter your name"
              variant="outlined"
              fullWidth
              size="medium"
              sx={textFieldStyles}
              value={formValues.name}
              onChange={handleChange}
              error={formErrors.name}
              helperText={helperText.name}
            />
            <TextField
              id="contact"
              label="Enter your contact number"
              variant="outlined"
              type="tel"
              fullWidth
              size="medium"
              sx={textFieldStyles}
              value={formValues.contact}
              onChange={handleChange}
              error={formErrors.contact}
              helperText={helperText.contact}
            />
            <TextField
              id="email"
              label="Enter your e-mail address"
              variant="outlined"
              type="email"
              fullWidth
              size="medium"
              sx={textFieldStyles}
              value={formValues.email}
              onChange={handleChange}
              error={formErrors.email}
              helperText={helperText.email}
            />
            <TextField
              id="message"
              label="Enter your message...."
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              size="medium"
              sx={textFieldStyles}
              value={formValues.message}
              onChange={handleChange}
              error={formErrors.message}
              helperText={helperText.message}
            />

            <button
              type="submit"
              disabled={loading}
              className={`bg-primary text-black font-[18px] sm:font-[20px] py-3.5 sm:py-4 rounded-lg w-full sm:w-fit px-6 sm:px-8 mt-2 cursor-pointer ${
                loading ? "opacity-60 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

    {/* Contact Details */}
<div className="lg:w-1/2 lg:mt-20 mt-20">
  {/* Tablet & Desktop Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-24 lg:gap-x-4  lg:grid-cols-2">
    
    {/* Phone */}
    <div className="p-4 rounded">
      <div className="flex items-center gap-4">
        <img src={phoneicon} className="w-5 h-5" alt="Phone" />
        <h4 className="text-[16px]">Phone</h4>
      </div>
      <p className="text-ternary font-light text-[16px] mt-2 ml-9 sm:ml-9">
        +94 71 1000 700
      </p>
    </div>

    {/* Email */}
    <div className="p-4 rounded">
      <div className="flex items-center gap-4">
        <img src={emailicon} className="w-5 h-5" alt="Email" />
        <h4 className="text-[16px]">Email</h4>
      </div>
      <p className="text-ternary font-light text-[16px] mt-2 ml-9 sm:ml-9">
        <a href="mailto:mpanagoda2002@yahoo.com">
          mpanagoda2002@yahoo.com
        </a>
      </p>
    </div>

    {/* Head Office */}
    <div className="p-4 rounded">
      <div className="flex items-center gap-4">
        <img src={locationicon} className="w-5 h-5" alt="Location" />
        <h4 className="text-[16px]">Head Office</h4>
      </div>
      <p className="text-ternary font-light text-[16px] mt-2 ml-9 sm:ml-9">
        400 D, New Kandy Road, Talangama, Sri Lanka
      </p>
    </div>

    {/* Follow Us */}
    <div className="p-4 rounded">
      <div className="flex items-center gap-4">
        <img src={followicon} className="w-5 h-5" alt="Follow" />
        <h4 className="text-[16px] text-ternary">Follow Us</h4>
      </div>
      <div className="flex gap-4 mt-3 ml-9 sm:ml-9">
        <a
          href="https://www.facebook.com/people/Mahinda-Panagoda-Funeral-Directors/100065482210619/#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebookicon} className="w-8 h-8" alt="Facebook" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagramicon} className="w-8 h-8" alt="Instagram" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B94711000700&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whatsappicon} className="w-8 h-8" alt="WhatsApp" />
        </a>
      </div>
    </div>
  </div>

  {/* Map */}
  <div className="p-0 md:mt-6 mt-6 lg:mt-4 lg:ml-2">
    <div className="flex items-center gap-4 ml-3 mb-2">
      <img src={mapicon} className="w-5 h-5" alt="MapImage" />
      <h4 className="text-[16px] text-ternary">Find Our Location</h4>
    </div>
    <div className="w-full md:h-[275px] lg:ml-3 mt-4 p-0 mx-auto h-[250px]">
      <iframe
        className="rounded-lg"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d458799.45774801174!2d79.935232!3d6.907503!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2574edbb9c89d%3A0x5c97bbd9edf88e3b!2sMahinda%20Panagoda%20Funeral%20Directors!5e1!3m2!1sen!2slk!4v1756956577379!5m2!1sen!2slk"
        width="100%"
        height="100%"
        loading="lazy"
      ></iframe>
    </div>
  </div>
</div>

      </div>
    </>
  );
};

export default ContactForm;
