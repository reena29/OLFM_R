        <footer>
          <hr>&copy;<?php echo date('Y'); ?> OLFM
        </footer>
      </div>
      <!--main body ends-->
      <!--login,produce detail,viewcart modal start-->
      <div class="modal fade" id="iModal">
        <div class="modal-dialog">
          <div  class="modal-content">
            <div  class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 class="modal-title">Login</h4>
            </div>
            <div  class="modal-body">
              <!--login body starts-->
              <div id="ihide">
                <div class="modal-header">
                  <form  action="" method="post">    
                    <p>
                      <label for="usernamel">Username</label>
                      <input id="usernamel" name="usernamel" type="text">
                    </p>
                    <p>
                      <label for="passwordl">Password</label>
                      <input id="passwordl" name="passwordl" type="password">
                     </p>    
                    <p>
                      <input type="submit" value="SUBMIT" id="submitl" name="submitl">
                      <span>*Invalid Username or Password.</span>
                      </p>
                  </form>
                </div>
                <h5 class="modal-title">Don't have an account?</h5>
                <a id="hidelogin" data-toggle="modal" href="#signupModal">Sign Up</a>          
              </div>
              <!--login body ends-->
              <!--produce detail starts-->        
              <div  id="fhide">   
                <div  id="largeimage">   
                  <div class='row'>  
                    <div class='col-sm-6'>           
                      <img  src="" id="imagepreview"></br>
                      <p></p>
                    </div>
                    <div class='col-sm-6'>
                      <label for="quantity">Enter Quantity</label>
                      <select id="produceqty" name='qtyselect'>
                        <option value='0'>Select</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        <option value='7'>7</option>
                        <option value='8'>8</option>
                        <option value='9'>9</option>
                        <option value='10'>10</option>
                      </select> lbs</br></br>
                      <input type="submit" value="Add to Cart" id="cart" name='cart'></br>
                      <input type="submit" value="View Cart" id="checkout" name='checkout'></br>
                      <input type="submit" value="Continue Shopping" id="continue">
                    </div>
                  </div>
                </div>
              </div>
              <!--produce detail ends-->
              <!--viewcart starts-->
              <div  id="check">   
                <div id="itemlist">  
                  <p id="emptycart"></p>
                  <table id="viewcarttable">
                    <thead>
                      <th>Items</th>
                      <th>Qty</th>
                      <th></th>
                      <th>price</th>
                    </thead>                    
                  </table>
                  <table id="ftotaltable" align="right">
                        <tr>
                          <th>
                          Subtotal&nbsp=&nbsp$   
                          </th>
                          <th id="ftotalth">
                          </th>
                        </tr>                   
                      </table> </br>
                  
                  <div class="row" id="hidecheckout">
                    <div class='col-sm-6'>   
                                                        
                    </div>
                    <div class='col-sm-6'>                                      
                      <input type="submit" value="Continue Shopping" id="continuef">
                      <input type="submit" value="Check Out" id="checkoutf">
                    </div>
                  </div>
                </div>
              </div>            
              <!--viewcart end-->            
            </div>        
          </div>
        </div>
      </div>
      <!--login,produce detail,viewcart modal end-->
      <!--sign up modal starts-->
      <div class="modal fade" id="signupModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div  class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 class="modal-title">Sign Up</h4>
            </div>
            <div class="modal-body">
              <form action="" method="post">
                <p>
                  <label for="email">Email</label>
                  <input id="email" name="email" type="email" autofocus>
                  <span>*Email already exists.</span>
                </p>
                <p>
                  <label for="username">Username</label>
                  <input id="username" name="username" type="text">
                  <span>*Username already exists.</span>
                </p>
                <p>
                  <label for="password">Password</label>
                  <input id="password" name="password" type="password">
                  <span>*Enter a password longer than 7 characters</span>
                </p>
                <p>
                  <label for="confirm_password">Confirm Password</label>
                  <input id="confirm_password" name="confirm_password" type="password">
                  <span>*Please confirm your password</span>
                </p>
                <p>
                  <input type="submit" value="SUBMIT" id="submit" name="submit">
                </p>
              </form>            
            </div>
          </div>
        </div>
      </div>     
      <!--sign up modal ends-->
        
      <script src="http://code.jquery.com/jquery-1.11.3.min.js" type="text/javascript" charset="utf-8"></script>
      <script src="js/menus.js"></script>
      <script src="js/login.js"></script>
      <script src="js/producelook.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>

      <!-- Code for Login/Sign up with database and session-->
      <script>
        $('#signupModal').modal('hide');
        $('#submit').click(function(e){
          <?php 
            if(isset($_POST['submit'])){  
              $uemaill =isset($_POST['email']) ? $_POST['email'] : '';
              $unamel =isset($_POST['username']) ? $_POST['username'] : '';
              $upwdl =isset($_POST['password']) ? $_POST['password'] : '';     
              $_SESSION['suemail']=$uemaill;
              $_SESSION['suname']=$unamel;
              $_SESSION['supwd']=$upwdl;        
            }
            if(isset($_SESSION['suemail']) && isset($_SESSION['suname']) && isset($_SESSION['supwd'])){ 
              $ue=$_SESSION['suemail'];
              $un=$_SESSION['suname'];
              $up=$_SESSION['supwd'];
              try{ 
                $selemail="SELECT * FROM users WHERE uemail='$ue'";
                $seluname="SELECT * FROM users WHERE uname='$un'";
                $selemailq=$db->query($selemail);
                $selunameq=$db->query($seluname);
                $resulte=$selemailq->fetchColumn();      
                $resultu=$selunameq->fetchColumn();      
                if($resulte!=false || $resultu!=false){
                  $_SESSION['checksubmit']="clicked";
                  ?>
                  <?php if($resulte!=false){
                    $_SESSION['emailcheck']="notavailable";
                  ?>          
                  <?php }
                  if($resultu!=false){
                    $_SESSION['usercheck']="userexists";
                  ?>
                  <?php }?>               
                <?php } 
                else{
                  unset($_SESSION['checksubmit']);
                  unset($_SESSION['emailcheck']);
                  unset($_SESSION['usercheck']);         
                  $_SESSION['signhide']='done';
                  $in="INSERT INTO users (uemail, uname, upwd) VALUES('$ue','$un','$up')";
                  $db->query($in);      
                  $_SESSION['name'] = $un;?>
                  $('#signupModal').modal('hide');        
                <?php }      
              }
              catch(Exception $e){
                  echo 'There is some error in inserting data';
              }    
            }
          ?>
        });
      </script>
          
      <?php
        if(isset($_SESSION['username'])){?>
          <script>
           console.log('logout');
           var s=document.getElementById('signed');
           s.value='Logout';
           console.log(s.value);
           $('#signed').html(s.value);
           var n="<?php echo $_SESSION['username']; ?>";//$('#usernamel').html();
           console.log(n);
           var n1='Welcome ';
           var n2=n1.concat(n);
           var n3='!';
           var n4=n2.concat(n3);
           $('#wlcm').text(n4);
           $('#signed').click(function(){
            if($(this).html()==='Logout'){
               /* Redirect to login page */
               $('#signed').attr('data-toggle','');
               $('#signed').attr('href','logout.php');
            }
           });     
          </script> 
      <?php }

        if(isset($_SESSION['name'])){?>
          <script>
           console.log('logout');     
           $('#signed').html('Logout');
           var n="<?php echo $_SESSION['name']; ?>";
           console.log(n);
           var n1='Welcome ';
           var n2=n1.concat(n);
           var n3='!';
           var n4=n2.concat(n3);
           $('#wlcm').text(n4);
           $('#signed').click(function(){
            if($(this).html()==='Logout'){
               /* Redirect to login page */
               $('#signed').attr('data-toggle','');
               $('#signed').attr('href','logout.php');
            }
           });     
          </script>  
       <?php } ?>

      <?php 
        if(isset($_SESSION['logincheck'])){?>
          <script>
            $('#iModal').modal('show');
            $('#fhide').hide();
            $('#ihide').show();
            $('#check').hide();
            $('#iModal .modal-header h4').html('Login');
            $('#submitl').next().show();
          </script>
        <?php
          session_unset();
        } ?>


      <?php
      if(isset($_SESSION['signhide'])){?> 
      <script>
      $('#signupModal').modal('hide');
      </script>
      <?php } 
      else if(isset($_SESSION['checksubmit']) and isset($_SESSION['emailcheck']) and isset($_SESSION['usercheck'])){?>
      <script>
      $('#signupModal').modal('show');
      $('#email').next().show();
      $('#username').next().show();
      </script>
      <?php
      $_SESSION['hidesign']='hideit';
      session_unset();
      header("location:logout.php");
      }else if(isset($_SESSION['checksubmit']) and isset($_SESSION['usercheck'])){?>
      <script>
      $('#signupModal').modal('show');
      $('#username').next().show();
      </script>
      <?php 
      session_unset();
      header("location:logout.php");
      }else if(isset($_SESSION['checksubmit']) and isset($_SESSION['emailcheck'])){?>
        <script>
      $('#signupModal').modal('show');
      $('#email').next().show();
      </script>
      <?php 
      session_unset();
      header("location:logout.php");
      }else{?>
      <script>
      $('#signupModal').modal('hide');
      </script>
      <?php }
      ?>

      </body>  
</html>
