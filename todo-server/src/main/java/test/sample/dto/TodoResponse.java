package test.sample.dto;

import lombok.Data;
import test.sample.Board;

import java.util.List;

@Data
public class TodoResponse {

    private List<TodoDto> todos;

    public TodoResponse(List<TodoDto> todos) {
        this.todos = todos;
    }

}
