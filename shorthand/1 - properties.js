/* if you want to define an object who's keys have the same name as the variables passed-in as properties, 
you can use the shorthand and simply pass the key name. */

function formatMessage({ name, id, avatar }) {
  return {
    id,
    name,
    avatar,
    timestamp: Date.now()
  };
}
