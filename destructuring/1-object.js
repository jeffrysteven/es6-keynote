// Destructuring: Allow us to extract multiple properties from an object.

// Example #1

const user = {
  name: "Jeff",
  github: "@jeffrysteven",
  twitter: "@jeffry_steven",
  instagram: "@jeffry__steven"
};

const { name, github, twitter, instagram } = user;

// Example #2

function getUser() {
  return {
    name: "Jeff",
    github: "@jeffrysteven",
    twitter: "@jeffry_steven",
    instagram: "@jeffry__steven"
  };
}

const { name, github, twitter, instagram } = getUser();