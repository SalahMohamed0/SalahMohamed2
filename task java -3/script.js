let usersLength = parseInt(prompt("Enter number of users:"));
 let users = [];

 function collectUsersData(count, currentIndex = 0) {
     if (currentIndex >= count) {
         return;
  }
 }
 let id = parseInt(prompt("Enter ID of user"));
   let name = prompt("Enter name for user");  
     let balance = parseFloat(prompt("Enter balance for user"));

     users.push({id: id, fName: name, b: balance});

  

 collectUsersData(usersLength);
 console.log(users);
 let editId = parseInt(prompt("Enter ID of user to edit balance:"));
 let newBalance = parseFloat(prompt("Enter new balance:"));

 function editBalanceById(id, balance) {
     let user = users.find(u => u.id === id);
     if (user) {
         user.b = balance;
     }
}
editBalanceById(editId, newBalance);

 let delete_id = parseInt(prompt("Enter ID to delete:"));
 function deleteUserById(id) {
         let index = users.findIndex(u => u.id === id);
   if (index !== -1) {
             users.splice(index, 1);
       console.log("User with ID deleted successfully.");
         } else {
       console.log("User with ID  found");
     }
 }

 deleteUserById(delete_id);

 console.log("Final users list:");
 console.log(users);