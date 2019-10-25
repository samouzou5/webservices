package org.polytech.client;

public class ClientSoap {
    public static void main(String[] args) {
        BooksPortService serviceBook = new BooksPortService();
        GetBooksRequest booksRequest = new GetBooksRequest();
        GetBooksResponse booksResponse = serviceBook.getBooksPortSoap11().getBooks(booksRequest);

        System.out.println("Réponse getBooksRequest");
        booksResponse.getBooks().forEach(book -> {
            System.out.println("Id : " + book.getId());
            System.out.println("Name : " + book.getName());
            System.out.println("Publisher : " + book.getPublisher());
            System.out.println("Number of pages : " + book.getNumberOfPages());
            System.out.println("--------------------------------------------");
        });

        System.out.println();
        System.out.println("--------------------------------------------");
        System.out.println("Réponse getBookRequest");
        GetBookRequest bookRequestbyId = new GetBookRequest();
        bookRequestbyId.setId(3);
        GetBookResponse getBookResponse = serviceBook.getBooksPortSoap11().getBook(bookRequestbyId);
        Book responseBook = getBookResponse.getBook();
        System.out.println("Id : " + responseBook.getId());
        System.out.println("Name : " + responseBook.getName());
        System.out.println("Publisher : " + responseBook.getPublisher());
        System.out.println("Number of pages : " + responseBook.getNumberOfPages());
        System.out.println("--------------------------------------------");

    }
}
