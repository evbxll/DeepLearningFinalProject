function configureIframe() {
    const iframe = document.getElementById('dynamic-iframe');
  
    // Read attributes from the iframe tag
    const width = parseInt(iframe.getAttribute('width'), 10);
    const height = parseInt(iframe.getAttribute('height'), 10);
  
  
    // Apply scaled dimensions to the iframe
    iframe.style.width = `${width}px`;
    iframe.style.height = `${height}px`;
  }
  
// Configure the iframe after the page loads
window.onload = configureIframe;
