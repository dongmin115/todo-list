package test.sample.dto;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class TodoRequest {

    private String title;
//    private MultipartFile thumbnail;
}
