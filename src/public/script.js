const peopleList = document.querySelector('#peopleList');
const searchInput = document.querySelector('#searchInput');

// GETS ALL THE PEOPLE
function getAllPeople() {
  const request = new XMLHttpRequest();

  request.open('GET', '/all-people');

  request.onload = function() {
    if(request.status === 200) {
      let people = request.responseText;

      // WHEN SUCCESSFUL IT TRANSFORMS THE JSON TO AN ARRAY
      people = JSON.parse(people);

      people = sortNames(people);
      // ITERATES THROUGH EACH PERSON AND CREATES THE ELEMENTS NEEDED FOR LI TAG
      people.forEach((person) => {
        addPerson(person);
      });

      getUserCount(people);
    } else {
      console.log("Error!");
    }
  }

  request.send();
}

function addPerson(person) {
  let personElement = document.createElement('li');
  let fullName = document.createElement('h3');
  let avatar = document.createElement('img');
  let jobTitle = document.createElement('p');
  let phone = document.createElement('h3');
  let leftSide = document.createElement('div');

  // SETS THE CONTENT OF EACH CHILD ELEMENT
  fullName.innerHTML = person.firstName + ' ' + person.lastName;
  avatar.setAttribute('src', person.avatarUrl);
  jobTitle.innerHTML = '(' + person.jobTitle + ')';
  phone.innerHTML = person.phoneNumber;
  leftSide.className = 'person__left-side';
  leftSide.appendChild(fullName);
  leftSide.appendChild(jobTitle);

  // APPENDS ALL THE CHILDS TO THE LI
  personElement.appendChild(leftSide);
  personElement.appendChild(phone);
  personElement.appendChild(avatar);

  // APPENDS THE LI TO THE LIST
  peopleList.appendChild(personElement);
}

// SORTS BY ALPHABETICAL ASCENDING ORDER THE NAMES
function sortNames(people) {
  people.sort((person1, person2) => {
    const name1 = person1.firstName.toLowerCase();
    const name2 = person2.firstName.toLowerCase();

    if(name1 < name2) {
      return -1;
    }

    if(name1 > name2) {
      return 1;
    }
    // NO SORTING NEEDED
    return 0;
  });

  return people;
}

// CALLS THE FUNCTION TO GET PEOPLE BY SEARCH WHEN THERE ARE 3 OR MORE CHARACTERS IN THE INPUT
function verifyInput() {
  if(searchInput.value.length >= 3) {
    peopleList.innerHTML = '';
    getPeopleBySearch();
  }

  if(searchInput.value.length === 0) {
    peopleList.innerHTML = '';
    getAllPeople();
  }
}

// GETS PEOPLE BY USER SEARCH
function getPeopleBySearch() {
 const inputChars = searchInput.value;

 const request = new XMLHttpRequest();

  request.open('GET', '/people/by-name/' + inputChars);

  request.onload = function() {
    if(request.status === 200) {
      let people = request.responseText;

      // WHEN SUCCESSFUL IT TRANSFORMS THE JSON TO AN ARRAY
      people = JSON.parse(people);

      people = sortNames(people);
      // ITERATES THROUGH EACH PERSON AND CREATES THE ELEMENTS NEEDED FOR LI TAG
      people.forEach((person) => {
        addPerson(person);
      });

      getUserCount(people);
    } else {
      console.log("Error!");
    }
  }

  request.send();
}

function getUserCount(people) {
  const usersCounter = document.querySelector('#usersCount');

  if(people.length !== 1) {
    usersCounter.innerHTML = people.length + ' users';
  } else {
    usersCounter.innerHTML = '1 user';
  }
  
}