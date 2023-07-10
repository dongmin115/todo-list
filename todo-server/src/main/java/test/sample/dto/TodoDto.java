package test.sample.dto;

import lombok.Data;
import test.sample.Board;

@Data
public class TodoDto {

    private Long id;

    private String title;

    private String thumbnail;

    private boolean done;

    public TodoDto(Board board) {
        this.id = board.getId();
        this.title = board.getTitle();
        this.thumbnail = board.getThumbnail();
        this.done = board.isDone();
    }
}
