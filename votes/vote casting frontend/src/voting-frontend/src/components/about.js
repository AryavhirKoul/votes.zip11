import React from "react";
import Layout from "./Layout";
import "./about.css"; // Import the CSS file

const About = () => {
  return (
    <Layout>
      <div className="about-container">
        <h1 className="about-title">About this App</h1>
        <p className="about-text">
          Welcome to Our Voting System, the cutting-edge solution for
          secure and transparent elections powered by blockchain technology.
          <br />
          <br />
          <h3>Our Mission:</h3>
          <br />
          At [Your Voting System Name], we are committed to revolutionizing the
          democratic process by providing a secure,
          <br /> transparent, and tamper-proof
          platform for elections at all levels, from local communities to
          national governments.<br /> We believe that every vote counts, and our
          mission is to ensure that every vote is accurately recorded and
          securely stored.
          <br />
          <br />
          <h3>How It Works:</h3>
          <br />
          Our blockchain-based voting system utilizes the latest advancements
          in distributed ledger technology<br /> to create an immutable record of
          every vote cast. Here's how it works:
          <br />
          <br />
          <strong>Voter Registration:</strong> Eligible voters register on our
          platform using secure authentication methods,<br /> ensuring that only
          authorized individuals can participate in elections.
          <br /><br />
          <strong>Ballot Creation:</strong> Election administrators create
          digital ballots tailored to each specific election,<br /> including
          candidate options, referendum questions, or other voting choices.<br />
          <br />
          <strong>Voting Process:</strong> Voters securely cast their votes
          using our intuitive online interface or through <br />designated voting
          stations. Each vote is cryptographically signed and recorded on the
          blockchain.<br />
          <br />
          <strong>Blockchain Validation:</strong> The blockchain network validates
          and confirms each vote,<br /> ensuring its accuracy and preventing tampering
          or manipulation.<br />
          <br />
          <strong>Results Publication:</strong> Once the voting period concludes,
          election results are transparently published on the <br />blockchain for
          public verification. Anyone can independently audit the results to
          ensure their integrity.<br />
          <br />
          <br />
          <h3>Key Features:</h3>
          <br />
          <ul>
            <strong>Security:</strong> Our blockchain technology provides unparalleled security, protecting against fraud, hacking, and other malicious activities.<br /><br />

            <strong>Transparency:</strong> Every step of the voting process is transparent and auditable, instilling trust in the integrity of the electoral process.<br /><br />
            <strong>Accessibility:</strong> Our platform is designed to be user-friendly and accessible to all voters, regardless of technical expertise or physical location.<br /><br />
            <strong>Scalability:</strong> Whether it's a local election or a nationwide referendum, our system can scale to accommodate elections of any size.<br /><br />
          </ul>
          <br />
          <h3>Get Involved:</h3>
          <br />
          Join us in shaping the future of democracy by participating in elections conducted on our platform. Together, we can build a more inclusive, transparent, and democratic society.
        </p>
        <br />
        <strong>A Group project by : Aryavhir </strong>
      </div>
      
    </Layout>
  );
};

export default About;
