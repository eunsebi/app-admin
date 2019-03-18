package app.admin

import groovy.S3Manager
import org.springframework.http.ResponseEntity
import org.springframework.web.multipart.MultipartFile

class FileController {

    def image() {
        MultipartFile imageFile = request.getFile("files")
        println "file image Upload"

        if(!imageFile.empty) {
            def ext = imageFile.originalFilename.substring(imageFile.originalFilename.lastIndexOf('.'))
            def mil = System.currentTimeMillis()
            imageFile.transferTo(new File("${grailsApplication.config.grails.filePath}/images/", "${mil}${ext}"))

            render "<script>parent.\$.imageUploaded('${grailsApplication.config.grails.fileURL}/images/${mil}${ext}', '${mil}${ext}');</script>"
            println "render : " + "<script>parent.\$.imageUploaded('${grailsApplication.config.grails.fileURL}/images/${mil}${ext}', '${mil}${ext}');</script>"
        }

    }

    def imgUpload() {
        MultipartFile file = request.getFile("file")

        println "file : " + file

        String fileName
        println "ggggg"
        try {
            if (file.isEmpty()) {
                return new ResponseEntity("please select a file!", HttpStatus.OK)
            }
            S3Manager s3Manager = new S3Manager()
            fileName = s3Manager.saveUploadedFiles(file)
            println "hhhhhhhhhhhhhhhhhh"
        } catch (IOException e) {
            e.printStackTrace()
            return ResponseEntity.badRequest().build()
        }
        return ResponseEntity.ok().body(fileName)
    }
}
