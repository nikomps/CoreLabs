// components/Features.js
const Features = () => {
  return (
    <div className="content">
      <h2>What We Offer</h2>
      <div className="features">
        <div className="feature-box">
          <h3>Server Setup</h3>
          <p>Get your Discord server set up and optimized by professionals.</p>
        </div>
        <div className="feature-box">
          <h3>Custom Emojis</h3>
          <p>Access to a variety of custom emojis and symbols to make your server unique.</p>
        </div>
        <div className="feature-box">
          <h3>Guides & Resources</h3>
          <p>Step-by-step guides and resources to enhance your server.</p>
        </div>
      </div>
      {/* Updated Join Button */}
      <a 
        href="https://discord.gg/XpKVpBsuyU" 
        className="cta-button" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Join CoreLabs Now
      </a>
    </div>
  );
};

export default Features;