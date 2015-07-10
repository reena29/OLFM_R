//global variables
var newitem;
var itemname;
var itemqty;
var itemtotal;
var qty;
var pi;
var pa;
var cal;
var price1;
var c;
var counter=0;
var remove;
var search1;
var s1;
var flag;

//hide produce price
$('.amt').hide();

//produce image click event handler function
$(document).on('click','#produce_img a',function(){
  $('#produceqty').val(0);
  $('#ihide').hide();
  $('#fhide').show();
  $('#check').hide();
  $('#iModal .modal-header h4').html('Produce Detail');
  $('#largeimage p').html($(this).children('img').attr('alt'));
  itemname=$(this).children('img').attr('alt');
  price1=$(this).parent('li').children('h6').html();
  console.log(price1);
  var $s= $(this).children('img').attr('src');
  $('#imagepreview').attr('src', $s); 
  $('#iModal').modal('show'); 
});

//login/signup click event
$('#signed').on('click', function() {
  $('#fhide').hide();
  $('#ihide').show();
  $('#check').hide();
  $('#iModal .modal-header h4').html('Login');
});

//continue shopping
$('#continue').click(function(){
  $('#iModal').modal('hide');
});

//continue shopping
$('#continuef').click(function(){
  $('#iModal').modal('hide');
});

//checkout
$('#checkoutf').click(function(){
  $('#iModal').modal('hide');
});

//Add to cart
$('#cart').click(function(){
  if($("#produceqty option:selected").text()==='Select'){
    alert('Please Select produce quantity.');
  }
  else{
    alert('Produce has been added to your cart!');
    counter=counter+1;
    $('.glyphicon span').html(counter);
    newitem=$("<li></li>");
    itemqty=$("<li></li>");
    itemtotal=$("<li></li>");
    remove=$("<button>Remove</button>");
    qty=$("#produceqty option:selected").text();
    price1*=qty;
    price1=price1.toFixed(2);
    newitem.html(itemname);
    itemqty.html(qty);
    itemqty.append(' lb(s)');
    itemtotal.html(price1);
    itemtotal.prepend("$");
    itemtotal.append(" ");  
    $('#itemlist ol').append(newitem);
    $('#weight').append(itemqty);
    $('#total').append(itemtotal);
    $('#produceqty').val(0);
  }
});

//View Cart
$('#checkout').click(function(){
  $('#fhide').hide();
  $('#iModal .modal-header h4').html('Your Cart');
  if($('#itemlist ol').has('li').length===0){
    $('#noitems').hide();
    $('#totalfhide').hide();
    $('#emptycart').html('Your Cart is empty.');           
    $('#check').show();
  }
  else{
    $('#emptycart').hide();  
    $('#totalfhide').show();
    c=0;   
    $('#total li').each(function(){            
      var l=$(this).html().replace ( /[^\d.]/g, '' );//var l=$(this).html();
      l=parseFloat(l);
      c+=l;
      
    });   
    $('#finaltotal').html(c); 
    $('#finaltotal').prepend("$");  
    $('#noitems').show();
    $('#check').show();
  }
});

//view cart
$('.glyphicon').click(function(){
  $('#fhide').hide();
  $('#ihide').hide();
  $('#iModal .modal-header h4').html('Your Cart');
  if($('#itemlist ol').has('li').length===0){
    $('#noitems').hide();
    $('#totalfhide').hide();
    $('#emptycart').html('Your Cart is empty.');           
    $('#check').show();
  }
  else{
    $('#emptycart').hide();  
    $('#totalfhide').show();
    c=0;   
    $('#total li').each(function(){
      var l=$(this).html().replace ( /[^\d.]/g, '' );
      l=parseFloat(l);          
      c+=l;

    });    
    $('#finaltotal').text(c);   
    $('#finaltotal').prepend("$");
    $('#noitems').show();
    $('#check').show();
  }  
});

//sign up click event on modal
$("#hidelogin").click(function(){
$("#iModal").modal('hide');
});

//Ajax code to load more produce images when scrollbar hits window size 
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200) {
    var produceimages = JSON.parse(xhr.responseText);   
    for (var i=0; i<produceimages.length; i += 1) {
      pi=produceimages[i].isrc;
      pa=produceimages[i].ialt;
      cal=produceimages[i].price;
      var z= $('<li><a><img class="img_size" src="" alt=""></a><h6 class="amt"></h6></li>');
      z.children('a').children('img').attr('src',pi);
      z.children('a').children('img').attr('alt',pa);
      z.children('h6').html(cal);
      z.children('h6').hide();
      z.children('a').append(pa);
      //ajax code to search produce using search textbox
      if(flag===1){          
        if(pa.toLowerCase().search(search1.toLowerCase())===-1){
          //z.hide();
          console.log('no');    
        }
        else{
          $('#produce_img').append(z);
          console.log('yes');
        }
      }//ajax searchbox code ends
      else{
        $('#produce_img').append(z);
      }      
    }
  }
};
xhr.open('GET', '../data/pimg.json');

//Ajax request send on scroll hits window size
$(window).scroll(function() {
  if($(window).scrollTop() == $(document).height() - $(window).height()) { 
    $('#scrollmsg').hide();          
    flag=0;
    xhr.send();
  }
});

//serchbox click event
$('#producesearch').click(function(){
  $('#scrollmsg').hide();
  flag=1;
  search1=$('#searchbox').val();
  console.log(search1);
  $('#produce_img li').each(function(){
    s1=$(this).children('a').children('img').attr('alt');
    console.log(s1);
    if(s1.toLowerCase().search(search1.toLowerCase())===-1){
      $(this).hide();
      console.log('no');
    }
    else{
      $(this).show();
      console.log('yes');
    }
  });
  xhr.send();
});














