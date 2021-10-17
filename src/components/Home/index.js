import { Link } from "react-router-dom";


import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
     
      <link rel="icon" href="https://scontent.fcok1-1.fna.fbcdn.net/v/t1.6435-9/70460193_2665166206828232_2019539071923126272_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=qDQZNg1eTtYAX8Uul-h&_nc_ht=scontent.fcok1-1.fna&oh=87b5d5ca43b1a6cbcd4351ec648152ad&oe=60EBAE68" type="image/gif" sizes="16x16"></link>
      
        <h1>
          <p></p>
          <p>Hi,I am Sreejesh</p>
          
          <p>Full stack web developer adept at building responsive web applications from front to back.</p>
         
          </h1>
          
       
        <Link to="about">
          <button>More Info</button>
        </Link>
      </div>
      <div className="person">
        <img
          src={`${process.env.PUBLIC_URL}/1.jpg`}
         
          
        />
   
      </div>
    </div>
  );
};

export default Home;
