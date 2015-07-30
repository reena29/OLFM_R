//global variables
var itemname;
var qty;
var pi;
var pa;
var cal;
var altp;
var price1;
var counter=0;
var search1;
var s1;
var flag;
var tabs=45;
var tabi=tabs.toString();
var newrow;
var newtd2select;
var newqty;
var price2;
var newtd4;
var newtd5;
var rowspace;
var d;
var removebutton;
var tp=0;
var tp1=0;
var add2;
var add1;
var reduce;
var flag1;

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
  $('#usernamel').attr('autofocus',true);
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
  if($("#signed").html()==='Login/Sign up'){
        $('#iModal').modal('show');
        $('#fhide').hide();
        $('#ihide').show();
        $('#check').hide();
         $('#iModal .modal-header h4').html('Login');
  }else{
    $('#iModal').modal('hide');
  }
});

//Add to cart
$('#cart').click(function(e){
  e.preventDefault();  
  if($("#produceqty option:selected").text()==='Select'){
    alert('Please Select produce quantity.');
  }
  else{
    alert('Produce has been added to your cart!');
    counter=counter+1;
    $('.glyphicon span').html(counter);    
    qty=$("#produceqty option:selected").text();
    newrow=$("<tr></tr>");
    rowspace=$("</br></br>");
    newtd1=$("<td style='width:150px;'></td>");
    newtd1.html(itemname);
    newtd2=$("<td style='width:150px'></td>");
    newtd2select=$("<select id='newproduceqty' name='newqtyselect'></select>");
    newtd2select.append("<option value='0'>Select</option>");
    newtd2select.append("<option value='1'>1</option>");
    newtd2select.append("<option value='2'>2</option>");
    newtd2select.append("<option value='3'>3</option>");
    newtd2select.append("<option value='4'>4</option>");
    newtd2select.append("<option value='5'>5</option>");
    newtd2select.append("<option value='6'>6</option>");
    newtd2select.append("<option value='7'>7</option>");
    newtd2select.append("<option value='8'>8</option>");
    newtd2select.append("<option value='9'>9</option>");
    newtd2select.append("<option value='10'>10</option>");
    newtd2.append(newtd2select);
    newtd2.append(' lb(s)');
    newtd3=$("<td style='text-align:left;' class='priceclass'></td>");
    d=$("<td style='text-align:right;'>$</td>");
    newtd4=$("<td style='text-align:right;width:150px;'></td>");
    newtd5=$("<td hidden class='unitprice'></td>");
    newtd5.append(price1);
    removebutton=$("<button>Remove</button>");
    newtd4.append(removebutton);
    newrow.append(newtd1);
    newrow.append(newtd5);
    newrow.append(newtd2);
    newrow.append(d);
    newrow.append(newtd3);
    newrow.append(newtd4);
    newrow.append(rowspace);
    $('#viewcarttable').append(newrow);
    newtd2select.val(qty);
    newqty=newtd2select.val();
    price2=price1;

    newtd2select.change(function(){
      tp1=0;
      newqty=$(this).val();
      price1=$(this).parent(newtd2).parent(newrow).children('.unitprice').html();
      price1*=newqty;
      price1=price1.toFixed(2);
      $(this).parent(newtd2).parent(newrow).children('.priceclass').html(price1);
      price1=price2;
      flag1=1;
      var table = document.getElementById("viewcarttable");
      for (var i = 1;i<table.rows.length; i++) {   
        row = table.rows[i]
        var j = 4, col; 
        col = row.cells[j].innerHTML;
        console.log(col);
        tp1= +tp1 + +col;  
        tp1=tp1.toFixed(2);
        $('#ftotalth').html(tp1);     
      }
      $('#ftotalth').html(tp1);    
    });

    price1*=newqty;
    price1=price1.toFixed(2);
    newtd3.html(price1);
    price1=price2;
    
    removebutton.click(function(){
      reduce=$(this).parent().parent().children('.priceclass').html();
      $(this).parent().parent().remove();      
      
      if(flag1===1){
        tp1= +tp1 - +reduce;
        tp1=tp1.toFixed(2);
        $('#ftotalth').html(tp1);
        //flag1=0;
      }else{
        tp= +tp - +reduce;
        tp=tp.toFixed(2);
        $('#ftotalth').html(tp);
      }
        
      counter--;
      $('.glyphicon span').html(counter);
    });

    myFunction();
    function myFunction(){
      tp=$('#ftotalth').html();
      $('.priceclass').each(function(){          
        add1= $(this).html();
        console.log(add1);      
      })
      tp= +tp + +add1;
      tp=tp.toFixed(2);
      console.log(tp);
      $('#ftotalth').html(tp);
      flag1=0;
    }
    $('#produceqty').val(0);
  }    
});  

  
//View Cart
$('#checkout').click(function(e){
  e.preventDefault();
  $('#fhide').hide();
  $('#iModal .modal-header h4').html('Your Cart');
  if(counter===0){
    $('#viewcarttable').hide();
    $('#ftotaltable').hide();
    $('#hidecheckout').hide();
    $('#emptycart').html('Your Cart is empty.');           
    $('#check').show();    
  }
  else{
    $('#emptycart').hide();  
    $('#viewcarttable').show();
    $('#ftotaltable').show();
    $('#hidecheckout').show();    
    $('#check').show();   
  }
});



//view cart
$('.glyphicon').click(function(){
  $('#fhide').hide();
  $('#ihide').hide();
  $('#iModal .modal-header h4').html('Your Cart');
  if(counter===0){  
    $('#viewcarttable').hide();
    $('#ftotaltable').hide();
    $('#hidecheckout').hide();
    $('#emptycart').html('Your Cart is empty.');           
    $('#check').show();   
  }
  else{
    $('#emptycart').hide();  
    $('#viewcarttable').show();
    $('#ftotaltable').show();
    $('#hidecheckout').show();    
    $('#check').show();    
  }  
});

//sign up click event on modal
$("#hidelogin").click(function(){
$("#iModal").modal('hide');
$('#usernamel').attr('autofocus',false);
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
      altp=produceimages[i].ialtp;
      var z= $('<li><a><img class="img_size" src="" alt=""></a><h6 class="amt"></h6></li>');
      z.children('a').attr('tabindex',tabi);
      tabs++;
      tabi=tabs.toString();
      z.children('a').children('img').attr('src',pi);
      z.children('a').children('img').attr('alt',altp);
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


$('#produce_img a').keypress(function (e) {
 var key = e.which;
 if(key == 13)  // the enter key code
  {
    $('#produce_img a').click();
    return false;  
  }
});  

 







