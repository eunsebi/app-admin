<%@ page import="app.admin.Article" %>
<%@ page import="app.admin.Content" %>
<%@ page import="app.admin.ContentTextType" %>

<g:if test="${category?.anonymity}">
%{--<div class="form-group ${hasErrors(bean: article, field: 'title', 'error')} has-feedback">
    <div class="alert alert-info">
        <ul>
            <li><b>블라블라</b> 블라블라</li>
        </ul>
    </div>
</div>--}%
</g:if>

<g:if test="${!article.id || !article.category?.anonymity}">
    <sec:ifAllGranted roles="ROLE_ADMIN">

        <div class="form-group ${hasErrors(bean: article, field: 'choice', 'has-error')} has-feedback">
            <div class="checkbox">
                <label>
                    <g:checkBox name="choice" value="${article?.choice}"  />
                    <g:message code="article.choice.label" default="Editor`s Choice" />
                </label>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <label>
                    <g:checkBox name="disabled" value="${!article?.enabled}"  />
                    <g:message code="article.disabled.label" default="게시물 비공개 (관리자만 접근가능)" />
                </label>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <label>
                    <g:checkBox name="ignore" value="${article?.ignoreBest}"  />
                    <g:message code="article.ignore.label" default="Weekly Best 제외" />
                </label>
            </div>
        </div>

        <div class="form-group ${hasErrors(bean: article, field: 'choice', 'has-error')} has-feedback">
            <div class="checkbox">
                <label>
                    <g:checkBox name="notice" value="${notices?.size() > 0}"  />
                    <g:message code="article.notice.label" default="카테고리 공지" />
                </label>
            </div>
            <div class="alert alert-info" id="noticeCategoryList" style="display: ${notices?.size() > 0 ? "block" : "none"}">
                <g:each in="${categories}" var="category">
                    <label>
                        <input type="checkbox" name="notices" value="${category.code}" <g:if test="${notices*.categoryId.contains(category.code)}">checked="checked"</g:if>> ${message(code: category.labelCode, default: category.defaultLabel)}
                    </label>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                </g:each>
            </div>
        </div>

        <div class="form-group ${hasErrors(bean: article, field: 'category', 'has-error')} has-feedback">
            <div>
                <select id="category" name="categoryCode" class="form-control">
                    <option value="">게시판을 선택해 주세요.</option>
                    <g:each in="${writableCategories}" var="category">
                        <option value="${category.code}" <g:if test="${category.code == article?.category?.code}">selected="selected"</g:if>>${message(code: category.labelCode, default: category.defaultLabel)}</option>
                    </g:each>
                </select>
            </div>
        </div>
    </sec:ifAllGranted>

    <sec:ifNotGranted roles="ROLE_ADMIN">
        <g:if test="${writableCategories.size() > 1}">
            <div class="form-group ${hasErrors(bean: article, field: 'category', 'has-error')} has-feedback">
                <div>
                    <select id="category" name="categoryCode" class="form-control">
                        <option value="">게시판을 선택해 주세요.</option>
                        <g:each in="${writableCategories}" var="category">
                            <option value="${category.code}"
                                    <g:if test="${category.code == article?.category?.code}">selected="selected"</g:if>
                                    data-external="${category.writeByExternalLink}"
                                    data-anonymity="${category.anonymity}">
                                ${message(code: category.labelCode, default: category.defaultLabel)}
                            </option>
                        </g:each>
                    </select>
                </div>
            </div>
        </g:if>
        <g:else>
            <g:hiddenField name="categoryCode" value="${writableCategories?.getAt(0).code}" />
        </g:else>
    </sec:ifNotGranted>
</g:if>

<div class="form-group ${hasErrors(bean: article, field: 'title', 'has-error')} has-feedback">
    <div>
        <g:textField name="title" required="" value="${article?.title}" placeholder="제목을 입력해 주세요." class="form-control"/>
    </div>
</div>

<div class="form-group ${hasErrors(bean: article, field: 'tagString', 'has-error')} has-feedback">
    <div>
        <g:textField name="tagString" value="${article?.tagString}" placeholder="Tags," data-role="tagsinput" class="form-control"/>
    </div>
</div>

<div class="form-group ${hasErrors(bean: article.content, field: 'text', 'has-error')} has-feedback">
    <g:if test="${article?.content?.textType == ContentTextType.MD}">
        <g:textArea name="content.text" id="summernote" value="${markdown.renderHtml([text: article?.content?.text])}" rows="20" class="form-control input-block-level" />
    </g:if>
    <g:elseif test="${article?.content?.textType == ContentTextType.HTML}">
        <g:textArea name="content.text" id="summernote" value="${filterHtml([text: article?.content?.text])}" rows="20" class="form-control input-block-level" />
    </g:elseif>
    <g:else>
        <g:textArea name="content.text" id="summernote" value="${lineToBr([text: article?.content?.text])}" rows="20" class="form-control input-block-level" />
    </g:else>

</div>

<g:hiddenField name="content.textType" value="HTML"/>
<asset:script type="text/javascript">
    $(document).ready(function() {
        var sendFile = function (file, el) {
              var form_data = new FormData();
              form_data.append('file', file);
              alert("gg")
              $.ajax({
                data: form_data,
                type: "POST",
                url: '/file/image',
                cache: false,
                contentType: false,
                enctype: 'multipart/form-data',
                processData: false,
                success: function(url) {
                        $('#summernote').summernote('insertImage', url);
                    $('#imageBoard > ul').append('<li><img src="'+ url +'" width="480" height="auto"/></li>');
	        }
	      });
	    }
	$('#summernote').summernote({
        height: 300,
        minHeight: null,
        maxHeight: null,
        focus: true,
        callbacks: {
          onImageUpload: function(files, editor, welEditable) {
            for (var i = files.length - 1; i >= 0; i--) {
              sendFile(files[i], this);
            }
          }
        }
      });
});
     /*$(function(){
         $('#summernote').summernote({minHeight: 300, lang: 'ko-KR',
           onInit: function() {
             if($(window).height() > 400)
                 $('.note-editable').css('max-height', $(window).height()-100);
           },
           callbacks : {
             onImageUpload: $.onImageUpload($('#summernote'))
           }

         });
     })*/

     /*$(function(){
         $('#summernote').summernote({
             minHeight: 300,
             fontNames : [ '맑은고딕', 'Arial', 'Arial Black', 'Comic Sans MS', 'Courier New', ],
             fontNamesIgnoreCheck : [ '맑은고딕' ],
             focus: true,

             callbacks: {
                 onImageUpload: function(files, editor, welEditable) {
                     for (var i = files.length - 1; i >= 0; i--) {
                         sendFile(files[i], this);
                     }
                 }
             }
         });
     })

     function sendFile(file, el) {
         var form_data = new FormData();
           form_data.append('file', file);
           $.ajax({
             data: form_data,
             type: "POST",
             url: './profileImage.mpf',
             cache: false,
             contentType: false,
             enctype: 'multipart/form-data',
             processData: false,
             success: function(img_name) {
                   $(el).summernote('editor.insertImage', img_name);
             }
           });
     }*/

     function postForm() {
         $('textarea[name="content.text"]').val($('#summernote').code());
     }

     $('#notice').click(function() {
       if($(this).is(':checked')) {
         $('#noticeCategoryList').show();
       } else {
         $('#noticeCategoryList').hide();
         $('input[name="notices"]').prop('checked', false);
       }
     });
</asset:script>