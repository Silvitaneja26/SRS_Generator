<?php 

$host="localhost";
$db="srs_login";

mysql_connect($host, "root", "");
mysql_select_db("srs_login");

if(isset($_POST['username'])){
    
    $username=$_POST['username'];
    $password=$_POST['password'];
    
    $sql="select * from users where username='".$username."'AND password='".$password."' limit 1";
    
    $result=mysql_query($sql);
    
    if(mysql_num_rows($result)==1){
        echo " You Have Successfully Logged in";
        exit();
    }
    else{
        echo " You Have Entered Incorrect Password";
        exit();
    }
        
}
?>