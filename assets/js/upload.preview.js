/*
 * @Name : Mfileupload - Jquery Plugin For Upload Preview & File Validations
 *
 * @Author: Manish Singh
 *
 * @Copyright (c) 2010 Manish 
 * 
 * @Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * @Project home:
 *   http://manni-s.github.io/mfileupload
 *
 * @Demo:
 *   http://demo.pixelsurgelabs.com/mfileupload
*/

(function ($) {
    $.fn.mfileUpload = function (el) {

        var ie = window.FormData;


        var defaults = {
            preview: true, //false - to disable preview
            dimensions: null, // upload image width & height eg '200,200' -->'width,height'
            allowExt: null, //allowed extensions eg 'png,jpg'  --> default all
            maxSize: null, // max size of file that can be uploaded  ( in KB) eg 100 
            maxTotalSize: null, // sum of all file sizes (in KB) eg 100
            btnClass: 'up-btn', // specify own class to style upload button
            onDimension: null, // callback when dimension check is not validated 
            onExtension: null, // callback when extension check is not validated 
            onMaxsize: null, // callback when max file size check is not validated 
            onMaxtotalsize: null // callback total size of all file check is not validated 
        },


            opts = $.extend(defaults, el);

        $(this).find(':file').hide();

        if (!opts.preview)
            $(this).find('.preview').hide();

        $(this).on('click', '.f-upload', function () {
            $(this).parent().find(':file').click();
        });


        $(this).on('click', '.r-upload', function () {
            $(this).parent().find(':file').val('');
            $(this).parent().find('.preview').html('');
            $(this).parent().find('.f-inputinfo').html('');
            $(this).hide();
        });



        if (ie === undefined) {

            $(this).find('.preview').hide();
            $(this).find(':file').change(function () {
                var name = $(this).val();
                name = name.split('\\').pop();

                if (opts.allowExt)
                    checkext = checkExt(opts.allowExt, name.split('.').pop().toLowerCase());


                if (checkext) {
                    $(this).parent().find('.f-inputinfo').html(name);
                    if (name !== '')
                        $(this).parent().find('.r-upload').css('display', 'inline-block');
                } else
                    $(this).find(':file').replaceWith($(this) = $(this).clone(true));


            });

        } else {
            $(this).on('change', ':file', function () {
                var file = this.files,
                    $this = $(this),
                    checkmax = true,
                    checkext = true,
                    ext = $this.val().split('.').pop().toLowerCase();


                if (opts.maxTotalSize)
                    checkmax = checkMaxtotal();

                if (opts.allowExt && checkmax)
                    checkext = checkExt(opts.allowExt, ext);

                if (file && file[0] && checkmax && checkext) {
                    readFile(file[0], $this);
                } else
                    $this.replaceWith($this = $this.clone(true));


            });
        }

        function readFile(file, sel) {
            var reader = new FileReader();
            var image = new Image();

            reader.readAsDataURL(file);
            reader.onload = function (e) {
                image.src = e.target.result;
                image.onload = function () {
                    var width = this.width,
                        height = this.height,
                        name = file.name,
                        size = file.size,
                        src = this.src;

                    collectInfo(width, height, name, size, src, sel);
                };
            };

        }

        return this.each(function () {
            $(' <div class="f-inputinfo"></div><div class="f-upload ' + opts.btnClass + '">Select File</div><div class="r-upload up-btn">Remove File</div>').appendTo($(this));

        });


        function collectInfo(w, h, n, s, src, sel) {
            var cdime = true,
                cmsize = true;

            if (opts.maxSize)
                cmsize = checkSize(opts.maxSize, s);

            if (opts.dimensions && cmsize)
                cdime = checkDime(opts.dimensions, w, h);

            if (cdime && cmsize) {
                sel.parent().find('.f-inputinfo').html(n);
                sel.parent().find('.r-upload').css('display', 'inline-block');

                if (opts.preview) {
                    var pre = sel.parent().find('.preview'),
                        prewidth = pre.width(),
                        preheight = pre.height();
                    pre.html('<img src="' + src + '" style="max-width:' + prewidth + 'px; max-height:' + preheight + 'px">');

                }
            } else
                sel.replaceWith(sel = sel.clone(true));
        }

        function checkDime(dime, w, h) {
            var d = dime.split(',');

            if (w > d[0] || h > d[1]) {
                opts.onDimension();
                return false;
            } else
                return true;

        }

        function checkExt(ext, xt) {
            var e = ext.split(',');

            if ($.inArray(xt, e) == -1) {
                opts.onExtension();
                return false;
            } else
                return true;
        }

        function checkSize(msize, s) {
            var size = (s / 1024).toFixed(2);

            if (size > msize) {
                opts.onMaxsize();
                return false;
            } else
                return true;

        }


        function checkMaxtotal() {
            var totalsize = 0;
            $(':file').each(function () {
                if ($(this).val().length > 0) {
                    totalsize = totalsize + $(this)[0].files[0].size;
                }
            });
            totalsize = (totalsize / 1024).toFixed(2);
            if (totalsize > opts.maxTotalSize) {
                opts.onMaxtotalsize();
                return false;
            } else
                return true;
        }


    };
})(jQuery);
