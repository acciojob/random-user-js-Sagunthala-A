document.addEventListener('DOMContentLoaded', () => {
  const getUserButton = document.getElementById('getUser');
  const infoButtons = document.querySelectorAll('.info-button');
  const userInfo = document.getElementById('userInfo');
  const userImage = document.getElementById('userImage');
  const userDetails = document.getElementById('userDetails');

  let userData = {}; // Object to store user data

  // Function to fetch a random user from the API
  const fetchRandomUser = async () => {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    return data.results[0];
  };

  // Function to display user info
  const displayUserInfo = () => {
    userImage.innerHTML = `<img src="${userData.picture.large}" alt="User Photo">`;
    userDetails.innerHTML = `<p>Name: ${userData.name.first} ${userData.name.last}</p>`;
  };

  // Function to handle button clicks
  const handleButtonClick = (attribute) => {
    switch (attribute) {
      case 'age':
        userDetails.innerHTML = `<p>Age: ${userData.dob.age}</p>`;
        break;
      case 'email':
        userDetails.innerHTML = `<p>Email: ${userData.email}</p>`;
        break;
      case 'phone':
        userDetails.innerHTML = `<p>Phone: ${userData.phone}</p>`;
        break;
      default:
        break;
    }
  };

  // Event listener for get user button
  getUserButton.addEventListener('click', async () => {
    userData = await fetchRandomUser();
    displayUserInfo();
  });

  // Event listener for info buttons
  infoButtons.forEach(button => {
    button.addEventListener('click', () => {
      handleButtonClick(button.getAttribute('data-attr'));
    });
  });
});
