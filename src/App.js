import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import pic1 from '../src/components/img/pic1.svg'
import pic2 from '../src/components/img/pic2.svg';
import css from '../src/components/img/logos/css.png';
import estrella from '../src/components/img/logos/estrella.png';
import html from '../src/components/img/logos/html.png';
import illustrator from '../src/components/img/logos/illustrator.png';
import javascript from '../src/components/img/logos/javascript.png';
import photoshop from '../src/components/img/logos/photoshop.png';
import reactLogo from '../src/components/img/logos/react.png';
import universe from '../src/components/img/logos/universe.png';

function App() {
  return (
    <div className="App">
        <Header />
        <main className='main'>
          <section className='main_one'>
              <div className='main_one-text'>
                  <p>Let’s <span>imagine</span> it <br />
                  Let’s make it <span>happen</span></p>
                  <a className='main_one-button' href="#">Know About Me</a>
              </div>
              <img src={pic1} alt="This is a pic of Flork saying hello" />
          </section>
          <section className='main_two'>
            <section className='main_two-texts'>
                <p className='main_two-texts-1'>I am a Junior Frontend Develper and Computer Network Technician
                who is always looking to learn something new.</p>
                <p>Currently, I’m learning about React and I want to learn more about
                backend technologies.</p>
                <p>By the way, I can use some design tools like Figma, Photoshop and 
                Ilustrator and I am the social media manager of a local coffee shop.</p>
            </section>
            <section className='main_two-pics'>
                <section className='main_two-pics-logos'>
                    <img src={css} alt="" />
                    <img src={estrella} alt="" />
                    <img src={html} alt="" />
                    <img src={illustrator} alt="" />
                    <img src={javascript} alt="" />
                    <img src={photoshop} alt="" />
                    <img src={reactLogo} alt="" />
                    <img src={universe} alt="" />
                </section>
                <img className='main_two-pics-guy' src={pic2} alt="" />
            </section>
        </section>
        </main>
        <Footer />
    </div>
  );
}

export default App;
