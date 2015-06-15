//Problem: User when clicking on image goes to a dead end

var $f1=$('<form id="signform" action="#" method="post"></form>');
var $f2=$('<p></p>');
var $f3=$('<label for="username">Username</label>');
var $f4=$('<input id="username" name="username" type="text">');
var $f5=$('<p></p>');
var $f6=$(' <label for="password">Password</label>');
var $f7=$('<input id="password" name="password" type="password">');
/*
      
    
     
      
      <span>Enter a password longer than 8 characters</span>
    </p>
    <p>
      <label for="confirm_password">Confirm Password</label>
      <input id="confirm_password" name="confirm_password" type="password">
      <span>Please confirm your password</span>
    </p>
    <p>
      <input type="submit" value="SUBMIT" id="submit">
    </p>
  </form>*/


//$("#signform").hide();
var $overlay1 = $('<div id="overlay1"></div>');
/*var $form1 = $('<form action="index.html" method="post">
                <p>
      <label for="username">Username</label>
      <input id="username" name="username" type="text">
    </p>
    <p>
      <label for="password">Password</label>
      <input id="password" name="password" type="password">
      <span>Enter a password longer than 8 characters</span>
    </p>
    <p>
      <label for="confirm_password">Confirm Password</label>
      <input id="confirm_password" name="confirm_password" type="password">
      <span>Please confirm your password</span>
    </p>
    <p>
      <input type="submit" value="SUBMIT" id="submit">
    </p>
  </form>');*/

//An image to overlay
//$("#signform").appendto($overlay1);

$overlay1.append($f1);
$overlay1.append($f2);
$overlay1.append($f3);
$overlay1.append($f4);

$overlay1.append($f5);

$overlay1.append($f6);

$overlay1.append($f7);



//A caption to overlay

//Add overlay
$("body").append($overlay1);

//Capture the click event on a link to an image
$(".sign a").click(function(event){
  event.preventDefault();

  //Problem: Hints are shown even when form is valid
//Solution: Hide and show them at appropriate times
  //Show the overlay.
  $("#signform").show();
  $overlay1.show();
  
  //Get child's alt attribute and set caption
  
});

//When overlay is clicked
$overlay1.click(function(){
  //Hide the overlay
  $overlay1.hide();
});










