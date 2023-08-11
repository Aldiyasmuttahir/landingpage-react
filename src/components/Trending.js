import  { Card, Container, Row, Col, Image }  from 'react-bootstrap';
import duneImage from "../assets/images/trending/dune.jpg"
import everythingImage from "../assets/images/trending/everything.jpg"
import infiniteImage from "../assets/images/trending/infinite.jpg"
import jokerImage from "../assets/images/trending/joker.jpg"
import lightyearImage from "../assets/images/trending/lightyear.jpg"
import morbiusImage from "../assets/images/trending/morbius.jpg"


const Trending = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className='text-white'>TRENDING</h1>
                <br/>
                <Row>
                    <Col md={4} className="movieWrapper" id='trending'>
                    <Card className="movieImage">
                        <Image src={duneImage} alt="Dune Movies" className='Images'/>
                        <div className="bg-white">
                            <div className="p-2 m-1 text-white"></div>
                            <Card.Title className="text-center">DUNE</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with natural lead-into additional content
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 56 mins ago
                            </Card.Text>
                        </div>
                    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                        <Image src={everythingImage} alt="Dune Movies" className='Images'/>
                        <div className="bg-white">
                            <div className="p-2 m-1 text-white"></div>
                            <Card.Title className="text-center">EVERYTHING</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with natural lead-into additional content
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 19 mins ago
                            </Card.Text>
                        </div>
                    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                        <Image src={infiniteImage} alt="Dune Movies" className='Images'/>
                        <div className="bg-white">
                            <div className="p-2 m-1 text-white"></div>
                            <Card.Title className="text-center">INFINITE</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with natural lead-into additional content
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins ago
                            </Card.Text>
                        </div>
                    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                        <Image src={jokerImage} alt="Dune Movies" className='Images'/>
                        <div className="bg-white">
                            <div className="p-2 m-1 text-white"></div>
                            <Card.Title className="text-center">JOKER</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with natural lead-into additional content
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 35 mins ago
                            </Card.Text>
                        </div>
                    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                        <Image src={lightyearImage} alt="Dune Movies" className='Images'/>
                        <div className="bg-white">
                            <div className="p-2 m-1 text-white"></div>
                            <Card.Title className="text-center">LIGHTYEAR</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with natural lead-into additional content
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 1 mins ago
                            </Card.Text>
                        </div>
                    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                        <Image src={morbiusImage} alt="Dune Movies" className="Images"/>
                        <div className="bg-white">
                            <div className="p-2 m-1 text-white"></div>
                            <Card.Title className="text-center">THE MORBIUS</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with natural lead-into additional content
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 28 mins ago
                            </Card.Text>
                        </div>
                    </Card>
                    </Col>
                </Row>
            </Container>
           
        </div>
    )
}

export default Trending