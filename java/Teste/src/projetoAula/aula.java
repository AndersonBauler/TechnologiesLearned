package projetoAula;

public class aula {

	public static void main(String[] args) {
		String resultado;
		int idade = 19;
		
		if (idade < 12) {
			resultado = "Crian�a";
		} else if (idade >= 12 && idade < 18) {
			resultado = "Adolescente";
		} else {
			resultado = "Adulto";
		}
		
		System.out.println( resultado );

	}

}