package com.example.api_rest_character.character.controller;

import com.example.api_rest_character.CharacterDao;
import com.example.api_rest_character.exceptions.CharacterNotFoundException;
import com.example.api_rest_character.model.Character;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CharacterController {

    @Autowired
    private CharacterDao characterDao;

    @RequestMapping(value = "/characters", method = RequestMethod.GET)
    public List<Character> findAllCharacters() {
        return characterDao.findAll();
    }

    @GetMapping(value = "/character/{id}")
    public Character displayCharacterById(@PathVariable int id) {
        Character characterFound = characterDao.findCharacterById(id);
        if (characterFound == null) {
           throw new CharacterNotFoundException("Le personnage avec l'id " + id + " est INTROUVABLE");
        }
        return characterFound;
    }

    @DeleteMapping(value = "/character/{id}")
    public void deleteCharacterById(@PathVariable int id) {
        characterDao.deleteById(id);
    }

    @PutMapping(value = "/updateCharacter")
    public Character updateCharacter(@RequestBody Character character) {
        return characterDao.save(character);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(value = "/addCharacter")
    public Character addCharacter(@RequestBody Character character) {
        return characterDao.save(character);
    }
}
