// const express = require('express')
// const app = express()
// const port = 1506
// const attendance = [];

// app.get('/', (req, res) => {
// 	let query = req.query;
// 	attendance.push(query.name)
// 	console.log(attendance);
// 	res.send(attendance)
// })




// app.listen(port, () => console.log(`Example app listening on port ${port}!`))

import java.util.Scanner;
public class BATM {

public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    String username;
    String password;

    System.out.println("Log in:");
    System.out.println("username: ");
    username = input.next();

    System.out.println("password: ");
    password = input.next();

    //users check = new users(username, password);

    if(username.equals(username) && password.equals(password)) 
        System.out.println("You are logged in");



}

}