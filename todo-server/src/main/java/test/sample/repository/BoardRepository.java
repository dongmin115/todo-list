package test.sample.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import test.sample.Board;

public interface BoardRepository extends JpaRepository<Board, Long> {

}
