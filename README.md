Mfileupload
===========

Mfileupload - Jquery Plugin For Upload Preview &amp; File Validations


Initialize
==========

       $('.inputFile').mfileUpload({
                 
                  preview        : true, 
                  dimensions     : '600,600',
                  allowExt       : 'jpg,png,jpeg',
                  maxSize        : 200,   
                  maxTotalSize   : 2000, 
                  btnClass       : 'up-btn', 
                  onDimension    : function(){  },
                  onExtension    : function(){  },
                  onMaxsize      : function() {  },
                  onMaxtotalsize : function() {  }
                  
              });

Settings
========

       **preview**        : false - to disable preview , by default it is true
       
       **dimensions**     : upload image width & height eg '200,200' -->'width,height' , by default all  allowed
       
       **allowExt**       : allowed extensions eg 'png,jpg'  --> default all allowed
       
       **maxSize**        : max size of file that can be uploaded  ( in KB) eg 100 in numeric
       
       **maxTotalSize**   : sum of all file sizes (in KB) eg 100 in numeric
       
       **btnClass**       : specify own class to style upload button
       
       **onDimension**    : callback function when dimension condition are not met
       
       **onExtension**    : callback function when extension condition are not met
       
       **onMaxsize**      : callback function when file size condition are not met
       
       **onMaxtotalsize** : callback total size when dimension condition are not met
