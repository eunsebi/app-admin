package groovy

import com.amazonaws.auth.profile.ProfileCredentialsProvider
import com.amazonaws.services.s3.AmazonS3
import com.amazonaws.services.s3.AmazonS3Client
import com.amazonaws.services.s3.model.CannedAccessControlList
import com.amazonaws.services.s3.model.ObjectMetadata
import com.amazonaws.services.s3.model.PutObjectRequest
import org.springframework.web.multipart.MultipartFile

class S3Manager {
    private static final String amazonPath = "https://s3.ap-northeast-2.amazonaws.com/ekkor/img";
    private static AmazonS3 s3Cliient = new AmazonS3Client(new ProfileCredentialsProvider());
    private static ObjectMetadata meta;
    public String saveUploadedFiles(MultipartFile file) throws IOException {
        if (file.isEmpty()) {
            System.out.println("file not found");
        }
        byte[] bytes = file.getBytes();
        String randomFileName = UUID.randomUUID() + file.getOriginalFilename();
        sendFiles(randomFileName, bytes);
        return amazonPath + randomFileName;
    }
    public static boolean sendFiles(String name, byte[] file) {
        InputStream is = new ByteArrayInputStream(file);
        try {
            s3Cliient.putObject(makeRequest(is, name));
            return true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }
    public static PutObjectRequest makeRequest(InputStream is, String fileName) {
        ObjectMetadata uploadMetaData = new ObjectMetadata();
        return new PutObjectRequest("ekkor", fileName, is, uploadMetaData).withCannedAcl(CannedAccessControlList.PublicRead);
    }
}
