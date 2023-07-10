package test.sample.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import test.sample.Board;
import test.sample.dto.TodoDto;
import test.sample.repository.BoardRepository;
import test.sample.s3.S3Uploader;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BoardService {

    private final BoardRepository boardRepository;

    @Transactional
    public void putTodo(Long id) {
        Optional<Board> findBoard = boardRepository.findById(id);
        if (findBoard.isPresent()) {
            findBoard.get().changeDone();
        }
    }

}
