// Frontend.Masters - Functional - Light.JavaScript.v3;
// FM - FLJSv3;

getPerson(function onPerson(person) {
  return renderPerson(person);
});

getPerson(renderPerson);
