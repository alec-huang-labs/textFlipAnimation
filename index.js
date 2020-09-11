$(document).ready(function(){

  var $randomnbr = $('.nbr');
  /*
  $randomnbr is a JQuery object variable. it selects all elements with the 'nbr' class. 
  JQuery object is like an array you can index through. Index 0 is the first element 
  with 'nbr' class and so forth. 
  */
  var $timer= 10;
  var $data = 0;
  var letters = ["A", "L", "E", "C", " ", "H", "U", "A", "N", "G", " ", "L", "A", "B", "S"];
  //variables 
  
  $randomnbr.each(function(){
    var change = Math.round(Math.random()*300);
    $(this).attr('data-change', change)
  });
  /*
  .each() allows you to iterate through a JQuery object. 
  call this function on each element in the obj.
   Math.random() output between 0 - 1 (*100) gives you between 0 and 100. 
  rounded value is assigned to 'change'
   $(this) selects the current element and creates a new attribute called 
  'data-change'. assigns it the value of 'change'
  */
  function random(){
    return Math.round(Math.random()*9);
  };
  //returns a whole number between 0-9

  function select(){
    return Math.round(Math.random()*$randomnbr.length);
  };
  //$randomnbr.length returns length of the $randomnbr JQuery Object (# of elements)
  //basically randomly selects any of the elements within the $randomnbr JQuery object

  function value(){
    $('.nbr:nth-child('+select()+')').html(random());
    //$(.nbr:nth-child(2)).html(5)
    //passing in the value returned from select() into the JQuery selector. 
    //then replace the content of that element with a whole number between 0-9
    $('.nbr:nth-child('+select()+')').attr('data-number', $data);
    //same as above. but add a new attribute called 'data-number' and assing it the value of '$data' which is 0;
    $data++;
    //increment the data variable
    $randomnbr.each(function(){
        if(parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))){
          //compares the values of the two data attributes. remember, data-change is a number between 0 and 100. 
          // ex. 0 > 55? if data-number value is bigger
          var index = $('.ltr').index(this);
          //returns the position of the element within the JQuery object
          //ex. first element so index = 0
          $(this).html(letters[index]);
          //ex. letters[0] is "A"
          //setting value of element to the element position within the JQuery object. 
          $(this).removeClass('nbr');
          //remove nbr class from current element
          var $nbrsLeft = $('.nbr');

          if($nbrsLeft.length == 0){
            $('.fa-github').css('color','white')
          }       
        }
    });
  };

  setInterval(value, $timer);
  // continues calling the value function every x milliseconds (1000ms = 1s)

});


/*
setIntervall will call value() every 0.2s. value() will randomly select a 'nbr' class element, display a random number b/t 0-9
and add an element attribute called 'data-number' and assing it the value of $data which is 0. $data increments to 1. 
Then each of the elements within the $randomnbr jquery obj is iterated through comparing the data-number 
value (0) againstthe data-change value (random b/t 0-100). Probably won't pass on the first call. 
At 0.2s, value() is called again, a new nbr class element is randomly selected, a new random number is displayed and 
it's data-number attribute is set to 1. Each of the elements within $randomnbr is iterated through comparing 
the data-number value (1) againstthe data-change value (random b/t 0-100). This cycle repeats until 
an element has a data-number value > data-change value. The value of that element is 
set to it's original value. ex. letters[0] is A and. Then the nbr class is removed. On the next iterations,
it will only select elements that are numbers. eventually, the number of elements with nbr class will 
decrease to none. 

.ltr index remains the same
.nbr index changes as the class is removed from elements

for example, if .nbr class is removed from the first element,
.nbr elements are [L,E,C] and 
.ltr elements are [A,L,E,C]
then, .nbr class removed from the third element
.nbr elements are [L,C]
.ltr elements are [A,L,E,C]

E would be index of 2 for ltr elements but 1 for nbr elements. 

NOTE: attr() allows you to both initiate the attribute with a value and set the attribute value on 
subsequent called
*/






