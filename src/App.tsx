import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Resume } from "./pages/Resume";
import { Experience } from "./pages/Experience";
/*
Header  
HOME(LANDING)                    WORK(LANDING) - ABOUT - RESUMO(PDF)

LANDING PAGE:

  -------------------------------------------                   IMAGE ILUSTRATION
  |                                         |
  |  Works BLOCK                           |
  |  WHO AM I - WHAT I DO - WHAT I ENJOY    |
  |  WHERE I AM WORKING                     |   
  |  WHERE I WORKED                         |
  |  WHERE I GRADUATED                      |
  -------------------------------------------

  PROFESSIONAL EXPERIENCE 

  BLOCKS WITH PREVIOUS AND PRESENT WORK PROJECTS

  ------------------          |
  |                 |         |
  |                 |         |
  |                 |         |
  |                 |         |
  ------------------          |

  PERSONAL PROJECTS
  SAME CONCEPT 


  ACADEMIC PROJECTS



  FOOTER

  CUTE MESSAGE 

  CONTACT INFOS LIKE NAME, EMAIL AND SITE YEAR                          SOCIAL MEDIA CONTACTS (LINKEDIN, INSTAGRAM, GITHUB)



ABOUT

BLOCK OF TEXT TALKING ABOUT MYSELF, TELLING MY HISTORY AS A PROGRAMMER (UNIVERSITY, AND PROFESSIONALY)

BLOCKS WITH AREAS OF EXPERTISE     CURRENTLY LEARNING

PERSONAL INSTERESTS         CURRENT PROJECTS


MAYBE SOMETHING ABOUT TABLE TENNIS AND ANIME

ASIDE FROM DEVELOPING....



*/

export default function App() {

  return (
    // <div className="flex flex-col min-h-screen">
    <div className="flex flex-col justify-between h-screen gap-10">
      <Header />
      <Resume/>
      <Experience/>
      <Footer />
    </div>
  )
}
