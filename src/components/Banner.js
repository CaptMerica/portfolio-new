import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from '../assets/images/header-image.png'



export const Banner = () => {
  const [loopNum, setloopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const [index, setIndex] = useState(1);
  const period = 2000;
  
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta)
    
    const toRotate = [ "Software Engineer", "Full Stack Developer" ]
    
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1)
  
      setText(updatedText)
  
      if (isDeleting) {
        setDelta(prevDelta => prevDelta /2);
      }
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setloopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    }

    return () => {clearInterval(ticker)};
  }, [text, delta, isDeleting, loopNum])

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} med={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>{`Hi I'm Ryan! `}<span className="wrap">{text}</span></h1>
            <p>I'm a full-stack software developer with a background in audio engineering.  I'm passionate about applying creativity and tehcnology to create innovative,user-friendly applications that solve real-world problems.  </p>
            <button onClick={() => console.log('connet')}>Let's connect on LinkedIn <ArrowRightCircle size={25}/></button>
          </Col>
          <Col xs={12} med={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}