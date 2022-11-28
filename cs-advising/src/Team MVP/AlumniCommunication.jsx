import { Header } from "../Team_Ace/components/Header";
import { Footer } from "../Team_Ace/components/Footer";
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { Button } from '@mui/material';


export function AlumniCommunication() {

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };


    return ( 
        <div className="gh">
          <Header />
          <div className="gh_body">
            <div className="main_gh_title">Alumni Communication</div>
            <div>
              <Button onClick={() => openInNewTab('https://forms.gle/WCwereQGxiAvd2z1A')}> 
                Sign Up For Notifications!
              </Button>
            </div>
            <div>
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="Howard_CEA"
                options={{height: 400,
                      width: 300}}
              />
            </div>
          </div>
          <Footer />
        </div>
      );
      
}