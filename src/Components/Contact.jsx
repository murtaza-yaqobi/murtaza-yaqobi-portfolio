import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const service_id = "service_xxy7g3i";
    const template_id = "template_ud16xg6";
    const public_key = "_S-xkQJ4gOY5tmbpy";

    const content = {
      from_name: name,
      from_email: email,
      subject: subject,
      to_name: "Murtaza Yaqobi",
      message: message,
    };

    emailjs.send(service_id, template_id, content, public_key).then(
      () => {
        alert("Message sent successfully!");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      },
      (error) => {
        alert("Failed to send message: " + (error.text || error.message));
        console.error(error);
      }
    );
  }

  return (
    <section id="contact" className="bg-gray-100 py-20 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto md:px-2 p-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        <div className="flex flex-col md:flex-row sm:items-start gap-10">
          <div className="w-[100%] md:w-[50%]">
            <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
            <p className="text-lg">
              I'm always excited to connect and collaborate on new ideas,
              projects, or opportunities. Whether you have a question, a project
              proposal, or just want to say hello — feel free to reach out!
            </p>
            <div className="flex flex-col gap-3 mt-5">
              {/* div 1 */}
              <div className="flex items-center gap-3 hover:cursor-pointer group">
                <a href="https://wa.me/+93 794937132" target="_blank">
                  <i className="fab fa-whatsapp bg-blue-600 group-hover:bg-blue-700 transition-colors p-3 rounded-[2px] text-white text-3xl"></i>
                </a>
                <div>
                  <h2 className="font-bold text-xl">WhatsApp</h2>
                  <span className="text-lg font-medium">+93794937132</span>
                </div>
              </div>
              {/* div 2 */}
              
              {/* div 3 */}
              <div className="flex items-center gap-3 hover:cursor-pointer group">
                <a href="mailto:murtazayaqobi7@gmail.com" target="_blank">
                  <i className="fas fa-envelope bg-blue-600 group-hover:bg-blue-700 transition-colors p-3 rounded-[2px] text-white text-3xl"></i>
                </a>
                <div>
                  <h2 className="font-bold text-xl">Email Address</h2>
                </div>
              </div>
              {/* div 4 */}
              <div className="flex items-center gap-3 hover:cursor-pointer group">
                <a href="tel:0794937132" target="_blank">
                  <i className="fas fa-phone-alt bg-blue-600 group-hover:bg-blue-700 transition-colors p-3 rounded-[2px] text-white text-3xl"></i>
                </a>
                <div>
                  <h2 className="font-bold text-xl">Mobile</h2>
                  <span className="text-lg font-medium">+93794937132</span>
                </div>
              </div>
            </div>
          </div>
          {/* form start */}
          <form
            className="space-y-4 w-[100%] md:w-[50%]"
            onSubmit={handleSubmit}
          >
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-[2px] border focus:outline-blue-600"
              required
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-[2px] border focus:outline-blue-600"
              required
            />
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              type="text"
              placeholder="Your Subject"
              className="w-full p-3 rounded-[2px] border focus:outline-blue-600"
              required
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              rows={5}
              className="w-full p-3 rounded-[2px] border focus:outline-blue-600"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium text-lg py-3 rounded-[2px] hover:cursor-pointer hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
