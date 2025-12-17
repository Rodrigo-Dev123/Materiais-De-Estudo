package academy.devdojo.maratonajava.javacore.Csobrecargametodos.dominio;

public class Anime {
    private String nome;
    private String tipo;
    private int espisodios;
    private String genero;

    public void init(String nome, String tipo, int espisodios) {
        this.nome = nome;
        this.tipo = tipo;
        this.espisodios = espisodios;
    }

    public void init(String nome, String tipo, int espisodios, String genero) {
        this.init(nome, tipo, espisodios);
        this.genero = genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public String getGenero() {
        return genero;
    }

    public void imprime() {
        System.out.println("Dragon Ball");
        System.out.println(this.nome);
        System.out.println(this.tipo);
        System.out.println(this.espisodios);
        System.out.println(this.genero);
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getNome() {
        return nome;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public int getEspisodios() {
        return espisodios;
    }

    public void setEspisodios(int espisodios) {
        this.espisodios = espisodios;
    }
}
