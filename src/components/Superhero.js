import  { Card, Container, Row, Col, Image }  from 'react-bootstrap';
import antmanImage from "../assets/images/superhero/antman.jpg"
import avengerImage from "../assets/images/superhero/avenger.jpg"
import batmanImage from "../assets/images/superhero/batman.jpg"
import robinhoodImage from "../assets/images/superhero/robinhood.jpg"
import spidermanImage from "../assets/images/superhero/spiderman-cover.jpg"
import supermanImage from "../assets/images/superhero/superman.jpg"


const Superhero = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className='text-white'>SUPERHERO MOVIES</h1>
                <br/>
                <Row>
                    <Col md={4} className="movieWrapper" id='superhero'>
                    <Card className="movieImage">
                        <Image src={antmanImage} alt="Dune Movies" className='Images'/>
                        <div className="bg-white">
                            <div className="p-2 m-1 text-white"></div>
                            <Card.Title className="text-center">ANT-MAN</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with natural lead-into additional content
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 28 mins ago
                            </Card.Text>
                        </div>
                    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                        <Image src={avengerImage} alt="Dune Movies" className='Images'/>
                        <div className="bg-white">
                            <div className="p-2 m-1 text-white"></div>
                            <Card.Title className="text-center">AVENGER END GAME</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with natural lead-into additional content
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 36 mins ago
                            </Card.Text>
                        </div>
                    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                        <Image src={batmanImage} alt="Dune Movies" className='Images'/>
                        <div className="bg-white">
                            <div className="p-2 m-1 text-white"></div>
                            <Card.Title className="text-center">THE BATMAN</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with natural lead-into additional content
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 5 mins ago
                            </Card.Text>
                        </div>
                    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                        <Image src={robinhoodImage} alt="Dune Movies" className='Images'/>
                        <div className="bg-white">
                            <div className="p-2 m-1 text-white"></div>
                            <Card.Title className="text-center">ROBINHOOD</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with natural lead-into additional content
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 36 mins ago
                            </Card.Text>
                        </div>
                    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                        <Image src={spidermanImage} alt="Dune Movies" className='Images'/>
                        <div className="bg-white">
                            <div className="p-2 m-1 text-white"></div>
                            <Card.Title className="text-center">THE SPIDERMAN</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with natural lead-into additional content
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 59 mins ago
                            </Card.Text>
                        </div>
                    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                        <Image src={supermanImage} alt="Dune Movies" className="Images"/>
                        <div className="bg-white">
                            <div className="p-2 m-1 text-white"></div>
                            <Card.Title className="text-center">SUPERMAN</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with natural lead-into additional content
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 6 mins ago
                            </Card.Text>
                        </div>
                    </Card>
                    </Col>
                </Row>
            </Container>
           
        </div>
    )
}

export default Superhero