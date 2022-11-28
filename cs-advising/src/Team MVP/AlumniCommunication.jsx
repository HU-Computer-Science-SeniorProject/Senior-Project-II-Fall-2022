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
                Sign Up For Notifications! *link to google form*
              </Button>
            </div>
            {/* <div display="flex" float="right" position="absolute">
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/cly-O_Ccv0A"
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
               </iframe>
            </div> */}
            <div display="flex" float="left" position="relative">
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="Howard_CEA"
                options={{height: 400,
                      width: 500}}
              />
            </div>
          </div>
          <Footer />
        </div>
      );
      
}