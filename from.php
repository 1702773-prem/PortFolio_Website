<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Handler</title>
</head>
<body>
    <?php

        

         $servername = 'localhost:3307';
         $username = 'root';
         $password = '';
         $dbname = 'portfolio';

         $conn = mysqli_connect($servername, $username, $password, $dbname);

         if(mysqli_connect_error())
         {
            die('connection failed'. mysqli_connect_error());
         }

         else{
         $name = $_REQUEST['name'];
         $mobile = $_REQUEST['mobile'];
         $email = $_REQUEST['email'];
         $subject = $_REQUEST['subject'];
         $message = $_REQUEST['message'];

         $sqlquery = "insert into data values('$name','$mobile','$email','$subject','$message')";

         if(mysqli_query($conn,$sqlquery)== true)
         {
           
         
            echo '<h1>Data Submitted succesfully  </h1>
                <h2>You can return to the <a href="index.html">home page</h2>  ';
                $_REQUEST['name']='';
                $_REQUEST['mobile']='';
                $_REQUEST['email']='';
                $_REQUEST['subject']='';
                $_REQUEST['message']='';
         }
         else
         {
            echo "Error: " . $sql . "<br>" . mysqli_error;
            echo '
            <h2>You can return to the <a href="index.html">home page</h2>  ';
         }

        }
        mysqli_close($conn);
    ?>
</body>
</html>