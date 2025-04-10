import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_oygtzse", "template_kc33xpb", form.current, {
        publicKey: "oQ2MBJp0rSu80HFYQ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="py-16 bg-secondary text-forth">
      <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left Section - Text Content */}
        <div className="flex flex-col justify-center" data-aos="fade-up">
          <h2 className="h2 text-forth font-bold mb-5">Let's Work Together!</h2>
          <p className="text-lg mb-4 ">
            Have an idea or a project in mind? Let's build something great together!
          </p>
          <p className="text-lg">
            We specialize in technology solutions, digital marketing, and business growth strategies. Reach out to us, and let’s create success together.
          </p>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-primary p-8 rounded-2xl shadow-lg">
          <h2 className="text-center h2 text-forth mb-6 font-bold"  data-aos="fade-right" >Contact Us</h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-forth text-primary placeholder-primary focus:ring-2 focus:ring-secondary focus:outline-none"
              required
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-forth text-primary placeholder-primary focus:ring-2 focus:ring-secondary focus:outline-none"
              required
            />

            <input
              type="text"
              name="from_phone"
              placeholder="Your Phone Number"
              className="w-full px-4 py-3 rounded-lg bg-forth text-primary placeholder-primary focus:ring-2 focus:ring-secondary focus:outline-none"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg bg-forth text-primary placeholder-primary focus:ring-2 focus:ring-secondary focus:outline-none"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full  py-3 mt-3 btn-primary shadow-md border-secondary border text-forth font-semibold rounded-lg hover:shadow-secondary  transition-all duration-300 "
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
