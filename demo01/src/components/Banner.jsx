import Carousel from 'react-bootstrap/Carousel';

function Banner() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://afamilycdn.com/150157425591193600/2020/4/6/banner-15861094282591306949619.png"
          alt="First slide"
        />
    
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://afamilycdn.com/150157425591193600/2020/4/6/banner-15861094282591306949619.png"
          alt="Second slide"
        />
      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://upload.lixibox.com/system/blogs/covers/000/001/901/original/1696331241.jpg"
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;