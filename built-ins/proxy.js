// A proxy object sits between a real object and the calling code. The calling code interacts with the proxy instead of the real object.
const guy = { status: "looking for job" }
const handler = {
  get(target, propName) {
    return `The ${propName} is: ${target[propName]}`;
  },
  set(target, propName, value) {
      console.log(`My ${propName} proposal is: ${value}`)
      if(propName === 'payRate') {
          value = value + 1000
      }
      target[propName] = value
  }
};

const agent = new Proxy(guy, handler)
console.log(agent.status)
agent.payRate = 1000
console.log(`Sorry ${agent.payRate}`);
