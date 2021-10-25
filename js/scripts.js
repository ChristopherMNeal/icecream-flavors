$(document).ready(function() {
  const iceCreamFlavors = ["chocolate", "vanilla", "rocky road", "banana", "coconut", "marshmallow", "cookies and cream"];
  iceCreamFlavors.forEach(function(element) {
    console.log(element);
    $("ul#flavors").append("<li>" + element + "</li>");
  });
});
