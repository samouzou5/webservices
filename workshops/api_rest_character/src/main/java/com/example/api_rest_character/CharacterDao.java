package com.example.api_rest_character;

import com.example.api_rest_character.model.Character;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CharacterDao extends JpaRepository<Character, Integer> {
    Character findCharacterById(int id);
    List<Character> findAll();
}
