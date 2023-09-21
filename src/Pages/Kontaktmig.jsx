import { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import Ellen from "../assets/Portfolio-billede.png"
import Komponent from "../Components/Komponent";
import {ImLinkedin} from "react-icons/im"

export default function Kontakt() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getData() {
        const response = await fetch("https://wp.bybager.dk/wp-json/wp/v2/posts?_embeed&categories=6");
        const data = await response.json();
        setPosts(data);
        }
    getData();
    }, []);

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(
        'service_q75pqfr', //Service ID
        'template_e8jlxiv', //Template ID
        form.current, 
        'PzxBj_HpcPrZO5lEz') //Public key
        .then( 
            message => alert("Besked sendt!")
        );
    };

    return (
        <section>
          <div className="baggrund">
            <img src={Ellen} alt="" className="billede"/>
                <h3 className="multi">Multimediedesigner</h3>
                <h1 className="overskrift">Ellen Bager Pedersen</h1>
                <h2 className="kontaktmig">Kontakt Mig</h2>
            </div>

            {posts.map(post => (
                <Komponent key = {post.id} post={post} />
            ))}
            
            <form ref={form} onSubmit={sendEmail}>
                <h3>Send mig en besked</h3>
                <label>Navn</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Besked</label>
                <textarea name="message" />
                <input className="send" type="submit" value="Send" />
            </form>
 
            
        
            <footer className="footer">
                <h5>Kontakt mig på:</h5>
                <p className="kontakt">Ellenbager@icloud.com</p>
                <p>+45 51758994</p>
                <a href="https://www.linkedin.com/in/ellen-bager-pedersen-15b029289/" className="linkedin"><ImLinkedin/></a>
                <p className="af">Portfolio af Ellen Bager Pedersen</p>
            </footer>
        </section>
    )
}