<!DOCTYPE html>
<html>
    <head>
        <title>home</title>

        <!--Google fonts-->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Libre+Bodoni&display=swap" rel="stylesheet">

        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <div id="section1">
            <div id="name_container">
                <p id="name_text"><?php echo $_POST['fname']; echo " "; echo $_POST['lname']; ?></p>
                <div id="below_name">
                    <p id="job"><?php echo $_POST['job']; ?></p>
                    <img src="/images/line2.png" id="line">
                    <p id="email"><?php echo $_POST['email']; ?></p>
                </div> 
            </div>
        </div>

        <?php
            $target_dir = "images/";
            $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);

            $uploadOk = 1;
            $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

            // Check if image file is a actual image or fake image
            if(isset($_POST["submit"])) {
            $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
            if($check !== false) {
                echo "File is an image - " . $check["mime"] . ".";
                $uploadOk = 1;
            } else {
                echo "File is not an image.";
                $uploadOk = 0;
            }
            }

            // Check if file already exists
            if (file_exists($target_file)) {
            echo "Sorry, file already exists.";
            $uploadOk = 0;
            }

            // Check file size
            if ($_FILES["fileToUpload"]["size"] > 500000) {
            echo "Sorry, your file is too large.";
            $uploadOk = 0;
            }

            // Allow certain file formats
            if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
            && $imageFileType != "gif" ) {
            echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
            $uploadOk = 0;
            }

            // Check if $uploadOk is set to 0 by an error
            if ($uploadOk == 0) {
            echo "Sorry, your file was not uploaded.";
            // if everything is ok, try to upload file
            } else {
            if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
            } else {
                echo "Sorry, there was an error uploading your file.";
            }
            }
        ?>

        <div id="section2">
            <div id="work_container">
                <table>
                    <tr>
                        <td class="left"><img src="/images/company1.jpeg" class="companyimg"></td>
                        <td class="right">
                            <h1><?php echo $_POST['company1_name']; ?></h1>
                            <p><?php echo $_POST['company1_blurb']; ?></p>                     
                        </td>
                    </tr>

                    <tr>
                        <td class="left"><img src="/images/company2.jpg" class="companyimg"></td>
                        <td class="right">
                            <h1><?php echo $_POST['company2_name']; ?></h1>
                            <p><?php echo $_POST['company2_blurb']; ?></p>      
                        </td>
                    </tr>
                </table>
            </div>
        </div>

        <footer>
            <ul>
                <li><?php echo $_POST['email']; ?></li>
                <li id="contact">Contact Me</li>
                <li><?php echo $_POST['phone']; ?></li>
            </ul>
        </footer>

        <script src="script.js"></script>

    </body>
</html>