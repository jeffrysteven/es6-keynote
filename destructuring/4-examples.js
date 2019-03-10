// Example # 1 (change variable names)

const user = {
  n: "Jeff",
  g: "@jeffrysteven",
  t: "@jeffry_steven",
  i: "@jeffry__steven"
};

const { n: name, g: github, t: twitter, i: instagram } = user;

console.log(name); // Jeff
console.log(github); // @jeffrysteven
console.log(twitter); // @jeffry_steven
console.log(instagram); // @jeffry__steven

// Example # 2 (react props)

function register(props) {
  var { onChangeEmail, email, onChangePassword, password, submit } = props;
  return (
    <div>
      <span>Email:</span>
      <input type="text" onChange={onChangeEmail} value={email} />
      <span>Password:</span>
      <input type="text" onChange={onChangePassword} value={password} />
      <button onClick={submit}>Submit</button>
    </div>
  );
}

// Example 3 (function params array)

function getUserData(user) {
  return Promise.all([
    getProfile(user),
    getLocation(user)
  ]).then(function ([profile, location]) {
    return { profile, location }
  })
}
