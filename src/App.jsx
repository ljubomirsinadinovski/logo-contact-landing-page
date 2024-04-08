import './App.css';
import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import {
  Container,
  Domain,
  Email,
  Logo,
} from './styledComponents';
import lj from './assets/lj.jpeg';

const App = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  const copyToClipboard = (str) => {
    navigator.clipboard.writeText(str).then(() => {
      alert("My email is copied to your clipboard, now go write me an email!");
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };

  return (
    <>
      <Container>
        <Logo src={lj} alt='LJ Logo' />

        <Email onClick={() => copyToClipboard("LJ@sinadinovski.com")}>
          LJ<Domain>@sinadinovski.com</Domain>
        </Email>
      </Container>
      <Particles
        id='tsparticles'
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          autoPlay: true,
          background: {
            color: '',
            image:
              'linear-gradient(180deg, rgba(0,0,0,1) 57%, rgba(55,45,45,1) 100%)',
            position: '50% 50%',
            repeat: 'no-repeat',
            size: 'cover',
          },
          detectRetina: true,
          fullScreen: {
            enable: true,
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onDiv: {
                elementId: 'repulse-div',
                enable: true,
                mode: 'repulse',
              },
              onDiv: [
                {
                  enable: true,
                  selectors: '.bounce.rectangle',
                  mode: 'bounce',
                  type: 'rectangle',
                },
                {
                  enable: true,
                  selectors: '.bounce.circle',
                  mode: 'bounce',
                  type: 'circle',
                },
              ],
              onHover: {
                enable: true,
                mode: 'connect',
                parallax: {
                  enable: false,
                  force: 60,
                  smooth: 10,
                },
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 800,
                duration: 2,
                opacity: 0.8,
                size: 1,
                speed: 1,
              },
              connect: {
                distance: 80,
                lineLinked: {
                  opacity: 0.5,
                },
                radius: 80,
              },
              grab: {
                distance: 400,
                lineLinked: {
                  opacity: 1,
                },
              },
              push: {
                quantity: 3,
              },
              remove: {
                quantity: 10,
              },
              repulse: {
                distance: 200,
                duration: 0.5,
              },
            },
          },
          particles: {
            color: {
              value: '#e0ddd3',
            },
            lineLinked: {
              blink: false,
              color: '#e0ddd3',
              consent: false,
              distance: 150,
              enable: false,
              opacity: 0.4,
              width: 1,
            },
            move: {
              attract: {
                enable: false,
                rotate: {
                  x: 600,
                  y: 1200,
                },
              },
              bounce: false,
              direction: 'none',
              enable: true,
              outMode: 'out',
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              limit: 500,
              value: 300,
            },
            opacity: {
              animation: {
                enable: false,
                minimumValue: 0.1,
                speed: 1,
                sync: false,
              },
              random: false,
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              animation: {
                enable: false,
                minimumValue: 0.1,
                speed: 10,
                sync: false,
              },
              random: false,
              value: 1.5,
            },
          },
          polygon: {
            draw: {
              enable: false,
              lineColor: '#ffffff',
              lineWidth: 0.5,
            },
            move: {
              radius: 10,
            },
            scale: 1,
            type: 'none',
            url: '',
          },
        }}
      />
    </>
  );
};

export default App;
