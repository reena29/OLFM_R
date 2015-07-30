<?php 
  session_start(); /* Starts the session */
  try {
    $db = new PDO("mysql:host=localhost;dbname=OLFM","root","");
    $db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    $db->exec("SET NAMES 'utf8'");
    // var_dump($db);
    } catch (Exception $e) {
      echo "Could not connect to the database.";
      exit;
    }
    //echo "Woo-hoo!";
  if(isset($_POST['submitl'])){    
    $usernamel = isset($_POST['usernamel']) ? $_POST['usernamel'] : '';
    $passwordl = isset($_POST['passwordl']) ? $_POST['passwordl'] : ''; 
    $se="SELECT * FROM users WHERE uname='$usernamel' and upwd='$passwordl'";
    $sr=$db->query($se);
    $nr=$sr->fetchColumn();      
    if($nr!=false){
      $_SESSION['username']=$usernamel;
    } 
    else{
      $_SESSION['logincheck']='invalid';        
    }
  }
?>
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap-theme.min.css">
  </head>
  <body>    
    <!--main body starts-->
    <div id="main">
      <!--top navbar starts-->
      <div id="top">
        <lable id="wlcm"></lable>
        <a tabindex="1" id="signed" data-toggle="modal" href="#iModal">Login/Sign up</a>
        <a tabindex="2" id="glyphcart" class="glyphicon glyphicon-shopping-cart" data-toggle="modal" href="#iModal">(<span id="s1">0</span>)</a>
      </div>
      <!--top navbar ends-->
      <!--carousel starts-->
      <div id="headimage" class="carousel slide carousel-inner">        
        <div class="item active">
          <img  src="images/Picture2.png" alt="olfm">     
        </div> 
        <div class="item">
          <img    src="images/broccoli.jpg" alt="broccoli">
        </div>
        <div class="item">
          <img  src="images/ginger.jpg" alt="ginger">
        </div>
        <div class="item">
          <img  src="images/tomato.jpg" alt="tomato">
        </div>
        <div class="item">
          <img  src="images/potato.jpg" alt="potato">
        </div>
        <div class="item">
          <img  src="images/apple.jpg" alt="apple">     
        </div>              
        <a class="left carousel-control" href="#headimage" data-slide="prev">
          <span class="icon-prev"></span>
        </a>
        <a class="right carousel-control" href="#headimage" data-slide="next">
          <span class="icon-next"></span>
        </a>
      </div>
      <!--carousel ends--> 
       
