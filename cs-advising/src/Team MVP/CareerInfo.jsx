import { Header } from "../Team_Ace/components/Header";
import { Footer } from "../Team_Ace/components/Footer";
import AppleLogo from './Apple-Logo.png'
import GoogleLogo from './Google-Logo.jpeg'
import MicrosoftLogo from './Microsoft-Logo.png'



import "./CareerInfo.css";
import CareerInfo from "./CareerInfo.js";

export function CareerInfo() {


    return (
      <div>
      <Header />
      <div className="content">
        <div className="subtitle">Career Information</div>
        <div className="info">
          Here you can find popular companies that CEA Alumni are working for!
          
        </div>

        <div className="subtitle">
          Apple, Inc.
        </div>
        <div className="ap-logo">
        <img className="apple-logo" src={AppleLogo} alt="Apple Inc. Logo" height={55} width={98}/>
      </div>
        <div className="info">
        Apple Inc. is an American multinational technology company headquartered in Cupertino, California, United States. 
        Apple is the largest technology company by revenue (totaling US$365.8 billion in 2021) and, 
        as of June 2022, is the world's biggest company by market capitalization, the fourth-largest personal computer vendor by unit sales 
        and second-largest mobile phone manufacturer. It is one of the Big Five American information 
        technology companies, alongside Alphabet, Amazon, Meta, and Microsoft.
          <a className="aa" href="https://www.apple.com/careers/us/">
            Apple Careers Page
          </a>
          
        
        </div>

        <div className="subtitle">
          Google
        </div>
        <div className="gg-logo">
        <img className="google-logo" src={GoogleLogo} alt="Google Company Logo" height={55} width={98}/>
      </div>
        <div className="info">
        Google LLC is an American multinational technology company focusing on search engine technology, online advertising, 
        cloud computing, computer software, quantum computing, e-commerce, artificial intelligence,[9] and consumer electronics. It has been 
        referred to as "the most powerful company in the world"[10] and one of the world's most valuable brands due to its market dominance, 
        data collection, and technological advantages in the area of artificial intelligence.
          <a className="aa" href="https://careers.google.com/">
            Google Careers Page
          </a>
        </div>

        <div className="subtitle">
          Microsoft
        </div>
        <div className="mc-logo">
        <img className="micro-logo" src={MicrosoftLogo} alt="Microsoft Company Logo" height={55} width={98}/>
      </div>
        <div className="info">
        Microsoft Corporation is an American multinational technology corporation producing computer software, consumer 
        electronics, personal computers, and related services headquartered at the Microsoft Redmond campus located in 
        Redmond, Washington, United States. Its best-known software products are the Windows line of operating systems, the 
        Microsoft Office suite, and the Internet Explorer and Edge web browsers. Its flagship hardware products are the Xbox video 
        game consoles and the Microsoft Surface lineup of touchscreen personal computers.
          <a className="aa" href="https://careers.microsoft.com/us/en/">
            Microsoft Careers Page
          </a>
        </div>

       <div className="subtitle">
        Share Your Career Experience
        </div>
        <div className='form'>
          <h5>Add Comment</h5>
          Name: <input type="text" id="name"/><br/><br/>
          Date: <input type="date" id="date"/><br/><br/>
          Body: <textarea rows="5" col="50" id="bodyText"></textarea><br/><br/>
          <input type="button" id="addComment" value="Add Comment"/>
        </div>

        <div id="container">

        </div>

        <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script src='./CareerInfo.js' type='text/javascript'></script>

      </div>
      <Footer />
    </div>
      );
}