
const profileData = {
    firstName: document.querySelector('.text-heading-xlarge')?.innerText.split(' ')[0] || 'N/A',
    lastName: document.querySelector('.text-heading-xlarge')?.innerText.split(' ')[1] || 'N/A',
    company: document.querySelector('.pv-text-details__right-panel')?.innerText || 'N/A'
};

console.log("Extracted LinkedIn Profile Data:", profileData);

alert(`First Name: ${profileData.firstName}\nLast Name: ${profileData.lastName}\nCompany: ${profileData.company}`);
