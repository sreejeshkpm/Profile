import "./style.css";

const About = () => {
  return (
    <div className="contact">
      <h1>Contact me</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d773.4307771223081!2d75.27463992913182!3d12.08173261086488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba46b0b941cdcb7%3A0x622e937e8f499317!2sKannur%2C%20Kerala%20670501!5e1!3m2!1sen!2sin!4v1634293017701!5m2!1sen!2sin">
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>

      <h4>Phone</h4>
      <p>+91 9747953636</p>

      <h4>Email</h4>
      <p>sreejeshkpm@gmail.com</p>

      <h4>Address</h4>
      <p>Chittannur,Kannur,Kerala</p>
    </div>
  );
};

export default About;