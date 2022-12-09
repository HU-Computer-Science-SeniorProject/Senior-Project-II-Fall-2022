import "./Header.css";
import Hulogo from "../../CodeCrew/@c-admas18/Hulogo.png";
export function Header(props) {
  const routes = [
    { title: "Home", link: "/home" },
    { title: "Matriculation", link: "/matriculation" },
    {
      title: "Post Graduation",
      link: "BD",
    },
    {
      title: "Freshman Issues",
      link: "BD",
    },
    {
      title: "Graduation",
      link: "/graduation",
    },
  ];
  return (
    <div className="header">
      <div className="header_top">
        <a className="logo_img" href="/graduation">
          <svg
            viewBox="0 0 538 227"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="site-logo-white4"
                fill="#FFFFFF"
                fill-rule="nonzero"
                stroke="#FFFFFF"
                stroke-width="0.9787"
              >
                <path
                  d="M82.5,211.1 L82.5,212.1 C79.4,216.3 78.9,220.5 78.9,224.1 C79,225.1 78.6,225.6 77.8,225.6 C76.9,225.6 76.5,225.1 76.5,224.1 C76.5,220.9 77.6,217.8 80.5,213.9 L80.5,213.5 L75.2,213.5 C74.7,213.5 74.3,213.8 74.1,214.2 L73.5,214.2 L73.8,211.1 L82.5,211.1 Z M40.4,211.1 L40.4,224.5 L42.1,224.7 L42.1,225.5 L36.2,225.5 L36.2,224.7 L37.9,224.5 L37.9,213.5 L36.2,213.5 L36.2,212.5 C37.3,212.4 38.5,212 39,211.1 L40.4,211.1 Z M51,210.9 C53.8,210.9 55.5,212.4 55.5,214.1 C55.6,215.6 54.5,216.7 53,217.2 L53.1,217.5 C54.7,218.4 56.2,219.6 56.2,221.5 C56.2,223.7 54.3,225.5 51.3,225.5 C48.2,225.5 46.2,223.9 46.2,222.1 C46.2,220.5 47.4,219.3 49.1,218.8 L49,218.3 C47.7,217.5 46.5,216.3 46.5,214.7 C46.5,212.6 48.2,210.9 51,210.9 Z M65.7,210.8 C67.9,210.8 69.5,211.9 69.5,213.3 C69.4,214.3 68.9,214.7 68.3,214.7 C67.8,214.7 67.3,214.2 67.2,213.6 C67.2,213.1 67.4,212.7 67.5,212.1 C67.2,211.9 66.9,211.9 66.4,211.9 C64,211.9 63.1,214.6 63.1,219 L63.3,219 C63.7,217.4 64.9,216.6 66.2,216.6 C68.6,216.6 70,218.4 70,220.6 C70,223.4 68,225.5 65.1,225.5 C61.5,225.5 60.1,222.1 60.1,219.5 C60.1,214.1 62.6,210.8 65.7,210.8 Z M50.1,218.9 C48.9,219.5 48.4,220.7 48.4,221.9 C48.4,223.5 49.2,224.6 51.3,224.6 C53,224.6 53.6,223.5 53.6,222.1 C53.6,220.6 52.1,219.7 50.8,219.2 C50.6,219.1 50.3,219 50.1,218.9 Z M65.2,218 C64.3,218 63.4,218.7 63,220 C63.1,222 63.4,224.5 65.4,224.5 C66.8,224.5 67.2,223.1 67.2,221.1 C67.2,219.2 66.6,218 65.2,218 Z M51.1,211.8 C49.7,211.8 49.2,212.8 49.2,214.1 C49.2,215.5 50.5,216.4 51.6,216.8 C51.8,216.9 52,217 52.2,217.1 C53,216.5 53.4,215.4 53.4,214.3 C53.4,212.9 52.8,211.8 51.1,211.8 Z M207.7,162 L207.8,163.8 L203.4,164.3 L203.4,191.5 C203.4,200.8 196.7,205.3 187.1,205.3 C179.3,205.3 171.8,200.9 171.8,192.1 L171.8,164.3 L167.3,163.8 L167.4,162 L174.4,162.2 L181.9,162 L181.9,163.8 L177.6,164.3 L177.6,191.9 C177.6,198.7 182,201.9 189,201.9 C196,201.9 200.5,198.6 200.5,191.3 L200.5,164.3 L196.1,163.8 L196.1,162 L202.1,162.2 L207.7,162 Z M417.1,161.4 C421.6,161.4 425.1,163.6 426.4,165.1 L427.4,161.9 L429.5,161.9 L429.5,173.3 L427.2,173.3 C426.3,166.7 422.1,163.6 417.3,163.6 C411.9,163.6 409.4,166.5 409.4,170.9 C409.4,175.4 414.8,177.2 420,180 C427.5,183.9 431.2,187.7 431.2,192.8 C431.2,200.7 425.1,205.1 418.2,205.1 C413.4,205.1 410,203.2 407.8,201 L406.8,204.5 L405,204.5 L405,192.5 L407.4,192.4 C408.4,199.4 411.3,202.8 418.1,202.8 C423.1,202.8 426.3,199.7 426.3,195 C426.3,189.8 420.6,187.5 416.4,185.3 C407.5,181.1 404.9,177 404.9,172.2 C404.9,165.5 411.3,161.4 417.1,161.4 Z M378.4,162.1 C388.9,162.1 394.5,166.5 394.5,172.5 C394.5,178.5 390.1,181.1 384.1,182.3 L384.3,183.3 C391,183.5 394,187.5 394,192.4 L394,195.2 C394,200.4 395.1,202.4 396.9,202.4 C397.9,202.4 398.6,201.7 399.2,200.3 L400.3,201.1 C399,203.5 397.3,205 394.3,205 C390.2,205 388.3,201.2 388.3,195.3 L388.3,192.4 C388.3,188.8 386.3,184.3 381.9,184.3 L372.8,184.3 L372.8,202.4 L377.2,203.1 L377.2,204.7 L370.1,204.6 L362.6,204.7 L362.6,203.1 L367.1,202.4 L367.1,164.3 L362.6,163.8 L362.7,162.1 L378.4,162.1 Z M83.3,126.3 L79.3,126.3 L79.3,125.1 L75.5,125.1 L75.5,126.3 L71.5,126.3 L71.5,125.1 L67.7,125.1 L67.7,126.3 L63.8,126.3 L63.8,125.1 L59.9,125.1 L59.9,126.3 L56,126.3 L56,125.1 L52,125.1 L52,126.3 L48.1,126.3 L48.1,125.1 L44.2,125.1 L44.2,126.3 L40.3,126.3 L40.3,125.1 L36.4,125.1 L36.4,126.3 L32.5,126.3 L32.5,125.1 L28.6,125.1 L28.6,126.3 L24.9,126.3 L24.9,127.5 L24.7,127.5 L24.7,125.1 L24.846,125.1 L22,119.9 L24.9,119.9 L24.9,110.8 L25.0189815,110.661979 C25.4340278,110.197917 25.625,110.175 25.9,109.9 C26.1,109.7 25.1,109.5 25.5,108.8 C26,107.8 25,107.4 25,107 C25,106.4 25.6,106.4 26,105.8 C26.2,105.4 25.5,104.3 26.3,104.2 L26.3,104.2 L26.410462,104.244291 C26.9321799,104.526644 26.4117647,105.517647 26.6,105.8 C27,106.4 27.6,106.4 27.6,107 C27.6,107.4 26.6,107.9 27.1,108.8 C27.4,109.4 26.5,109.7 26.7,109.9 C27,110.2 27.2,110.1 27.7,110.8 L27.7,110.8 L36.3,110.8 L36.3,102.4 L38.2,102.399 L38.2,101 L39.3,72.2 L39.9,70.9 L49.8,67.6 C49.8,67.6 64.3,67.2 64.3,67.2 C64.3,67.3 75.4,69.8 75.4,69.8 C75.4,69.9 78.5,72.6 78.5,72.6 L78.5,72.6 L79.1,73.7 L79.987,102.399 L82,102.4 L82,110.8 L88.3,110.8 C88.8,110.2 89,110.2 89.3,109.9 C89.5,109.7 88.5,109.5 88.9,108.8 C89.4,107.8 88.4,107.4 88.4,107 C88.4,106.4 89,106.4 89.4,105.8 C89.6,105.4 88.9,104.3 89.7,104.2 L89.7,104.2 L89.810462,104.244291 C90.3321799,104.526644 89.8117647,105.517647 90,105.8 C90.4,106.4 91,106.4 91,107 C91,107.4 90,107.9 90.5,108.8 C90.8,109.4 89.9,109.7 90.1,109.9 C90.4,110.2 90.6,110.1 91.1,110.8 L91.1,110.8 L91.1,119.9 L94,119.9 L91.1,125.2 L91.099,125.486 L91.1,126.3 L91.098,126.3 L91,172.7 L95.9,172.7 L93,178 L93,187.7 L109.8,187.7 C110.3,187 110.5,187 110.8,186.7 C111,186.5 110.1,186.3 110.4,185.6 C110.9,184.6 109.9,184.2 109.9,183.8 C109.9,183.2 110.5,183.2 110.9,182.6 C111.1,182.3 110.4,181.1 111.2,181 L111.2,181 L111.310462,181.044291 C111.83218,181.326644 111.311765,182.317647 111.5,182.6 C111.9,183.2 112.5,183.2 112.5,183.8 C112.5,184.2 111.5,184.7 112,185.6 C112.3,186.2 111.4,186.5 111.6,186.7 C111.9,187.1 112.1,187 112.6,187.7 L112.6,187.7 L112.6,187.8 L115.7,187.8 L112.8,193.1 L112.8,204.8 L3.7,204.8 L3.7,193.1 L0.8,187.8 L3.7,187.8 C4.2,187.1 4.4,187.1 4.7,186.8 C4.9,186.6 4,186.4 4.3,185.7 C4.8,184.7 3.8,184.3 3.8,183.9 C3.8,183.3 4.4,183.3 4.8,182.7 C5,182.3 4.3,181.2 5.1,181.1 L5.1,181.1 L5.21046204,181.144291 C5.73217993,181.426644 5.21176471,182.417647 5.4,182.7 C5.8,183.3 6.4,183.3 6.4,183.9 C6.4,184.3 5.4,184.8 5.9,185.7 C6.2,186.3 5.3,186.6 5.5,186.8 C5.8,187.1 6,187 6.5,187.7 L6.5,187.7 L23,187.7 L23,178 L20,172.7 L24.9,172.7 L24.9,127.5 L91,127.5 L91,126.3 L87.2,126.3 L87.2,125.1 L83.3,125.1 L83.3,126.3 Z M533.9,161.9 L533.9,163.6 L530.1,164.4 L517.6,187 L517.6,202.4 L522,203.2 L522,204.8 L514.8,204.7 L507.5,204.8 L507.5,203.2 L511.9,202.5 L511.9,187 L499.3,164.4 L495.5,163.5 L495.5,161.9 L502.4,162 L509.7,161.9 L509.7,163.5 L505.9,164.2 L505.9,164.8 L516.1,184 L526.1,165.1 L526.1,164.3 L522,163.6 L522,161.9 L528.9,162 L533.9,161.9 Z M453.5,162.1 L453.5,163.8 L449.2,164.3 L449.2,202.3 L453.4,203.1 L453.4,204.7 L446.4,204.6 L438.9,204.7 L438.9,203.1 L443.4,202.4 L443.4,164.3 L438.9,163.8 L439,162.1 L446.4,162.3 L453.5,162.1 Z M275.3,162.1 L275.3,163.8 L271,164.3 L271,202.3 L275.2,203.1 L275.2,204.7 L268.2,204.6 L260.7,204.7 L260.7,203.1 L265.2,202.4 L265.2,164.3 L260.7,163.8 L260.8,162.1 L268.2,162.3 L275.3,162.1 Z M255,162 L255,163.6 L250.6,164.3 C250.6,164.3 250.116259,170.975625 250.100399,178.902632 L250.1,204.6 L246.2,204.6 L220.4,171.3 L220.4,186.3 C220.4,196.6 220.9,202.3 220.9,202.3 L225.5,203.1 L225.5,204.7 L219.3,204.6 L212.4,204.7 L212.4,203.1 L217,202.4 C217,202.4 217.4,197.1 217.4,186.2 L217.4,167.4 C217.4,164.492857 215.3822,164.146769 213.260922,163.832093 L212.916327,163.78094 C212.743878,163.755102 212.571429,163.728571 212.4,163.7 L212.5,162 L221.1,162.2 L247.2,196.4 L247.2,179.1 C247.2,171.1 246.8,164.4 246.8,164.4 L241.6,163.6 L241.6,162 L248.3,162.1 L255,162 Z M353.1,162 L353.3,173.2 L351,173.2 L350.6,171.8 C349.6,168 347.1,164.5 341.4,164.5 L332,164.5 L332,182 L334.7,182 C339,182.1 342.2,180.9 342.2,177.5 L342.2,176.3 L344.1,176.3 L344.1,190.1 L342.2,190.1 L342.2,188.9 C342.2,185.5 339.1,184.3 334.8,184.3 L332.1,184.3 L332.1,202.2 L343.4,202.2 C348.8,202.2 352.4,199 353.5,195.1 L353.9,193.6 L356.2,193.7 L355,204.6 L329.4,204.6 L321.9,204.7 L321.9,203.1 L326.4,202.4 L326.4,164.3 L321.9,163.8 L322,162.1 L353.1,162.1 L353.1,162 Z M492.7,162 L493.4,173.1 L491,173.1 L490.4,171.3 C489.1,167.4 487.2,164.4 482.1,164.5 L478.4,164.5 L478.4,202.4 L482.9,202.9 L482.8,204.6 L475.7,204.4 L468.4,204.6 L468.4,202.9 L472.6,202.4 L472.6,164.5 L468.5,164.5 C463.5,164.4 461.5,167.4 460.2,171.3 L459.6,173.1 L457.3,173.1 L458,162 L492.7,162 Z M319.1,161.9 L319.1,163.5 L315.1,164.3 L300.6,204.5 L297.5,204.5 L282.9,164.3 L278.8,163.5 L278.8,161.9 L286,162 L293.1,161.9 L293.1,163.5 L288.7,164.2 L300.4,197 L311.7,164.2 L307.3,163.5 L307.3,161.9 L313.7,162 L319.1,161.9 Z M108.9,191.5 L6.9,191.5 L8,192.7 L107.8,192.7 L108.9,191.5 Z M378,164.4 L372.8,164.4 L372.8,181.9 L376.7,181.9 C385.9,182.1 388.5,176.9 388.5,172.6 C388.5,168.7 386.1,164.4 378,164.4 Z M90.1,176.8 L25.6,176.8 L26.3,178 L89.4,178 L90.1,176.8 Z M58.4,136.8 C51.2,136.8 45.4,142.3 45.4,149.2 C45.4,156.1 51.2,161.7 58.4,161.6 C65.6,161.6 71.4,156.1 71.4,149.2 C71.4,142.4 65.6,136.8 58.4,136.8 Z M58,141 L58.2,148.4 L67.4,153.3 L56.6,149.2 L58,141 Z M262.5,78.3 C279.5,78.3 290.2,91.8 290.2,109.5 C290.2,127.2 279.4,140.6 262.5,140.6 C245.5,140.6 234.7,127.2 234.7,109.5 C234.7,91.8 245.5,78.3 262.5,78.3 Z M449.8,79.1 C464.1,79.1 471.8,85.3 471.8,94 C471.8,102.5 465.8,106.3 457.6,107.9 L457.9,109.3 C467,109.6 471.2,115.3 471.2,122.3 L471.2,126.3 C471.2,133.8 472.8,136.6 475.1,136.6 C476.5,136.6 477.4,135.6 478.2,133.6 L479.8,134.7 C478,138.1 475.7,140.2 471.6,140.2 C466.1,140.2 463.4,134.8 463.4,126.3 L463.4,122.1 C463.4,116.9 460.7,110.5 454.6,110.5 L439.9,110.5 L439.9,136.3 L446.1,137.7 L446.1,140 L436.4,139.8 L426.2,140 L426.2,137.7 L432.3,136.8 L432.3,82.4 L426.1,81.6 L426.2,79.1 L449.8,79.1 Z M506.1,79.2 C525.5,79.2 536.7,93 536.7,108.8 C536.7,129.1 523.4,139.9 506.1,139.9 L493.9,139.9 L483.8,140.1 L483.8,137.8 L489.8,136.9 L489.8,82.5 L483.6,81.7 L483.8,79.2 L506.1,79.2 Z M397.1,79.1 L417.3,136.6 L422.8,137.7 L422.8,140 L413,139.8 L403.1,140 L403.1,137.7 L409.2,136.8 L404.1,121.8 L382,121.8 C378.9,130.9 377.2,136.8 377.2,136.8 L383.6,137.7 L383.6,140 L374.7,139.8 L366.8,140 L366.8,137.7 L371.9,136.9 C371.9,136.9 375.6,128.1 379.1,117.8 L392.5,79.1 L397.1,79.1 Z M228.4,78 L228.4,80.5 L222.5,81.3 L222.5,136.5 L228.5,137.6 L228.5,139.9 L218.7,139.7 L208.4,139.9 L208.4,137.6 L214.5,136.6 L214.5,111.2 L181.4,111.2 L181.4,136.5 L187.4,137.7 L187.4,140 L177.6,139.8 L167.2,140 L167.2,137.7 L173.4,136.7 L173.4,81.3 L167.1,80.5 L167.2,78 L177.4,78.2 L187.3,78 L187.3,80.5 L181.3,81.3 L181.3,107.3 L214.4,107.3 L214.4,81.3 L208.3,80.5 L208.4,78 L218.5,78.2 L228.4,78 Z M290.9,79.1 L300.8,79.3 L311.6,79.2 L311.6,82 L305.1,82.9 L305,83.7 L316.3,126.6 L331.8,79.2 L336.7,79.2 L353.2,126.9 L363,83.6 L363,82.9 L355.3,81.8 L355.3,79.3 L364.8,79.5 L373.3,79.3 L373.3,81.9 L367.7,83.1 L353.5,139.9 L350,139.9 L332.6,89.8 L315.7,139.9 L312,139.9 L312,139.8 L296.4,83 L290.8,81.6 L290.9,79.1 Z M262.5,82.1 C248.9,82.1 244.1,94 244.1,109.5 C244.1,125 248.9,136.9 262.5,136.9 C276.1,136.9 280.9,125.1 280.9,109.5 C280.9,94 276.1,82.1 262.5,82.1 Z M504.6,82.6994891 L497.7,82.8 L497.7,136.4 L505.4,136.4 C523.5,136.7 528,121.3 528,109 C528,97.2 521.9,82.6 504.6,82.6994891 Z M30.4,112.5 L29.3,112.5 L29.3,119.6 L30.4,119.6 L30.4,112.5 Z M33.9,112.5 L32.8,112.5 L32.8,119.6 L33.9,119.6 L33.9,112.5 Z M37.4,112.5 L36.3,112.5 L36.3,119.6 L37.4,119.6 L37.4,112.5 Z M40.9,112.5 L39.8,112.5 L39.8,119.6 L40.9,119.6 L40.9,112.5 Z M44.4,112.5 L43.3,112.5 L43.3,119.6 L44.4,119.6 L44.4,112.5 Z M47.9,112.5 L46.8,112.5 L46.8,119.6 L47.9,119.6 L47.9,112.5 Z M51.4,112.5 L50.3,112.5 L50.3,119.6 L51.4,119.6 L51.4,112.5 Z M54.9,112.5 L53.8,112.5 L53.8,119.6 L54.9,119.6 L54.9,112.5 Z M61.9,112.5 L60.8,112.5 L60.8,119.6 L61.9,119.6 L61.9,112.5 Z M65.4,112.5 L64.3,112.5 L64.3,119.6 L65.4,119.6 L65.4,112.5 Z M68.9,112.5 L67.8,112.5 L67.8,119.6 L68.9,119.6 L68.9,112.5 Z M72.4,112.5 L71.3,112.5 L71.3,119.6 L72.4,119.6 L72.4,112.5 Z M75.9,112.5 L74.8,112.5 L74.8,119.6 L75.9,119.6 L75.9,112.5 Z M79.4,112.5 L78.3,112.5 L78.3,119.6 L79.4,119.6 L79.4,112.5 Z M86.4,112.5 L85.3,112.5 L85.3,119.6 L86.4,119.6 L86.4,112.5 Z M82.9,112.5 L81.8,112.5 L81.8,119.6 L82.9,119.6 L82.9,112.5 Z M393.1,89.4 L383.5,117.7 L402.7,117.7 L393.1,89.4 Z M449.697816,82.5990738 L440.1,82.6 L440.1,107.5 L447.6,107.5 C460.2,107.8 463.7,100.4 463.7,94.2 C463.7,88.6674699 460.479039,82.6469154 449.697816,82.5990738 Z M81.1,103.8 L36.7,103.8 L37.2,104.6 L80.7,104.6 L81.1,103.8 Z M48.2,76.5 C48.2,71.6 42.1,72.4 41.7,78.7 L41.7,78.7 L41.3,100 L48.1,98.1 L48.2,98.1 Z M76.5,79.6 C76.5,74.7 71.1,70.7 70.7,76.7 L70.7,76.7 L70.8,97.7 L77,99.1 Z M63,75.7 C63,70.8 55.9,70 55.4,76.2 L55.4,76.2 L54.9,97.4 L63,97.4 Z M64.7,60.2 L75.8,62.7 L79,64.5 L79,64.5 L79,64.6 L83.8,69.1 L79.1,73.6 L79.1,72.3 L75.7,69.2 C75.5,69.2 64.4,66.6 64.4,66.6 C64.3,66.6 49.7,67 49.7,67 C49.6923077,67 49.6242604,67.0213018 49.5051434,67.0605826 L49.1548674,67.1779024 C47.0117604,67.902182 39.2865385,70.5865385 39.2,70.5 L39.2,70.5 L39.2,72.2 L34.9,68.1 L39.7,64.9 L39.7,64.9 L50.1,60.6 L64.7,60.2 Z M39.8,64.2 C40.6,44.8 75,43.9 78.8,63.8 L78.8,63.8 L75.9,62.2 L64.7,59.6 L50,60 Z M59.5,0.9 L60.1,27.9 L60.3137563,27.9379638 C62.7298776,28.4099592 64.9114286,30.3028571 65.3,33.8 L65.3,33.8 L66.7,34.5 L65.3,35.9 L65.5,48.9 L61.8,47.9 L56.7,47.9 L53,48.7 L53,48.1 L53.4,36 L51.9,34.8 L53.5,34.1 C53.5,30.4 55.9,28.3 58.5,28 L58.5,28 L58.4,28 L59.5,0.9 Z M55.9,39.6 C55.9,38.1 54.1,38.4 54,40.2 L54,40.2 L53.9,46.4 L55.9,45.8 Z M64.3,40.5 C64.3,39 62.7,37.9 62.6,39.6 L62.6,39.6 L62.6,45.7 L64.4,46.2 Z M60.2,39.3 C60.2,37.8 58.1,37.6 58,39.4 L58,39.4 L57.9,45.6 L60.2,45.6 Z"
                  id="Combined-Shape"
                ></path>
              </g>
            </g>
          </svg>
        </a>
        <div className="header_title">
          {props.headerLabel ?? "Computer Science Advising"}
        </div>
        <div className="headaer_login"></div>
      </div>
      {props.showExtra === false ? null : (
        <div className="header_bottom">
          {routes.map((route) => {
            return (
              <a href={route.link} className="header_route">
                {route.title}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
