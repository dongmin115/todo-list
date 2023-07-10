package test.sample;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Board {

    @Id
    @GeneratedValue
    @Column(name = "board_id")
    private Long id;

    private String title;

    private String thumbnail;

    private boolean done;

    @Builder
    public Board(String title, String thumbnail) {
        this.title = title;
        this.thumbnail = thumbnail;
        this.done = false;
    }

    public void changeDone() {
        this.done = !done;
    }

}
