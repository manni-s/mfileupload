<!DOCTYPE html>
<html lang="en-US">
<head>
<title>Mfileupload - Jquery Plugin For Upload Preview & File Validations</title>
<link href="assets/css/style.css" rel="stylesheet" media="screen">
<script type="text/javascript" src="assets/js/jquery.js"></script>
<script type="text/javascript" src="assets/js/upload.preview.js"></script>

<script type="text/javascript">
$(document).ready(function(){

	$('.inputFile').mfileUpload({
	   
	    preview        : true, //false - to disable preview
	    dimensions     : '600,600', // upload image width & height eg '200,200' -->'width,height'
	    allowExt       : 'jpg,png,jpeg',   //allowed extensions eg 'png,jpg'  --> default all
	    maxSize        : 200,    // max size of file that can be uploaded  ( in KB) eg 100 
	    maxTotalSize   : 2000, // sum of all file sizes (in KB) eg 100
	    btnClass       : 'up-btn', // specify own class to style upload button
	    onDimension    : function(){ alert("Allowed dimensions are 600x600"); },
	    onExtension    : function(){ alert("Allowed extensions are jpg,png,jpeg"); },
	    onMaxsize      : function() { alert("Max file size should be less than 200 KB"); },
	    onMaxtotalsize : function() { alert("Total Size of files together should be less than 2000 KB"); }
	});

});

</script>

</head>

    <div id="wrapper">

        <div class="item">
            <div class="inputFile">
                <div class="preview"></div>
                <input type="file" />
            </div>
    </div>


    <div class="item">

        <div class="inputFile">
            <div class="preview"></div>

            <input type="file" />
        </div>
    </div>


    <div class="item">
        <div class="inputFile">
            <div class="preview"></div>
            <input type="file" />
        </div>
    </div>

    <div class="item">


        <div class="inputFile">
            <div class="preview"></div>

            <input type="file" />
        </div>
    </div>

</div>


</body>
</html>
