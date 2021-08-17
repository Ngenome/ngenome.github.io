import React from 'react';
import ReactDOM from 'react-dom';
//import {BlueButton} from './title
import {Card, TestimonialCard ,Comment} from './components'


class Tilt extends React.Component {
  componentDidMount() {
    VanillaTilt.init(this.rootNode, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.6,
    })
  }
  render() {
    return (
      <div
        ref={node => (this.rootNode = node)}
        className="tilt-root"
        >
        <div className="tilt-child">
          <div className="totally-centered" {...this.props} />
        </div>
      </div>
    )
  }
}

  const options = {
    scale: 1.2,
    speed: 1000,
    max: 30
  };
export function ServicePage(){
  return(
    <div className='service_flex'>
    
    <div className='services'>
    <h2 className='st'>Services</h2>
    <div className='tilts'>
    <Tilt options={options}>
    <Card
    title='Design and detailing'
    icon='cog'
    description="Our products are beautifully designed keeping in mind the fastest market trends, we have ensures top - quality product
        
        a team of skilled and experience designer 's that
        
        for our valuable clients
        ."
    buttonText='Engage'
    />
    </Tilt>
    <Tilt>
    <Card
        title='Engineering'
        icon='hard-hat'
        description='Our team of qualified and experienced engineers ensures any challenge product manufacturer and installation'
        buttonText='More'
        />
        </Tilt>
        <Tilt>
     <Card
            title='Manufacturing'
            icon='hammer'
            description='
        Our products are manufactured using high - quality materials, And all the applications like welding sewing tailoring are done with extensive care'
            buttonText='Engage'
            />
            </Tilt>
            </div>
            </div>
            <div className='testimonials'>
            <h2>Testimonials</h2>
            <div className='testimonial_cards'>
            <TestimonialCard
            title = 'Allan Jake'
            imagelink='images/man.jpg'
            description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '
            
            iglink='https://www.instagram.com'
            fblink='https://www.facebook.com'
            whatsapplink='https://www.whatsapp.com'
                    />
    <TestimonialCard
            title = 'Brooke Young'
            imagelink='images/old-man.jpg'
            description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '
            
            iglink='https://www.instagram.com'
            fblink='https://www.facebook.com'
            whatsapplink='https://www.whatsapp.com'
            />
    <TestimonialCard
            title = 'Celestine Alley'
            imagelink='images/lady.jpg'
            description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. .'
            
            iglink='https://www.instagram.com'
            fblink='https://www.facebook.com'
            whatsapplink='https://www.whatsapp.com'
            />
            </div>
            
            </div>
            <Comment/>
            </div>
    
    
    )
  
}
