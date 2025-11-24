package academy.devdojo.maratonajava;

public class Aula05EstruturasCondicionais {
    public static void main(String[] args) {
        double valorTotal = 30000;
        for (int parcela = 1; parcela <= valorTotal; parcela++) {
            double valorParcela = valorTotal / parcela;
            System.out.println(parcela);
            if (valorParcela >= 1000) {
                continue;
            }

            System.out.println("Parcela " + parcela+ " R$ " + valorParcela);
        }
    }
}