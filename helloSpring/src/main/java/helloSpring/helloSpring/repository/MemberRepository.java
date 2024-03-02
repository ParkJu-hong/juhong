package helloSpring.helloSpring.repository;
import helloSpring.helloSpring.domain.Member;
import java.util.Optional;
import java.util.List;


public interface MeberRepository {
    Member save(Member member);
    Optional<Member> findById(Long id);
    Optional<Member> findByName(String name);
    List<Member> findAll();
}
