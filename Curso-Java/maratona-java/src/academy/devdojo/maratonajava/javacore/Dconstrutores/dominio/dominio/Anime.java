package academy.devdojo.maratonajava.javacore.Dconstrutores.dominio.dominio;

public class Anime {
    private String nome;
    private String tipo;
    private int espisodios;
    private String genero;
    private String estudio;

    public Anime(String nome, String tipo, int espisodios, String genero) {
        this.nome = nome;
        this.tipo = tipo;
        this.espisodios = espisodios;
        this.genero = genero;
    }

    public Anime(String nome, String tipo, int espisodios, String genero, String estudio) {
        this(nome, tipo, espisodios, genero);
        this.genero = genero;
    }

    public Anime() {
        System.out.println("Dentro do constructor sem argumentos");
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public String getGenero() {
        return genero;
    }

    public void imprime() {
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
