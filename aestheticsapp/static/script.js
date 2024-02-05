document.addEventListener('DOMContentLoaded', function () {
    // Use plain JavaScript to fetch and display services
    const servicesList = document.getElementById('services-list');

    // Sample services data with images and descriptions
    const servicesData = [
        { name: "Dermaplaining", image: "dermaplaining.jpg", description: "A non-invasive exfoliation treatment that removes dead skin cells and peach fuzz, leaving your skin smooth and radiant." },
        { name: "Luxury Dermaplaining Facial", image: "luxury_dermaplaining_facial.jpg", description: "Indulge in the ultimate dermaplaining experience with a relaxing facial to rejuvenate and nourish your skin." },
        { name: "Lip Filler Dissolving", image: "lip_filler_dissolving.jpg", description: "Specialized treatment to safely dissolve unwanted lip filler, giving you the control over your lip appearance." },
        { name: "Lemon Bottle Fat Dissolving", image: "lemon_bottle_fat_dissolving.jpg", description: "An innovative fat dissolving treatment using natural ingredients for targeted areas, sculpting your body." },
        { name: "Teeth Whitening", image: "teeth_whitening.jpg", description: "Achieve a brighter smile with our professional teeth whitening service, enhancing your confidence." },
        { name: "8 Step Bro Glow", image: "8_step_Bro_Glow.jpg", description: "Experience the 8-step process for a radiant glow, combining exfoliation, hydration, and nourishment." },
    ];

    // Add services dynamically to the list
    servicesData.forEach(service => {
        const li = document.createElement('li');
        li.innerHTML = `<h3>${service.name}</h3>
                        <img src="static/images/${service.image}" alt="${service.name}">
                        <p>${service.description}</p>`;
        servicesList.appendChild(li);
    });

    // Display company name
    const companyName = document.createElement('h2');
    companyName.textContent = "Imran Tai Aesthetics";
    document.querySelector('header').appendChild(companyName);
});
