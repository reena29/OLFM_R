<?php session_start(); /* Starts the session */
session_destroy(); /* Destroy started session */
header("location:home1.php");  /* Redirect to login page */
?>