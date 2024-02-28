import Background from '../assets/images/hometexts.jpg'

function Home() {
  return (
    <>
    <div 
        style={{ backgroundImage: `url(${ Background })`}} 
        className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
        >
            <div className='flex place-items-center h-screen'>
                <h3 className='p-5 text-5xl bg-blue-200  text-black rounded'>
                    Welcome to Comment Analyzer
                </h3>
            </div>
    </div>
    <div className="flex justify-center">
        <h1 className="p-5 text-5xl">Our Mission</h1>
    </div>
    <div style={{ paddingTop: '20px', paddingBottom: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ flex: 1, marginLeft: '20px', marginRight: '30px' }}>
        <p className="large-text">
        At Comment Analyzer, we are committed to fostering a safer and more respectful online environment by harnessing the power of machine learning, via Perspective API, to reduce toxicity in digital discussions. Our mission is driven by the belief that everyone deserves to participate in online conversations without fear of harassment, discrimination, or abuse. By providing innovative tools and solutions, we aim to empower individuals and communities to engage in constructive dialogue and cultivate a culture of empathy, understanding, and mutual respect.
        We strive to create a digital world where every voice is heard, valued, and respected. We envision a future where online platforms are vibrant, inclusive, and conducive to healthy discourse, free from the harmful effects of toxicity and negativity. Through continuous innovation and collaboration, leveraging technologies such as the Perspective API, we strive to lead the way in shaping the future of online communication, inspiring positive change, and making the internet a safer and more welcoming space for all.
        </p>
        {/* Add more content or components here */}
      </div>
      <div style={{ flex: 1 }}>
        <img src="/machlearn2.jpg" alt="About Image" style={{ maxWidth: '100%', borderRadius: '10px', width:'600px', height: '500px',}} />
      </div>
      </div>
      </div>
    <footer className="bg-blue-400 text-white py-8">
        {/* Footer content */}
        <div className="container mx-auto flex justify-around items-center h-full">
          <div>
            <h3 className="p-5 text-3xl">Contact Us</h3>
            <p>Email: info@comment-analyzer.com</p>
            <p>Address: 123 Flower Street, Charlotte NC, US</p>
            <p>Phone: 123-456-7890</p>
          </div>
          <div>
            <h3 className="p-5 text-3xl">Useful Links</h3>
            <p>About</p>
            <p>Dashboard</p>
            <p>Sign Up</p>
          </div>
          <div>
            <h3 className="p-5 text-3xl">Learn More</h3>
            <p>Machine Learning</p>
            <p>Perspective API</p>
            <p>Natural Language Processing</p>
          </div>
        </div>
        <div className="text-center" style={{ paddingTop: '40px' }}>
          <p>&copy; 2024 Comment Analyzer</p>
        </div>
      </footer>
      
    </>
  )
}

export default Home