package academy.devdojo.maratonajava.javacore.Dconstrutores.dominio.test;

import academy.devdojo.maratonajava.javacore.Dconstrutores.dominio.dominio.Anime;

public class AnimeTest01 {
    public static void main(String[] args) {
        Anime anime = new Anime("Dragon Ball", "TV", 12, "Ação", "Production IG");
        Anime anime2 = new Anime();
        anime.imprime();
    }
}
