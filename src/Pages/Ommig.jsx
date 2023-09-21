import Photo from "../assets/Photo.jpeg";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import Ellen from "../assets/Portfolio-billede.png"
import {FaGraduationCap, FaReact} from "react-icons/fa"
import {MdWork} from "react-icons/md"
import {TbBrandJavascript, TbBrandCss3, TbBrandHtml5} from "react-icons/tb"
import {PiFigmaLogoDuotone} from "react-icons/pi"
import { ImLinkedin } from "react-icons/im";

export default function Hjem() {

    return (
        <section>
            <div className="baggrund">
            <img src={Ellen} alt="" className="billede"/>
                <h3 className="multi">Multimediedesigner</h3>
                <h1 className="overskrift">Ellen Bager Pedersen</h1>
                <h2 className="ommig">Om mig</h2>
            </div>
            <img src={Photo} alt="" className="photo" />
            <p className="tekst">Hej! <br />
                Mit navn er Ellen, jeg er 22 år og multimediedesign-studerende med speciale i frontend-udvikling. 
                Jeg er født og opvokset på en gård på smukke Samsø. Min passion for webudvikling er drevet af den tilfredsstillelse man får af at 
                knække koden og se ideer blive til virkelighed online.
            </p>
            <p className="tekst1">Ud over mit studie elsker jeg at tilbringe tid udendørs og udforske den smukke natur omkring mig. 
                Det er vigtigt for mig, at opretholde en aktiv livsstil og tilbringe tid med venner og familie.
            </p>
            <p className="tekst1">
                Min målrettede og passionerede tilgang til arbejdet og livet gør mig alsidig og dedikeret. Jeg ser frem til at fortsætte med at skabe 
                funktionelle og smukke hjemmesider, samtidig med at jeg bevarer mine rødder på landet og mine nære forhold til familie og venner.
            </p>
            <h2 className="overskrift1">Programmer jeg ofte bruger</h2>
            <p className="programmer">Her er 5 programmer jeg ofte bruger, og øver mig på at blive bedre i. <br /> 
            Jeg har blandt andet brugt dem til at udarbejde dette portfolio.</p>
            <div className="align">
                <h2 className="kompetencer"><TbBrandHtml5/></h2>
                <h2 className="kompetencer"><TbBrandCss3/></h2>
                <h2 className="kompetencer"><TbBrandJavascript/></h2>
                <h2 className="kompetencer"><FaReact/></h2>
                <h2 className="kompetencer"><PiFigmaLogoDuotone/></h2>
            </div>

            <h2 className="overskrift1">Hvorfor vælge mig?</h2>
            <p className="hvorfor">
                På min rejse gennem arbejdslivet har jeg altid været drevet af ambitioner og målrettethed. Jeg er stolt af min pålidelighed og 
                evnen til at levere på et højt fagligt niveau. Men jeg tror på, at succes ikke kun handler om resultater; det handler også om det miljø, 
                vi arbejder i. Jeg sætter stor pris på et godt arbejdsmiljø, hvor uformelle samtaler og tid til at snakke om alt andet end arbejde i 
                pauserne er en del af hverdagen. For mig er det den perfekte balance mellem det faglige og det personlige, der skaber et professionelt 
                og berigende arbejdsmiljø.
            </p>


            <h2 className="overskrift1">Det siger andre om mig</h2>
            <div className="boks">
                <p>Ellen er ambitiøs og engageret, hun har gå-på mod der gør at det altid er et positivt samarbejde. 
                    Hun lader ikke et lille problem stå i vejen for hende, og er altid klar på at finde en løsning.
                </p>
                <h4 className="navn">Yassmin Dahwiche <br />
                    Medstuderende
                </h4>
            </div>
            <div className="boks">
                <p>Jeg har flere gange haft fornøjelsen af at arbejde sammen med Ellen i større projekter. Hun viser stor engagement i samarbejdet, 
                    samtidig med at hun bidrager med en masse god energi, hvilket gør hende helt perfekt at have med på sit team
                </p>
                <h4 className="navn">Mette Wive Andersen <br />
                    Medstuderende
                </h4>
            </div>
            <div className="boks">
                <p>Ellen har som pædagogmedhjælper arbejdet med børns udvikling gennem pædagogiske aktiviteter. Hun har igangsat leg med og imellem børn. 
                    Hun har ydet omsorg og været med til at skabe trygge rammer så der har været mulighed for udvikling og et godt børneliv for mange børn.
                    Ellen er en glad og udadvendt pige som hurtigt får dannet gode relationer til både børn, forældre og kollegaer. Ellen er god til at 
                    danne sig et overblik over dagen og er god til at lave om i planerne hvis det har været nødvendigt. Hun er omstillingsprat og mødestabil.  
                    Vi har været rigtig glade for at have Ellen ansat her i Rumlepotten, jeg giver hende de varmeste anbefalinger.
                </p>
                <h4 className="navn">Kate Svale <br />
                    Leder af Rumlepotten
                </h4>
            </div>
            
        
            <div className="experience">
                <h2 className="overskrift1">Tidslinje</h2>
                <VerticalTimeline lineColor="#888787">
                    <VerticalTimelineElement className="vertical-timeline-element--education"
                    iconStyle={{background: '#888787', color: '#fff'}}
                    icon={<MdWork/>}
                    date="Juni 2015 - Oktober 2019">
                        <h3>Servicemedarbejder</h3>
                        <p>I 2015 Startede jeg i Super Brugsen på samsø, hvor jeg blandt 
                            andet sad ved kassen, satte varer på plads og andre småting</p>

                    </VerticalTimelineElement>

                    <VerticalTimelineElement className="vertical-timeline-element--education"
                    iconStyle={{background: '#888787', color: '#fff'}}
                    icon={<FaGraduationCap/>}
                    date="August 2017 - Juni 2018">
                        <h3>Efterskole</h3>
                        <p>I 2017 startede jeg på Vestbirk musik- og sportsefterskole. Her gik jeg på kombilinjen, hvor jeg blandt andet gik til ridning, 
                            rytmisk pige gymnastik, løbetræning og meget andet. 
                        </p>

                    </VerticalTimelineElement>

                    <VerticalTimelineElement className="vertical-timeline-element--education"
                    iconStyle={{background: '#888787', color: '#fff'}}
                    icon={<FaGraduationCap/>}
                    date="August 2018 - Juni 2020">
                        <h3>HF</h3>
                        <p>I 2018 startede jeg på HF, på Grenaa gymnasium. Her havde jeg fagpakken Samfundsfag B, psykologi C, og valgfaget idræt B</p>

                    </VerticalTimelineElement>

                    <VerticalTimelineElement className="vertical-timeline-element--education"
                    iconStyle={{background: '#888787', color: '#fff'}}
                    icon={<MdWork/>}
                    date="Juni 2020 - Juli 2021">
                        <h3>Delikatessemedarbejder</h3>
                        <p>I 2020 startede jeg mit første sabbatår. Jeg startede igen 
                            i Super Brugsen på Samsø, denne gang var jeg hovedsageligt i slagter afdelingen, som delikatessemedarbejder </p>

                    </VerticalTimelineElement>

                    <VerticalTimelineElement className="vertical-timeline-element--education"
                    iconStyle={{background: '#888787', color: '#fff'}}
                    icon={<MdWork/>}
                    date="Maj 2021 - August 2022">
                        <h3>Pædagogmedhjælper</h3>
                        <p>I 2021 startede jeg som pædagogmedhjælper i Rumlepotten på Samsø </p>

                    </VerticalTimelineElement>

                    <VerticalTimelineElement className="vertical-timeline-element--education"
                    iconStyle={{background: '#888787', color: '#fff'}}
                    icon={<FaGraduationCap/>}
                    date="August 2022 - Nuværende">
                        <h3>Multimediedesigner</h3>
                        <p>I 2022 startede jeg på multimediedesign uddannelsen. Jeg går nu på 3. semester med fokus på frontend </p>

                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>


            <footer className="footer">
                <h5>Kontakt mig på:</h5>
                <p className="kontakt">Ellenbager@icloud.com</p>
                <p>+45 51758994</p>
                <a href="https://www.linkedin.com/in/ellen-bager-pedersen-15b029289/" className="linkedin"><ImLinkedin/></a>
                <p className="af">Portfolio af Ellen Bager Pedersen</p>
            </footer>
        </section>
    );
};